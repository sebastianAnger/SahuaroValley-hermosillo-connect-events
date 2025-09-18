import { Workshop } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Star, Award } from 'lucide-react';

interface WorkshopCardProps {
  workshop: Workshop;
  onRegister: (workshopId: string) => void;
}

const WorkshopCard = ({ workshop, onRegister }: WorkshopCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getSpotsLeft = () => workshop.maxAttendees - workshop.currentAttendees;
  const getOccupancyPercentage = () => (workshop.currentAttendees / workshop.maxAttendees) * 100;

  return (
    <div className="workshop-card animate-scale-in group">
      {/* Pin Badge */}
      <div className="flex justify-between items-start mb-4">
        <div className="pin-glow">
          <img 
            src={workshop.pinImage} 
            alt={`Pin ${workshop.name}`}
            className="w-16 h-16 rounded-full animate-pulse-glow"
          />
        </div>
        <Badge variant="secondary" className="text-xs">
          {getSpotsLeft()} cupos disponibles
        </Badge>
      </div>

      {/* Workshop Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors">
            {workshop.name}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {workshop.description}
          </p>
        </div>

        {/* Date & Time */}
        <div className="flex flex-col sm:flex-row gap-3 text-sm">
          <div className="flex items-center gap-2 text-primary">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">{formatDate(workshop.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <Clock className="w-4 h-4" />
            <span>{workshop.time}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2 text-sm">
          <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-muted-foreground">{workshop.location}</span>
        </div>

        {/* Organizer */}
        <div className="flex items-center gap-2 text-sm">
          <Star className="w-4 h-4 text-accent" />
          <span className="font-medium text-primary">Organizado por: {workshop.organizer}</span>
        </div>

        {/* Attendees Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">
                {workshop.currentAttendees}/{workshop.maxAttendees} asistentes
              </span>
            </div>
            <span className="text-xs text-accent font-medium">
              {Math.round(getOccupancyPercentage())}% ocupado
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${getOccupancyPercentage()}%` }}
            ></div>
          </div>
        </div>

        {/* Sponsors */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-primary">Patrocinadores:</p>
          <div className="flex flex-wrap gap-2">
            {workshop.sponsors.map((sponsor, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {sponsor}
              </Badge>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-primary">Herramientas previas:</p>
          <div className="space-y-1">
            {workshop.prerequisites.map((prereq, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-3 h-3 text-accent flex-shrink-0" />
                <span>{prereq}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Register Button */}
        <Button 
          onClick={() => onRegister(workshop.id)}
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-2xl py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Registrarme
        </Button>
      </div>
    </div>
  );
};

export default WorkshopCard;