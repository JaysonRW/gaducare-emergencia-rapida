import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Mail, MapPin, Clock, Shield } from "lucide-react";
import logoGadu from "@/assets/logo-gadu.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoGadu} alt="GADU Emergências" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">GADU</h3>
                <p className="text-sm text-primary-foreground/80">Emergências</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Atendimento médico de emergência 24 horas em Curitiba e região metropolitana. 
              Equipe especializada e equipamentos de última geração.
            </p>
            <div className="flex gap-3">
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
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </Button>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Emergência 24h</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emergency-orange" />
                <div>
                  <a 
                    href="tel:41991630333" 
                    className="font-bold text-lg hover:underline"
                  >
                    (41) 99163-0333
                  </a>
                  <p className="text-sm text-primary-foreground/80">Linha direta de emergência</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-emergency-orange" />
                <div>
                  <p className="font-semibold">24 horas por dia</p>
                  <p className="text-sm text-primary-foreground/80">7 dias por semana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                • Remoção de Emergência
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                • UTI Móvel
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                • Transporte Inter-hospitalar
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                • Emergências Cardiológicas
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                • Plantão Médico Domiciliar
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                • Cobertura de Eventos
              </li>
            </ul>
          </div>

          {/* Coverage Area */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Área de Cobertura</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emergency-orange mt-0.5" />
                <div>
                  <p className="font-semibold">Curitiba e Região</p>
                  <ul className="text-sm text-primary-foreground/80 space-y-1 mt-2">
                    <li>• Curitiba (todas as regiões)</li>
                    <li>• São José dos Pinhais</li>
                    <li>• Pinhais</li>
                    <li>• Colombo</li>
                    <li>• Araucária</li>
                    <li>• Piraquara</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-emergency-orange mb-2" />
              <span className="font-semibold">Licenciado SAMU</span>
              <span className="text-sm text-primary-foreground/80">Registro oficial</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-emergency-orange mb-2" />
              <span className="font-semibold">Certificado ANS</span>
              <span className="text-sm text-primary-foreground/80">Padrão nacional</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-emergency-orange mb-2" />
              <span className="font-semibold">ISO 9001</span>
              <span className="text-sm text-primary-foreground/80">Qualidade certificada</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-emergency-orange mb-2" />
              <span className="font-semibold">CNES Ativo</span>
              <span className="text-sm text-primary-foreground/80">Ministério da Saúde</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <div>
            <p>&copy; 2024 GADU Emergências. Todos os direitos reservados.</p>
            <p>CNPJ: XX.XXX.XXX/XXXX-XX | Responsável Técnico: Dr. João Silva - CRM-PR XXXXX</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;