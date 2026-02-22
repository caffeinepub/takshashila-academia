import { Award, Target, Heart, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Introduction() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality education with proven results.',
    },
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'Tailored teaching methods that adapt to each student\'s unique learning style.',
    },
    {
      icon: Heart,
      title: 'Passionate Teaching',
      description: 'Dedicated educators who genuinely care about student success and growth.',
    },
    {
      icon: Sparkles,
      title: 'Holistic Development',
      description: 'Focus on building confidence, critical thinking, and lifelong learning skills.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Choose <span className="text-primary">Takshashila Academia?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At Takshashila Academia, we believe every student has the potential to excel. Our mission is to unlock that potential through innovative teaching methods, personalized attention, and a nurturing learning environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
