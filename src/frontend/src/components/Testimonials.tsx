import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      grade: 'Class 10 Student',
      text: 'The teachers at Takshashila Academia are amazing! They explain concepts so clearly that even difficult topics become easy to understand. My grades have improved significantly.',
      rating: 5,
    },
    {
      name: 'Rahul Verma',
      grade: 'Class 12 Student',
      text: 'I was struggling with mathematics, but the personalized attention and unique teaching methods here helped me overcome my fears. Now math is my favorite subject!',
      rating: 5,
    },
    {
      name: 'Ananya Patel',
      grade: 'Parent',
      text: 'As a parent, I am extremely satisfied with the progress my daughter has made. The teachers are dedicated and genuinely care about each student\'s success.',
      rating: 5,
    },
    {
      name: 'Arjun Reddy',
      grade: 'JEE Aspirant',
      text: 'The competitive exam preparation here is top-notch. The study materials, regular tests, and doubt-clearing sessions have been instrumental in my JEE preparation.',
      rating: 5,
    },
    {
      name: 'Sneha Gupta',
      grade: 'Class 9 Student',
      text: 'I love the interactive teaching style! Classes are never boring, and I actually look forward to learning. Thank you for making education fun and engaging.',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      grade: 'Parent',
      text: 'Takshashila Academia has been a blessing for our family. The flexible timings and comprehensive approach to education have made a real difference in my son\'s academic journey.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our students and parents have to say about their experience at Takshashila Academia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-border/40">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.grade}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block relative">
            <img
              src="/assets/generated/student-success.dim_400x400.png"
              alt="Student Success"
              className="w-32 h-32 rounded-full mx-auto shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Star className="h-6 w-6 fill-primary-foreground text-primary-foreground" />
            </div>
          </div>
          <p className="mt-6 text-lg font-medium">Join hundreds of successful students!</p>
        </div>
      </div>
    </section>
  );
}
