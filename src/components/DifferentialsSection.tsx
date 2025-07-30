import { Card } from "@/components/ui/card";
import { 
  UserCheck, 
  Truck, 
  Clock, 
  Zap, 
  Shield, 
  HeartHandshake,
  Smartphone,
  MapPin
} from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: UserCheck,
      title: "Equipe Especializada",
      description: "Médicos, enfermeiros e técnicos com certificação em emergência pré-hospitalar e suporte avançado de vida.",
      features: ["Certificação ACLS", "Experiência hospitalar", "Treinamento contínuo", "Protocolos atualizados"]
    },
    {
      icon: Truck,
      title: "Ambulâncias Equipadas",
      description: "Frota moderna com equipamentos de UTI móvel, desfibriladores, ventiladores e medicações de emergência.",
      features: ["UTI móvel completa", "Desfibrilador automático", "Ventilador mecânico", "Farmácia de emergência"]
    },
    {
      icon: Clock,
      title: "Cobertura 24 Horas",
      description: "Atendimento ininterrupto todos os dias da semana, incluindo feriados, com equipes plantonistas dedicadas.",
      features: ["24h por dia", "7 dias por semana", "Feriados inclusos", "Resposta imediata"]
    },
    {
      icon: Zap,
      title: "Rapidez no Atendimento",
      description: "Sistema de dispatch otimizado e frota estrategicamente posicionada para tempo de resposta de 8-12 minutos.",
      features: ["GPS em tempo real", "Rota otimizada", "Central integrada", "Comunicação direta"]
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Protocolos rigorosos de segurança, equipamentos certificados e seguros médicos para total tranquilidade.",
      features: ["Protocolos SAMU", "Equipamentos certificados", "Seguro médico", "Controle de qualidade"]
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Humanizado",
      description: "Cuidado compassivo com pacientes e familiares, comunicação clara e suporte emocional durante emergências.",
      features: ["Comunicação clara", "Suporte familiar", "Cuidado humanizado", "Orientação médica"]
    },
    {
      icon: Smartphone,
      title: "Tecnologia Avançada",
      description: "Sistema de monitorização remota, telemedicina e comunicação direta com hospitais de destino.",
      features: ["Monitorização remota", "Telemedicina", "Comunicação hospitalar", "Relatório digital"]
    },
    {
      icon: MapPin,
      title: "Cobertura Regional",
      description: "Atendimento em Curitiba e toda região metropolitana com conhecimento detalhado da área de cobertura.",
      features: ["Curitiba completa", "Região metropolitana", "Mapeamento detalhado", "Rotas alternativas"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O que nos torna a escolha número 1 em emergências médicas na região de Curitiba
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {differentials.slice(0, 4).map((item, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 group text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-trust-gradient rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Detailed Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentials.slice(4).map((item, index) => (
            <Card 
              key={index + 4} 
              className="p-8 bg-card shadow-soft hover:shadow-lg transition-all duration-300 border-0"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-trust-gradient rounded-xl flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-white" />
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-trust-gradient rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para ter o melhor atendimento de emergência?
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Entre em contato agora e tenha a tranquilidade de contar com especialistas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-emergency hover:bg-emergency/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-emergency"
                onClick={() => window.open('https://wa.me/5541991630333', '_blank')}
              >
                SOLICITAR AMBULÂNCIA AGORA
              </button>
              <button 
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm"
                onClick={() => window.open('https://wa.me/5541991630333', '_blank')}
              >
                FALAR COM ESPECIALISTA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;