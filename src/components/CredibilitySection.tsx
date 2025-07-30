import { Card } from "@/components/ui/card";
import { Users, Clock, Star } from "lucide-react";

const CredibilitySection = () => {
  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Atendimentos realizados",
      description: "Vidas salvas com excelência"
    },
    {
      icon: Clock,
      number: "8-12min",
      label: "Tempo médio de chegada",
      description: "Rapidez que salva vidas"
    },
    {
      icon: Star,
      number: "98%",
      label: "Satisfação dos clientes",
      description: "Confiança comprovada"
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Confiança Comprovada
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Números que demonstram nossa excelência em atendimento de emergência
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center p-8 bg-card shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 border-0"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-trust-gradient rounded-full mb-6">
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              
              <div className="text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emergency/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🏥</span>
              </div>
              <span className="font-semibold text-primary">Licenciados</span>
              <span className="text-sm text-muted-foreground">SAMU & ANS</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emergency/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="font-semibold text-primary">Rapidez</span>
              <span className="text-sm text-muted-foreground">Resposta imediata</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emergency/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🛡️</span>
              </div>
              <span className="font-semibold text-primary">Segurança</span>
              <span className="text-sm text-muted-foreground">Equipamentos modernos</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emergency/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <span className="font-semibold text-primary">Especialistas</span>
              <span className="text-sm text-muted-foreground">Equipe qualificada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;