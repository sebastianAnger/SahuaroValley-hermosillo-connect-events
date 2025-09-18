import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import heroImage from '@/assets/hero-workshops.jpg';

const Header = () => {
  const scrollToWorkshops = () => {
    document.getElementById('talleres')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRegister = () => {
    document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-bg opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Registro de Asistencia
            <span className="block text-gradient-accent">
              Talleres en Hermosillo
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Conecta, aprende y comparte en los talleres de innovación de tu ciudad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="w-5 h-5" />
              <span>Eventos Semanales</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span>Hermosillo, Sonora</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5" />
              <span>Comunidad Activa</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
              onClick={scrollToWorkshops}
            >
              Ver Talleres
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
              onClick={scrollToRegister}
            >
              Registrarme Ahora
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;