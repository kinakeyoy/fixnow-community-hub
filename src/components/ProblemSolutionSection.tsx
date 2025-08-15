import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            El Problema que Resolvemos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Problema */}
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                <h3 className="text-2xl font-bold text-foreground">El Problema</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  En muchas comunidades residenciales, encontrar un técnico confiable y disponible es complicado:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Dependencia de recomendaciones informales sin garantías
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Búsquedas en línea sin verificación de calidad
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Falta de seguimiento y garantías del servicio
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Tiempo perdido contactando múltiples proveedores
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Solución */}
          <Card className="bg-secondary/5 border-secondary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Nuestra Solución</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  FixNow proporciona una red de profesionales verificados con un sistema integral:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    Red de técnicos certificados con evaluaciones verificadas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    Solicitud rápida mediante interfaz intuitiva
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    Pagos seguros dentro de la plataforma
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    Garantía y seguimiento completo del servicio
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;