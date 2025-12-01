export const About = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="animate-slide-up">
            <h2 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
              Your Perfect Celebration Awaits
            </h2>
            <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
              Dudgeley Farm is more than just a venue—it's where dreams take shape against 
              the backdrop of breathtaking countryside vistas. Our historic barn and beautifully 
              maintained grounds offer an authentic, rustic charm that creates unforgettable moments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From intimate gatherings to grand celebrations, our versatile spaces and dedicated 
              team ensure your special day is everything you've imagined and more.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="rounded-lg bg-card p-6 shadow-soft border border-border">
              <h3 className="mb-2 font-display text-2xl font-semibold text-card-foreground">200+</h3>
              <p className="text-muted-foreground">Happy Couples</p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-soft border border-border">
              <h3 className="mb-2 font-display text-2xl font-semibold text-card-foreground">15 Acres</h3>
              <p className="text-muted-foreground">Beautiful Grounds</p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-soft border border-border">
              <h3 className="mb-2 font-display text-2xl font-semibold text-card-foreground">150</h3>
              <p className="text-muted-foreground">Guest Capacity</p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-soft border border-border">
              <h3 className="mb-2 font-display text-2xl font-semibold text-card-foreground">Historic</h3>
              <p className="text-muted-foreground">Restored Barn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
