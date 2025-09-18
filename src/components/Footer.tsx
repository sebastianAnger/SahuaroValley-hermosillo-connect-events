import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient-accent">
              Talleres Hermosillo
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Conectando profesionales y emprendedores en la capital de Sonora a través de talleres de innovación y tecnología.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Hermosillo, Sonora, México</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">+52 662 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">info@tallereshermosillo.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                className="text-primary-foreground/80 hover:text-accent h-auto p-0 text-sm justify-start"
                onClick={() => document.getElementById('talleres')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Talleres
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary-foreground/80 hover:text-accent h-auto p-0 text-sm justify-start"
                onClick={() => document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Registrarse
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary-foreground/80 hover:text-accent h-auto p-0 text-sm justify-start"
                onClick={() => document.getElementById('comunidad')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Comunidad
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary-foreground/80 hover:text-accent h-auto p-0 text-sm justify-start"
              >
                Términos y Condiciones
              </Button>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Síguenos</h4>
            <div className="flex gap-3">
              <Button
                size="sm"
                variant="ghost"
                className="w-10 h-10 p-0 rounded-full border border-primary-foreground/20 hover:border-accent hover:bg-accent/10"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="w-10 h-10 p-0 rounded-full border border-primary-foreground/20 hover:border-accent hover:bg-accent/10"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="w-10 h-10 p-0 rounded-full border border-primary-foreground/20 hover:border-accent hover:bg-accent/10"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="w-10 h-10 p-0 rounded-full border border-primary-foreground/20 hover:border-accent hover:bg-accent/10"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Únete a nuestra comunidad en redes sociales para mantenerte al día con los últimos talleres y eventos.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Talleres Hermosillo. Todos los derechos reservados. Hecho con ❤️ en Sonora.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;