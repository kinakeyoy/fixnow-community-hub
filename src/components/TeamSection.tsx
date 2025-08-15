import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Enrique Rojas",
    role: "Co-fundador",
    profession: "Ingeniero de Sistemas",
    image: null
  },
  {
    id: 2,
    name: "Deiner Hernández",
    role: "Co-fundador", 
    profession: "Ingeniero de Sistemas",
    image: null
  },
  {
    id: 3,
    name: "Armando Altamar",
    role: "Co-fundador",
    profession: "Ingeniero de Sistemas",
    image: null
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Conoce Nuestro Equipo
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Un equipo comprometido con la innovación y la excelencia en servicios domiciliarios
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <Badge variant="secondary" className="text-sm font-medium">
              Orgullosos egresados de Universidad de Cartagena - Modalidad Distancia
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6 mx-auto w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <User className="h-12 w-12 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium mb-1">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {member.profession}
                </p>
                
                <div className="h-1 w-16 bg-gradient-primary mx-auto rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Unidos por la visión de transformar los servicios domiciliarios en Colombia
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;