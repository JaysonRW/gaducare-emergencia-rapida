import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Ambulance } from "lucide-react";
import logoGadu from "@/assets/logo-gadu.png";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logoGadu} alt="GADU Emergências" className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">GADU</span>
            <span className="text-sm text-muted-foreground">Emergências</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        {/* Emergency Contact */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-sm font-semibold text-primary">Emergência 24h</span>
            <a 
              href="tel:41991630333" 
              className="text-lg font-bold text-emergency hover:text-emergency/90 transition-colors"
            >
              (41) 99163-0333
            </a>
          </div>
          
          {/* WhatsApp Button */}
          <Button
            size="sm"
            variant="emergency-orange"
            className="gap-2"
            onClick={() => {
              const message = "vi seu anuncio e acessei sua LP e gostaria de saber mais";
              const whatsappUrl = `https://wa.me/5541991630333?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Button>

          {/* Main CTA */}
          <Button
            variant="emergency"
            size="lg"
            className="gap-2"
            onClick={() => window.location.href = 'tel:41991630333'}
          >
            <Ambulance className="h-5 w-5" />
            <span className="hidden lg:inline">SOLICITAR AMBULÂNCIA AGORA</span>
            <span className="lg:hidden">AMBULÂNCIA</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;