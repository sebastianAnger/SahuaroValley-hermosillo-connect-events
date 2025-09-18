import { useState } from 'react';
import { Attendee } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Facebook, Twitter, Github, Mail, Linkedin, Award } from 'lucide-react';

interface AttendeesSectionProps {
  attendees: Attendee[];
}

const AttendeesSection = ({ attendees }: AttendeesSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <Instagram className="w-4 h-4 text-pink-500" />;
      case 'facebook': return <Facebook className="w-4 h-4 text-blue-600" />;
      case 'twitter': return <Twitter className="w-4 h-4 text-blue-400" />;
      case 'github': return <Github className="w-4 h-4 text-gray-800" />;
      case 'google': return <Mail className="w-4 h-4 text-red-500" />;
      case 'linkedin': return <Linkedin className="w-4 h-4 text-blue-700" />;
      default: return null;
    }
  };

  if (attendees.length === 0) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold text-gradient-primary mb-4">
              Comunidad de Asistentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sé el primero en registrarte y formar parte de nuestra comunidad de innovadores
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">
            Nuestra Comunidad
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce a los profesionales que ya forman parte de nuestros talleres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {attendees.slice(0, visibleCount).map((attendee, index) => (
            <Card 
              key={attendee.id} 
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-primary group-hover:text-primary-light transition-colors">
                      {attendee.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Registrado el {new Date(attendee.registrationDate).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                  
                  {attendee.pin && (
                    <div className="pin-glow">
                      <img 
                        src={attendee.pin} 
                        alt="Pin digital"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      {attendee.workshop.name}
                    </Badge>
                  </div>

                  {attendee.pin && (
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Award className="w-4 h-4" />
                      <span className="font-medium">Pin obtenido</span>
                    </div>
                  )}

                  {attendee.socialMedia && Object.keys(attendee.socialMedia).length > 0 && (
                    <div className="flex items-center gap-2 pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground mr-2">Redes:</span>
                      {Object.entries(attendee.socialMedia).map(([platform, handle]) => (
                        handle && (
                          <div key={platform} className="flex items-center gap-1">
                            {getSocialIcon(platform)}
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {attendees.length > visibleCount && (
          <div className="text-center mt-8">
            <button
              onClick={showMore}
              className="text-primary hover:text-primary-light font-medium transition-colors"
            >
              Ver más asistentes ({attendees.length - visibleCount} restantes)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AttendeesSection;