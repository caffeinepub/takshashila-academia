import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'takshashila-academia'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/generated/logo.dim_200x200.png" 
                alt="Takshashila Academia Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-lg font-bold text-primary">Takshashila Academia</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students with quality education and personalized learning experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:7719044646" className="hover:text-primary transition-colors block">
                  7719044646 (Director - Rahul Khandare)
                </a>
              </li>
              <li>
                <a href="tel:7666818376" className="hover:text-primary transition-colors block">
                  7666818376 (Director - Rahul Khandare)
                </a>
              </li>
              <li>
                <a href="tel:9529114803" className="hover:text-primary transition-colors block">
                  9529114803 (Office - Samad sir)
                </a>
              </li>
              <li>
                <a href="mailto:takshashila.academia31@gmail.com" className="hover:text-primary transition-colors">
                  Email: takshashila.academia31@gmail.com
                </a>
              </li>
              <li className="pt-2">
                3rd Floor, Shan Brahma Complex,<br />
                Behind Shrimant Dagduseth Ganpati,<br />
                In front of Farazkhana Police Station, Pune
              </li>
              <li className="pt-2">Mon - Sat: 9:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Takshashila Academia. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
