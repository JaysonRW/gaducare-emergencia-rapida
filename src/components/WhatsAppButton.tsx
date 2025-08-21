import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    const message = "vi seu anuncio e acessei sua LP e gostaria de saber mais";
    const whatsappUrl = `https://wa.me/5541991630333?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Emergency Contact Bar - appears on scroll */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-emergency text-emergency-foreground p-4 shadow-emergency transform transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div>
              <p className="font-bold">EMERGÊNCIA 24H ATIVA</p>
              <p className="text-sm text-emergency-foreground/90">
                Equipe pronta para atender sua emergência
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="tel:41991630333" 
              className="hidden md:flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <span className="font-bold">(41) 99163-0333</span>
            </a>
            
            <button
              onClick={handleClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;