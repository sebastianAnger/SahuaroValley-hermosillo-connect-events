import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, Share2 } from 'lucide-react';
import { Workshop } from '@/types';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  workshop: Workshop | null;
  attendeeName: string;
}

const SuccessModal = ({ isOpen, onClose, workshop, attendeeName }: SuccessModalProps) => {
  if (!workshop) return null;

  const handleDownloadPin = () => {
    // Create a download link for the pin
    const link = document.createElement('a');
    link.href = workshop.pinImage;
    link.download = `pin-${workshop.category}-${attendeeName}.png`;
    link.click();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Me registré en un taller!',
        text: `¡Me acabo de registrar en el taller de ${workshop.name} en Hermosillo! 🎉`,
        url: window.location.href,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto rounded-2xl">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-gradient-primary">
            ¡Registro Exitoso!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              ¡Felicidades {attendeeName}! Te has registrado exitosamente en:
            </p>
            
            <div className="bg-muted rounded-xl p-4">
              <div className="flex items-center justify-center gap-3 mb-2">
                <img 
                  src={workshop.pinImage} 
                  alt="Pin digital"
                  className="w-12 h-12 rounded-full pin-glow animate-pulse-glow"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-primary">{workshop.name}</h3>
                  <p className="text-sm text-muted-foreground">{workshop.date}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-accent/10 rounded-xl p-4 text-center">
              <h4 className="font-semibold text-accent mb-2">🎉 ¡Has obtenido tu pin digital!</h4>
              <p className="text-sm text-muted-foreground">
                Tu insignia digital estará visible en tu perfil una vez que confirmes tu asistencia al evento.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Próximos pasos:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Recibirás un email de confirmación</li>
                <li>✓ Te enviaremos recordatorios del evento</li>
                <li>✓ Tu pin se activará al asistir al taller</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleDownloadPin}
              variant="outline"
              className="flex-1 rounded-xl"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar Pin
            </Button>
            
            <Button
              onClick={handleShare}
              variant="outline"
              className="flex-1 rounded-xl"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary-hover rounded-xl"
          >
            Continuar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;