import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Clock, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    emergencyType: "",
    location: "",
    details: ""
  });
  const { toast } = useToast();

  const emergencyTypes = [
    "Emergência Cardíaca",
    "Acidente de Trânsito",
    "Emergência Respiratória",
    "Transferência Hospitalar",
    "Emergência Neurológica",
    "Emergência Obstétrica",
    "Trauma/Ferimentos",
    "Outro"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.emergencyType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Format WhatsApp message
    const message = `🚨 *SOLICITAÇÃO DE EMERGÊNCIA - GADU*

👤 *Nome:* ${formData.name}
📱 *Telefone:* ${formData.phone}
🚑 *Tipo de Emergência:* ${formData.emergencyType}
📍 *Localização:* ${formData.location}
📝 *Detalhes:* ${formData.details}

*Enviado através do site oficial GADU Emergências*`;

    const whatsappUrl = `https://wa.me/5541991630333?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Solicitação enviada!",
      description: "Você será redirecionado para o WhatsApp. Nossa equipe responderá imediatamente.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      emergencyType: "",
      location: "",
      details: ""
    });
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Solicitar Atendimento
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Preencha o formulário abaixo e nossa equipe entrará em contato imediatamente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-4 sm:p-6 lg:p-8 bg-card shadow-soft border-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Digite seu nome completo"
                  className="mt-2"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                  Telefone/WhatsApp *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="(41) 99999-9999"
                  className="mt-2"
                  required
                />
              </div>

              {/* Emergency Type */}
              <div>
                <Label className="text-sm font-semibold text-foreground">
                  Tipo de Emergência *
                </Label>
                <Select 
                  value={formData.emergencyType} 
                  onValueChange={(value) => setFormData({...formData, emergencyType: value})}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecione o tipo de emergência" />
                  </SelectTrigger>
                  <SelectContent>
                    {emergencyTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div>
                <Label htmlFor="location" className="text-sm font-semibold text-foreground">
                  Endereço/Localização
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Rua, número, bairro, cidade"
                  className="mt-2"
                />
              </div>

              {/* Details */}
              <div>
                <Label htmlFor="details" className="text-sm font-semibold text-foreground">
                  Detalhes Adicionais
                </Label>
                <Textarea
                  id="details"
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  placeholder="Descreva brevemente a situação, sintomas ou informações importantes"
                  className="mt-2 h-24"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="emergency" 
                size="lg" 
                className="w-full gap-2 text-lg py-6"
              >
                <MessageSquare className="h-5 w-5" />
                ENVIAR SOLICITAÇÃO VIA WHATSAPP
              </Button>

              {/* Response Time Info */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Tempo de resposta: Imediato via WhatsApp</span>
              </div>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card className="p-8 bg-emergency text-emergency-foreground shadow-emergency border-0">
              <div className="text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Emergência 24h</h3>
                <p className="text-xl mb-4 text-emergency-foreground/90">
                  Para situações urgentes, ligue agora:
                </p>
                <a 
                  href="tel:41991630333" 
                  className="text-3xl font-bold hover:underline block mb-4"
                >
                  (41) 99163-0333
                </a>
                <Button
                  variant="outline"
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  onClick={() => {
                    const message = "vi seu anuncio e acessei sua LP e gostaria de saber mais";
                    const whatsappUrl = `https://wa.me/5541991630333?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp Direto
                </Button>
              </div>
            </Card>

            {/* Response Time */}
            <Card className="p-6 bg-card shadow-soft border-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Tempo de Resposta</h4>
                  <p className="text-muted-foreground">8-15 min em média</p>
                </div>
              </div>
            </Card>

            {/* Coverage Area */}
            <Card className="p-6 bg-card shadow-soft border-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Área de Cobertura</h4>
                  <p className="text-muted-foreground">Curitiba e Região Metropolitana</p>
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="p-6 bg-primary/10 border-0">
              <h4 className="font-bold text-primary mb-3">Informações Importantes:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mantenha a calma e forneça informações precisas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tenha em mãos documentos do paciente</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Garanta acesso livre para a ambulância</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Nossa equipe chegará com equipamentos completos</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;