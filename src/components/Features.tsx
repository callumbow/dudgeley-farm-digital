import { Leaf, Heart, Camera, Utensils } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Rustic Elegance",
    description: "Our beautifully restored barn combines historic charm with modern amenities for a truly unique experience."
  },
  {
    icon: Leaf,
    title: "Natural Beauty",
    description: "Surrounded by rolling countryside and manicured gardens, every corner offers a picture-perfect backdrop."
  },
  {
    icon: Camera,
    title: "Photo Opportunities",
    description: "From golden hour in the fields to intimate corners in the barn, stunning photo spots await at every turn."
  },
  {
    icon: Utensils,
    title: "Flexible Catering",
    description: "Work with our preferred caterers or bring your own to create the perfect menu for your celebration."
  }
];

export const Features = () => {
  return (
    <section className="bg-muted py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Why Choose Dudgeley Farm
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover what makes our venue the perfect setting for your special day
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-slide-up rounded-lg bg-background p-6 shadow-soft border border-border hover:shadow-medium transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
