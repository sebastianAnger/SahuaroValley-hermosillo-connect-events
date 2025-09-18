import { useState } from 'react';
import { Attendee, RegistrationForm as RegistrationFormType } from '@/types';
import { workshops } from '@/data/workshops';
import Header from '@/components/Header';
import WorkshopCard from '@/components/WorkshopCard';
import RegistrationForm from '@/components/RegistrationForm';
import SocialFeed from '@/components/SocialFeed';
import AttendeesSection from '@/components/AttendeesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import SuccessModal from '@/components/SuccessModal';

const Index = () => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [selectedWorkshopId, setSelectedWorkshopId] = useState<string>('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastRegistration, setLastRegistration] = useState<{
    workshop: typeof workshops[0] | null;
    name: string;
  }>({ workshop: null, name: '' });

  const handleWorkshopRegister = (workshopId: string) => {
    setSelectedWorkshopId(workshopId);
    document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRegistrationSuccess = (data: RegistrationFormType) => {
    const workshop = workshops.find(w => w.id === data.workshopId);
    if (!workshop) return;

    const newAttendee: Attendee = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      workshop: workshop,
      registrationDate: new Date().toISOString(),
      pin: workshop.pinImage,
      socialMedia: data.socialMedia
    };

    setAttendees(prev => [...prev, newAttendee]);
    setLastRegistration({
      workshop: workshop,
      name: data.name
    });
    setShowSuccessModal(true);
    setSelectedWorkshopId('');
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setLastRegistration({ workshop: null, name: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Workshops Section */}
      <section id="talleres" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold text-gradient-primary mb-4">
              Talleres Disponibles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre los talleres que transformarán tu carrera profesional
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {workshops.map((workshop, index) => (
              <div 
                key={workshop.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <WorkshopCard 
                  workshop={workshop} 
                  onRegister={handleWorkshopRegister}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <SocialFeed />

      {/* Registration Form */}
      <section id="registro" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <RegistrationForm 
            selectedWorkshopId={selectedWorkshopId}
            onSuccess={handleRegistrationSuccess}
          />
        </div>
      </section>

      {/* Attendees Section */}
      <section id="comunidad">
        <AttendeesSection attendees={attendees} />
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccessModal}
        workshop={lastRegistration.workshop}
        attendeeName={lastRegistration.name}
      />
    </div>
  );
};

export default Index;
