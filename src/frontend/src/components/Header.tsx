import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useRouter, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const scrollToSection = (id: string) => {
    if (currentPath !== '/') {
      router.navigate({ to: '/' });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/assets/generated/logo.dim_200x200.png" 
            alt="Takshashila Academia Logo" 
            className="h-10 w-10 rounded-lg"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">Takshashila Academia</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Excellence in Education</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('courses')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </button>
          <Link
            to="/admin"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Admin
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Admin Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
