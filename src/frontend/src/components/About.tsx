import { CheckCircle2, BookOpen, Users, Award, Target, Clock, MessageCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: 'Excellence in Education',
      description: 'Committed to delivering the highest quality of education',
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Learn from qualified and passionate educators',
    },
    {
      icon: Target,
      title: 'Small Batch Sizes',
      description: 'Personalized attention for every student',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Study Material',
      description: 'Well-researched and updated course materials',
    },
    {
      icon: Clock,
      title: 'Regular Assessments',
      description: 'Track your progress with periodic evaluations',
    },
    {
      icon: MessageCircle,
      title: 'Doubt Clearing Sessions',
      description: 'Interactive sessions to address all your queries',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About <span className="text-primary">Takshashila Academia</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Named after the ancient Indian center of learning, Takshashila Academia carries forward the rich tradition of excellence in education. We are dedicated to providing quality education that not only helps students excel in their academics but also prepares them for life's challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our teaching methodology combines traditional wisdom with modern pedagogical techniques, ensuring that every student receives the attention and guidance they deserve. We believe in creating a supportive environment where curiosity is encouraged and learning becomes a joyful experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
