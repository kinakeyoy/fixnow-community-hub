import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Wrench } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Residentes de Conjuntos",
    description: "Personas que viven en apartamentos y casas en conjuntos residenciales que necesitan servicios de reparación y mantenimiento confiables.",
    benefits: [
      "Acceso inmediato a técnicos verificados",
      "Servicios con garantía completa",
      "Pagos seguros y transparentes"
    ]
  },
  {
    icon: Building,
    title: "Administradores de Propiedades",
    description: "Administradores que necesitan gestionar el mantenimiento de múltiples unidades y áreas comunes de manera eficiente.",
    benefits: [
      "Red de proveedores de confianza",
      "Gestión centralizada de servicios",
      "Tarifas preferenciales por volumen"
    ]
  },
  {
    icon: Wrench,
    title: "Técnicos y Profesionales",
    description: "Profesionales en reparaciones domiciliarias que buscan ampliar su base de clientes con un respaldo tecnológico.",
    benefits: [
      "Plataforma para conseguir más clientes",
      "Sistema de pagos integrado",
      "Herramientas de gestión profesional"
    ]
  }
];

const TargetAudienceSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-accent/5 via-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¿Para Quién es FixNow?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra plataforma conecta a toda la comunidad residencial en un ecosistema de confianza
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <audience.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {audience.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {audience.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm mb-3">Beneficios:</h4>
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;