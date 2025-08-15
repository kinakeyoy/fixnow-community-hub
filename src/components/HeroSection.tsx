import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-15T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Fix<span className="text-accent">Now</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Conecta con técnicos verificados en tu conjunto residencial. 
              Reparaciones confiables al alcance de tu mano.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto p-8 bg-white/95 backdrop-blur-sm shadow-medium border-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Días</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{timeLeft.hours}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Horas</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{timeLeft.minutes}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Minutos</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Segundos</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-foreground font-medium">
                🚀 Lanzamiento oficial: 15 de Septiembre 2025
              </p>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="hero" variant="hero" className="min-w-[200px]">
              <Users className="mr-2 h-5 w-5" />
              Únete al Beta
            </Button>
            <Button size="hero" variant="premium" className="min-w-[200px]">
              <Star className="mr-2 h-5 w-5" />
              Conoce Más
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-soft">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">Respuesta Rápida</h3>
                <p className="text-sm text-muted-foreground">Técnicos disponibles 24/7 en tu conjunto</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-soft">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">Técnicos Verificados</h3>
                <p className="text-sm text-muted-foreground">Profesionales con experiencia comprobada</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-soft">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">Calidad Garantizada</h3>
                <p className="text-sm text-muted-foreground">Sistema de calificaciones y seguimiento</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;