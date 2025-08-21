// FixNow JavaScript functionality

// Services data
const services = [
    { id: 1, name: "Plomería", icon: "bi-droplet", description: "Reparación de tuberías, grifos y sistemas de agua", rating: 0 },
    { id: 2, name: "Electricidad", icon: "bi-lightning", description: "Instalaciones eléctricas y reparación de cables", rating: 0 },
    { id: 3, name: "Carpintería", icon: "bi-hammer", description: "Muebles, puertas y trabajos en madera", rating: 0 },
    { id: 4, name: "Pintura", icon: "bi-palette", description: "Pintura interior y exterior de viviendas", rating: 0 },
    { id: 5, name: "Lavadoras y Neveras", icon: "bi-cpu", description: "Reparación de lavadoras, neveras y electrodomésticos", rating: 0 },
    { id: 6, name: "Aire Acondicionado", icon: "bi-snow", description: "Instalación y mantenimiento de AC", rating: 0 },
    { id: 7, name: "Cerrajería", icon: "bi-shield-lock", description: "Cerraduras, llaves y sistemas de seguridad", rating: 0 },
    { id: 8, name: "Parqueaderos", icon: "bi-car-front", description: "Mantenimiento de garajes y parqueaderos", rating: 0 },
    { id: 9, name: "Mantenimiento General", icon: "bi-wrench", description: "Reparaciones generales del hogar", rating: 0 }
];

// Global variables
let serviceRatings = [...services];
let countdownInterval;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    renderServiceCards();
    setupFormHandlers();
});

// Countdown Timer
function initCountdown() {
    const targetDate = new Date('2025-09-15T00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }
    }
    
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

// Render Service Rating Cards
function renderServiceCards() {
    const container = document.querySelector('#rating-form .row');
    container.innerHTML = '';
    
    serviceRatings.forEach(service => {
        const cardHtml = `
            <div class="col-md-6">
                <div class="card service-card h-100 shadow-sm">
                    <div class="card-header bg-transparent border-0 pb-2">
                        <div class="d-flex align-items-center">
                            <div class="service-icon rounded-circle d-flex align-items-center justify-content-center me-3">
                                <i class="${service.icon} text-primary"></i>
                            </div>
                            <div>
                                <h6 class="card-title mb-1 fw-semibold">${service.name}</h6>
                                <p class="card-text small text-muted mb-0">${service.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-2">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="small fw-medium text-muted">Frecuencia de uso:</span>
                            <span class="fw-bold fs-5 ${getRatingColorClass(service.rating)}" id="rating-${service.id}">
                                ${service.rating > 0 ? service.rating : '-'}
                            </span>
                        </div>
                        <div class="rating-buttons d-flex justify-content-center flex-wrap">
                            ${generateRatingButtons(service.id, service.rating)}
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Generate rating buttons
function generateRatingButtons(serviceId, currentRating) {
    let buttons = '';
    for (let i = 1; i <= 10; i++) {
        const isActive = currentRating === i;
        buttons += `
            <button class="btn ${isActive ? 'btn-primary' : 'btn-outline-primary'} btn-sm" 
                    onclick="updateRating(${serviceId}, ${i})">
                ${i}
            </button>
        `;
    }
    return buttons;
}

// Update service rating
function updateRating(serviceId, rating) {
    serviceRatings = serviceRatings.map(service => 
        service.id === serviceId ? { ...service, rating } : service
    );
    
    // Update display
    document.getElementById(`rating-${serviceId}`).textContent = rating;
    document.getElementById(`rating-${serviceId}`).className = `fw-bold fs-5 ${getRatingColorClass(rating)}`;
    
    // Update buttons
    const container = document.querySelector(`#rating-${serviceId}`).closest('.card-body');
    const buttonsContainer = container.querySelector('.rating-buttons');
    buttonsContainer.innerHTML = generateRatingButtons(serviceId, rating);
    
    // Enable/disable results button
    const hasRatings = serviceRatings.some(service => service.rating > 0);
    document.getElementById('show-results').disabled = !hasRatings;
}

// Get rating color class
function getRatingColorClass(rating) {
    if (rating >= 9) return 'rating-excellent';
    if (rating >= 7) return 'rating-good';
    if (rating >= 5) return 'rating-average';
    if (rating > 0) return 'rating-poor';
    return 'text-muted';
}

// Show results
function showResults() {
    const topServices = serviceRatings
        .filter(service => service.rating > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);
    
    const resultsContainer = document.getElementById('results-list');
    resultsContainer.innerHTML = '';
    
    topServices.forEach((service, index) => {
        const cardHtml = `
            <div class="card result-card mb-3 shadow border-0">
                <div class="card-body p-4">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <div class="position-relative me-4">
                                <span class="badge bg-primary text-white result-badge d-flex align-items-center justify-content-center fw-bold">
                                    ${index + 1}
                                </span>
                                <div class="result-icon bg-light rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="${service.icon} text-primary"></i>
                                </div>
                            </div>
                            <div>
                                <h5 class="fw-semibold mb-1">${service.name}</h5>
                                <p class="text-muted mb-0">${service.description}</p>
                            </div>
                        </div>
                        <div class="text-end">
                            <div class="fs-2 fw-bold ${getRatingColorClass(service.rating)}">
                                ${service.rating.toFixed(1)}
                            </div>
                            <div class="d-flex">
                                ${generateStars(service.rating)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        resultsContainer.insertAdjacentHTML('beforeend', cardHtml);
    });
    
    // Hide form and show results
    document.getElementById('rating-form').classList.add('d-none');
    document.getElementById('results-section').classList.remove('d-none');
    
    // Scroll to results
    document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
}

// Generate star rating display
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating / 2);
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="bi bi-star-fill text-warning"></i>';
        } else {
            stars += '<i class="bi bi-star text-muted"></i>';
        }
    }
    return stars;
}

// Form handlers
function setupFormHandlers() {
    const form = document.getElementById('beta-registration-form');
    if (form) {
        form.addEventListener('submit', handleBetaFormSubmit);
    }
}

// Handle beta form submission
function handleBetaFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const building = document.getElementById('building').value;
    
    if (name && email && building) {
        // Hide form card and show success card
        document.getElementById('form-card').classList.add('d-none');
        document.getElementById('success-card').classList.remove('d-none');
        
        // Here you would typically send the data to a server
        console.log('Beta registration submitted:', {
            name,
            email,
            phone: document.getElementById('phone').value,
            building,
            apartment: document.getElementById('apartment').value,
            role: document.getElementById('role').value,
            interests: document.getElementById('interests').value
        });
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add some entrance animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    });

    document.querySelectorAll('.card, .team-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', addScrollAnimations);