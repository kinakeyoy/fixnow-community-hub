import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Mail, Phone, User, CheckCircle } from "lucide-react";
import { useState } from "react";

const EarlyAccessForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    building: "",
    apartment: "",
    role: "",
    interests: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.building) {
      setSubmitted(true);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-medium">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¡Bienvenido al programa Beta!
              </h3>
              <p className="text-muted-foreground mb-6">
                Te hemos registrado exitosamente. Recibirás un email con más información 
                sobre el acceso anticipado a FixNow.
              </p>
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm">
                Acceso Beta Confirmado
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Únete al Programa Beta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sé de los primeros en probar FixNow. Acceso anticipado, beneficios exclusivos 
            y la oportunidad de dar forma al futuro de los servicios domiciliarios.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  <span>Beneficios del Beta</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge className="bg-secondary text-secondary-foreground mt-1">1</Badge>
                  <div>
                    <h4 className="font-semibold text-foreground">Acceso Anticipado</h4>
                    <p className="text-sm text-muted-foreground">
                      Prueba la app antes del lanzamiento oficial
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-secondary text-secondary-foreground mt-1">2</Badge>
                  <div>
                    <h4 className="font-semibold text-foreground">Descuentos Exclusivos</h4>
                    <p className="text-sm text-muted-foreground">
                      30% de descuento en tu primer servicio
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-secondary text-secondary-foreground mt-1">3</Badge>
                  <div>
                    <h4 className="font-semibold text-foreground">Influencia en el Desarrollo</h4>
                    <p className="text-sm text-muted-foreground">
                      Tu feedback moldea las características finales
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-secondary text-secondary-foreground mt-1">4</Badge>
                  <div>
                    <h4 className="font-semibold text-foreground">Soporte Prioritario</h4>
                    <p className="text-sm text-muted-foreground">
                      Atención directa del equipo de desarrollo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-6 w-6 text-primary" />
                  <span>Registro Beta</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="building">Conjunto Residencial *</Label>
                      <Input
                        id="building"
                        value={formData.building}
                        onChange={(e) => handleInputChange("building", e.target.value)}
                        placeholder="Nombre del conjunto"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apartment">Apartamento/Casa</Label>
                      <Input
                        id="apartment"
                        value={formData.apartment}
                        onChange={(e) => handleInputChange("apartment", e.target.value)}
                        placeholder="Apt 101 / Casa 15"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">¿Eres?</Label>
                    <Select onValueChange={(value) => handleInputChange("role", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="resident">Residente</SelectItem>
                        <SelectItem value="admin">Administrador</SelectItem>
                        <SelectItem value="technician">Técnico/Profesional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">¿Qué servicios te interesan más?</Label>
                    <Textarea
                      id="interests"
                      value={formData.interests}
                      onChange={(e) => handleInputChange("interests", e.target.value)}
                      placeholder="Cuéntanos qué tipos de reparaciones necesitas con más frecuencia..."
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    variant="hero"
                    disabled={!formData.name || !formData.email || !formData.building}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Unirme al Beta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessForm;