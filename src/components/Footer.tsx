export const Footer = () => {
  return (
    <footer className="bg-earth-dark py-12 px-4 text-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-display text-2xl font-semibold">Dudgeley Farm</h3>
            <p className="text-cream/80">
              Creating unforgettable moments in the heart of the countryside
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#" className="hover:text-cream transition-colors">Our Venue</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Follow Us</h4>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#" className="hover:text-cream transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-cream/20 pt-8 text-center text-sm text-cream/60">
          <p>&copy; {new Date().getFullYear()} Dudgeley Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
