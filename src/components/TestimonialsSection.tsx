import { testimonials } from '@/data/workshops';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">
            Lo Que Dicen Nuestros Asistentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiencias reales de profesionales que han transformado su carrera
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.pin} 
                      alt="Pin"
                      className="w-12 h-12 rounded-full pin-glow"
                    />
                    <div>
                      <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.workshop}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-foreground leading-relaxed italic">
                  "{testimonial.comment}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;