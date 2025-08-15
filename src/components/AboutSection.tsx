import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¿Qué es FixNow?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            FixNow es una aplicación móvil innovadora que conecta residentes de conjuntos residenciales 
            con técnicos y profesionales de reparaciones domiciliarias de confianza. Facilitamos la 
            solicitud, gestión y seguimiento de servicios de mantenimiento, brindando 
            <span className="text-primary font-semibold"> seguridad, rapidez y eficiencia</span> en 
            la contratación de estos servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Técnicos Verificados</h3>
              <p className="text-sm text-muted-foreground">Red de profesionales certificados con evaluaciones verificadas</p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Solicitud Rápida</h3>
              <p className="text-sm text-muted-foreground">Interfaz intuitiva para solicitar servicios al instante</p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Pagos Seguros</h3>
              <p className="text-sm text-muted-foreground">Transacciones protegidas dentro de la plataforma</p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Garantía Total</h3>
              <p className="text-sm text-muted-foreground">Seguimiento completo y garantía en cada servicio</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;