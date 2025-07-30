import { Button } from "@/components/ui/button";
import { Ambulance, Phone, Clock } from "lucide-react";
import heroImage from "@/assets/hero-ambulance.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Remoções de
            <span className="block text-emergency-orange">Emergência 24h</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Atendimento Imediato em <strong>Curitiba e Região</strong>
            <br />
            Equipe especializada pronta para salvar vidas
          </p>

          {/* Response Time Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-10">
            <Clock className="h-5 w-5 text-emergency-orange" />
            <span className="font-semibold">Tempo médio de resposta: 8-12 minutos</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="emergency" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto min-w-[280px]"
              onClick={() => window.open('https://wa.me/5541991630333', '_blank')}
            >
              <Ambulance className="h-6 w-6 mr-3" />
              SOLICITAR AMBULÂNCIA
            </Button>
            
            <Button 
              variant="emergency-orange" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto min-w-[280px]"
              onClick={() => window.open('https://wa.me/5541991630333', '_blank')}
            >
              <Phone className="h-6 w-6 mr-3" />
              FALAR COM ATENDENTE
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Disponível agora</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span>✓ Licenciado SAMU</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span>✓ Cobertura total 24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;