import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Search, CreditCard, Star } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Smartphone,
    title: "Solicita el Servicio",
    description: "Usa nuestra app móvil para solicitar el servicio que necesitas de forma rápida y sencilla"
  },
  {
    id: 2,
    icon: Search,
    title: "Encuentra tu Técnico",
    description: "Te conectamos con técnicos certificados y verificados en tu zona con evaluaciones reales"
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Pago Seguro",
    description: "Realiza el pago de forma segura a través de nuestra plataforma protegida"
  },
  {
    id: 4,
    icon: Star,
    title: "Recibe y Evalúa",
    description: "Recibe tu servicio con garantía completa y evalúa la experiencia para ayudar a otros"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¿Cómo Funciona FixNow?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuatro simples pasos para conectarte con los mejores técnicos de tu zona
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm flex-1">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Conectores entre pasos */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-primary"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">Comenzando en Cartagena</span> - 
            Próximamente en más ciudades de Colombia
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;