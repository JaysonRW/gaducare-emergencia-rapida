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
      {/* Main Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Falar no WhatsApp"
        >
          <MessageSquare className="h-6 w-6" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap">
            Falar no WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>

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