import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { workshops } from '@/data/workshops';
import { RegistrationForm as RegistrationFormType } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Facebook, Twitter, Github, Mail, Linkedin, CheckCircle } from 'lucide-react';

interface RegistrationFormProps {
  selectedWorkshopId?: string;
  onSuccess: (data: RegistrationFormType) => void;
}

const RegistrationForm = ({ selectedWorkshopId, onSuccess }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<RegistrationFormType>({
    name: '',
    email: '',
    phone: '',
    workshopId: selectedWorkshopId || '',
    socialMedia: {}
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.workshopId) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSuccess(formData);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        workshopId: '',
        socialMedia: {}
      });
      
      toast({
        title: "¡Registro exitoso!",
        description: "Te has registrado correctamente. Recibirás un email de confirmación.",
      });
    }, 2000);
  };

  const selectedWorkshop = workshops.find(w => w.id === formData.workshopId);

  return (
    <Card className="max-w-2xl mx-auto animate-scale-in">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-gradient-primary">
          Registro de Asistencia
        </CardTitle>
        <p className="text-muted-foreground">
          Completa tu información para registrarte en un taller
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Workshop Selection */}
          <div className="space-y-2">
            <Label htmlFor="workshop" className="text-primary font-semibold">
              Seleccionar Taller *
            </Label>
            <Select
              value={formData.workshopId}
              onValueChange={(value) => setFormData({ ...formData, workshopId: value })}
            >
              <SelectTrigger className="rounded-xl border-2">
                <SelectValue placeholder="Elige tu taller favorito" />
              </SelectTrigger>
              <SelectContent>
                {workshops.map((workshop) => (
                  <SelectItem key={workshop.id} value={workshop.id}>
                    {workshop.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {selectedWorkshop && (
              <div className="mt-3 p-4 bg-muted rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src={selectedWorkshop.pinImage} 
                    alt="Pin"
                    className="w-8 h-8 rounded-full"
                  />
                  <h4 className="font-semibold text-primary">{selectedWorkshop.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{selectedWorkshop.description}</p>
                <div className="flex gap-2">
                  <Badge variant="secondary">{selectedWorkshop.date}</Badge>
                  <Badge variant="outline">{selectedWorkshop.time}</Badge>
                </div>
              </div>
            )}
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary font-semibold">
                Nombre Completo *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre completo"
                className="rounded-xl border-2"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary font-semibold">
                Teléfono *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+52 662 123 4567"
                className="rounded-xl border-2"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-primary font-semibold">
              Correo Electrónico *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="tu@email.com"
              className="rounded-xl border-2"
              required
            />
          </div>

          {/* Social Media (Optional) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-primary font-semibold">Redes Sociales</h3>
              <Badge variant="secondary" className="text-xs">Opcional</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  Instagram
                </Label>
                <Input
                  value={formData.socialMedia?.instagram || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialMedia: { ...formData.socialMedia, instagram: e.target.value }
                  })}
                  placeholder="@tuusuario"
                  className="rounded-xl"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm">
                  <Facebook className="w-4 h-4 text-blue-600" />
                  Facebook
                </Label>
                <Input
                  value={formData.socialMedia?.facebook || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialMedia: { ...formData.socialMedia, facebook: e.target.value }
                  })}
                  placeholder="facebook.com/tuusuario"
                  className="rounded-xl"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm">
                  <Twitter className="w-4 h-4 text-blue-400" />
                  X (Twitter)
                </Label>
                <Input
                  value={formData.socialMedia?.twitter || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialMedia: { ...formData.socialMedia, twitter: e.target.value }
                  })}
                  placeholder="@tuusuario"
                  className="rounded-xl"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm">
                  <Github className="w-4 h-4 text-gray-800" />
                  GitHub
                </Label>
                <Input
                  value={formData.socialMedia?.github || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialMedia: { ...formData.socialMedia, github: e.target.value }
                  })}
                  placeholder="github.com/tuusuario"
                  className="rounded-xl"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-red-500" />
                  Google
                </Label>
                <Input
                  value={formData.socialMedia?.google || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialMedia: { ...formData.socialMedia, google: e.target.value }
                  })}
                  placeholder="tu@gmail.com"
                  className="rounded-xl"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm">
                  <Linkedin className="w-4 h-4 text-blue-700" />
                  LinkedIn
                </Label>
                <Input
                  value={formData.socialMedia?.linkedin || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialMedia: { ...formData.socialMedia, linkedin: e.target.value }
                  })}
                  placeholder="linkedin.com/in/tuusuario"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-2xl py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Procesando...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Confirmar Registro
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;