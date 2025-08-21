import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Ambulance, 
  Heart, 
  Stethoscope, 
  Truck, 
  Shield, 
  Clock,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Ambulance,
      title: "Remoção de Emergência",
      description: "Transporte urgente com suporte avançado de vida, equipamentos de UTI móvel e equipe especializada.",
      features: ["UTI Móvel", "Desfibrilador", "Ventilador Mecânico", "Equipe ACLS"],
      color: "bg-emergency/10 text-emergency"
    },
    {
      icon: Heart,
      title: "Emergências Cardiológicas",
      description: "Atendimento especializado para infartos, arritmias e outras emergências do coração.",
      features: ["ECG 12 derivações", "Medicações específicas", "Monitorização contínua", "Cardiologista on-call"],
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Stethoscope,
      title: "Suporte Básico de Vida",
      description: "Atendimento pré-hospitalar com técnicos especializados e equipamentos essenciais.",
      features: ["Técnicos habilitados", "Oxigenoterapia", "Imobilização", "Primeiros socorros"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Truck,
      title: "Transporte Inter-hospitalar",
      description: "Transferência segura entre hospitais com manutenção do cuidado médico continuado.",
      features: ["Médico acompanhante", "Equipamentos portáteis", "Comunicação hospitalar", "Relatório médico"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Shield,
      title: "Eventos e Empresas",
      description: "Cobertura médica para eventos corporativos, esportivos e de grande porte.",
      features: ["Equipe standby", "Posto médico", "Cobertura personalizada", "Relatório final"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Clock,
      title: "Plantão Médico 24h",
      description: "Médicos plantonistas disponíveis 24h para orientação e atendimento domiciliar.",
      features: ["Consulta domiciliar", "Orientação telefônica", "Prescrição médica", "Atendimento imediato"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Atendimento médico especializado com tecnologia de ponta e equipe altamente qualificada para todas as emergências
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 group"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${service.color}`}>
                <service.icon className="h-8 w-8" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                onClick={() => {
                  const message = "vi seu anuncio e acessei sua LP e gostaria de saber mais";
                  const whatsappUrl = `https://wa.me/5541991630333?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                Solicitar Atendimento
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Emergency Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-emergency/5 rounded-2xl p-8 max-w-4xl mx-auto border border-emergency/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Precisa de atendimento urgente?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa central de emergências está disponível 24 horas por dia, 7 dias por semana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="emergency"
                size="lg"
                className="gap-2"
                onClick={() => window.location.href = 'tel:41991630333'}
              >
                <Ambulance className="h-5 w-5" />
                EMERGÊNCIA: (41) 99163-0333
              </Button>
              <Button
                variant="emergency-orange"
                size="lg"
                className="gap-2"
                onClick={() => {
                  const message = "vi seu anuncio e acessei sua LP e gostaria de saber mais";
                  const whatsappUrl = `https://wa.me/5541991630333?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                WhatsApp Imediato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;