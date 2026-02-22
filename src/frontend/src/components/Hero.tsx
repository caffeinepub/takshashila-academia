import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users, Quote } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Welcome to{' '}
                <span className="text-primary">Takshashila Academia</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Nurturing minds, building futures. Specialized coaching for UPSC, MPSC, NEET, and JEE students with personalized education that transforms learners into achievers.
              </p>
              
              <div className="relative mt-6 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-l-4 border-primary">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                <p className="text-xl md:text-2xl font-serif italic text-foreground pl-8">
                  "Mistakes are proof that you are learning"
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base"
              >
                Enroll Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToCourses}
                className="text-base"
              >
                Explore Courses
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Students Taught</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-2xl font-bold">95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl font-bold">10+</span>
                </div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/hero-banner.dim_1200x600.png"
                alt="Takshashila Academia - Quality Education"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
