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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Remoções de
            <span className="block text-emergency-orange">Emergência 24h</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed px-4">
            Atendimento Imediato em <strong>Curitiba e Região</strong>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Equipe especializada pronta para salvar vidas</span>
          </p>

          {/* Response Time Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 mb-8 sm:mb-10 text-sm sm:text-base">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-emergency-orange" />
            <span className="font-semibold">Tempo médio: 8-15 min</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center px-4">
            <Button
              variant="emergency"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 h-auto min-w-[280px] max-w-[350px]"
              onClick={() => {
                const message = "vi seu anuncio e acessei sua LP e gostaria de saber mais";
                const whatsappUrl = `https://wa.me/5541991630333?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <Ambulance className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
              SOLICITAR AMBULÂNCIA
            </Button>
            
            <Button
              variant="emergency-orange"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 h-auto min-w-[280px] max-w-[350px]"
              onClick={() => window.location.href = 'tel:41991630333'}
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
              FALAR COM ATENDENTE
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mt-8 sm:mt-12 text-xs sm:text-sm px-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Disponível agora</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2">
              <span>✓ Licenciado SAMU</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2">
              <span>✓ Cobertura total 24h</span>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-md mx-auto">
            <p className="text-sm sm:text-base mb-2 text-white/80">
              Para emergências imediatas:
            </p>
            <a 
              href="tel:41991630333" 
              className="text-xl sm:text-2xl font-bold text-emergency-orange hover:text-emergency-orange/90 transition-colors block"
            >
              (41) 99163-0333
            </a>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Linha direta 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;