import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Curitiba - PR",
      text: "Quando meu pai teve um infarto, a GADU chegou em menos de 10 minutos. A equipe foi extremamente profissional e salvou a vida dele. Gratidão eterna!",
      rating: 5,
      avatar: "👩‍🦳"
    },
    {
      name: "João Santos",
      location: "São José dos Pinhais - PR",
      text: "Precisei de uma remoção de emergência para minha esposa grávida. O atendimento foi impecável, desde o primeiro contato até a chegada no hospital.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Ana Paula",
      location: "Araucária - PR",
      text: "Serviço de excelência! A ambulância chegou rapidamente e a equipe médica foi muito cuidadosa durante todo o transporte. Recomendo totalmente.",
      rating: 5,
      avatar: "👩‍⚕️"
    },
    {
      name: "Carlos Rodrigues",
      location: "Pinhais - PR",
      text: "Em um momento de desespero, encontrei na GADU a tranquilidade que precisava. Profissionais altamente qualificados e equipamentos de primeira linha.",
      rating: 5,
      avatar: "👨‍🦱"
    },
    {
      name: "Fernanda Costa",
      location: "Colombo - PR",
      text: "Atendimento 24h que realmente funciona! Ligamos de madrugada e em poucos minutos a ambulância estava na nossa porta. Serviço excepcional.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de pessoas que confiaram suas vidas aos nossos cuidados
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 md:p-12 bg-card shadow-soft border-0 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote className="h-12 w-12" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-center text-foreground leading-relaxed mb-8 font-medium">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="text-center">
                <div className="font-bold text-primary text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary w-8' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card shadow-soft border-0 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{testimonial.text.slice(0, 120)}..."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-primary font-semibold">
              4.9/5 de satisfação
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;