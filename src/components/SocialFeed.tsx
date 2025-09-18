import { feedPosts } from '@/data/workshops';
import { Heart, MessageCircle, Share2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialFeed = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">
            Momentos de Nuestros Talleres
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre la experiencia que viven nuestros asistentes en cada evento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {feedPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="social-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.caption}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-primary">
                    {post.workshop}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Hermosillo, Sonora</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('es-ES')}
                  </span>
                </div>
                
                <p className="text-foreground mb-4 leading-relaxed">
                  {post.caption}
                </p>
                
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </Button>
                    
                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </Button>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent transition-colors">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Call to Action Card */}
          <div className="social-card bg-gradient-to-br from-primary to-primary-light text-white animate-scale-in">
            <div className="p-8 text-center h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">
                ¡Únete a la Experiencia!
              </h3>
              <p className="mb-6 text-white/90">
                Sé parte de los próximos talleres y comparte tus momentos de aprendizaje
              </p>
              <Button 
                className="bg-accent hover:bg-accent-hover text-accent-foreground rounded-2xl font-semibold"
                onClick={() => document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Registrarme
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;