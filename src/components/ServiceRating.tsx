import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Wrench, Droplets, Zap, Hammer, PaintBucket, Cpu, Snowflake, Shield, Car, Lightbulb } from "lucide-react";
import { useState } from "react";

const services = [
  { id: 1, name: "Plomería", icon: Droplets, description: "Reparación de tuberías, grifos y sistemas de agua", rating: 0 },
  { id: 2, name: "Electricidad", icon: Zap, description: "Instalaciones eléctricas y reparación de cables", rating: 0 },
  { id: 3, name: "Carpintería", icon: Hammer, description: "Muebles, puertas y trabajos en madera", rating: 0 },
  { id: 4, name: "Pintura", icon: PaintBucket, description: "Pintura interior y exterior de viviendas", rating: 0 },
  { id: 5, name: "Lavadoras y Neveras", icon: Cpu, description: "Reparación de lavadoras, neveras y electrodomésticos", rating: 0 },
  { id: 6, name: "Aire Acondicionado", icon: Snowflake, description: "Instalación y mantenimiento de AC", rating: 0 },
  { id: 7, name: "Cerrajería", icon: Shield, description: "Cerraduras, llaves y sistemas de seguridad", rating: 0 },
  { id: 8, name: "Parqueaderos", icon: Car, description: "Mantenimiento de garajes y parqueaderos", rating: 0 },
  { id: 9, name: "Mantenimiento General", icon: Wrench, description: "Reparaciones generales del hogar", rating: 0 }
];

const ServiceRating = () => {
  const [serviceRatings, setServiceRatings] = useState(services);
  const [submitted, setSubmitted] = useState(false);

  const updateRating = (serviceId: number, rating: number) => {
    setServiceRatings(prev => 
      prev.map(service => 
        service.id === serviceId ? { ...service, rating } : service
      )
    );
  };

  const getTopServices = () => {
    return serviceRatings
      .filter(service => service.rating > 0)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
  };

  const handleSubmit = () => {
    const ratedServices = serviceRatings.filter(service => service.rating > 0);
    if (ratedServices.length > 0) {
      setSubmitted(true);
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-600";
    if (rating >= 7) return "text-yellow-600";
    if (rating >= 5) return "text-orange-600";
    return "text-red-600";
  };

  if (submitted) {
    const topServices = getTopServices();
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              ¡Gracias por tu evaluación!
            </h2>
            <p className="text-xl text-muted-foreground">
              Top 5 servicios más demandados según la comunidad
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {topServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="bg-gradient-card border-0 shadow-medium overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Badge className="absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-primary">
                            {index + 1}
                          </Badge>
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-3xl font-bold ${getRatingColor(service.rating)}`}>
                          {service.rating.toFixed(1)}
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < service.rating / 2 ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¿Qué servicios necesitas más?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Califica del 1 al 10 la frecuencia con la que necesitas estos servicios en tu hogar.
            Tu opinión nos ayuda a conectarte con los mejores técnicos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {serviceRatings.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                        <p className="text-sm text-muted-foreground font-normal">{service.description}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          Frecuencia de uso:
                        </span>
                        <span className={`text-lg font-bold ${service.rating > 0 ? getRatingColor(service.rating) : 'text-muted-foreground'}`}>
                          {service.rating > 0 ? service.rating : '-'}
                        </span>
                      </div>
                      <div className="grid grid-cols-10 gap-1">
                        {[...Array(10)].map((_, i) => (
                          <Button
                            key={i}
                            size="sm"
                            variant={service.rating === i + 1 ? "default" : "outline"}
                            className="h-8 w-8 p-0 text-xs"
                            onClick={() => updateRating(service.id, i + 1)}
                          >
                            {i + 1}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="success"
              onClick={handleSubmit}
              disabled={serviceRatings.every(service => service.rating === 0)}
              className="min-w-[200px]"
            >
              Ver Resultados
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRating;