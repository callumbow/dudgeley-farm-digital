import barnInterior from "@/assets/barn-interior.jpg";
import outdoorCeremony from "@/assets/outdoor-ceremony.jpg";
import gardens from "@/assets/gardens.jpg";

export const Gallery = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Experience the Magic
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our beautiful spaces and imagine your celebration here
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-xl transition-all duration-300 animate-fade-in">
            <img 
              src={barnInterior} 
              alt="Rustic barn interior with elegant wedding setup" 
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="p-6 text-cream font-display text-xl">The Historic Barn</p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <img 
              src={outdoorCeremony} 
              alt="Beautiful outdoor ceremony setup with countryside views" 
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="p-6 text-cream font-display text-xl">Outdoor Ceremony</p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src={gardens} 
              alt="Charming farm gardens with wildflowers and countryside landscape" 
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="p-6 text-cream font-display text-xl">Garden Pathways</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
