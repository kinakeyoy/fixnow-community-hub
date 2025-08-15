import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Fix<span className="text-accent">Now</span>
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Conectando residentes con técnicos de confianza en conjuntos residenciales. 
                Reparaciones rápidas, seguras y confiables.
              </p>
            </div>
            <Badge className="bg-accent text-accent-foreground px-3 py-1">
              <Calendar className="mr-2 h-4 w-4" />
              Lanzamiento: 15 Sept 2025
            </Badge>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">info@fixnow.co</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">+57 300 FIXNOW</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios Principales</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Plomería",
                "Electricidad", 
                "Carpintería",
                "Pintura",
                "Electrodomésticos",
                "Aire Acondicionado"
              ].map((service) => (
                <div key={service} className="text-sm text-primary-foreground/80">
                  • {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 FixNow. Todos los derechos reservados. | Powered by Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;