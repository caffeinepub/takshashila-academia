import { BookOpen, Globe, TrendingUp, Briefcase, Brain, Code, Landmark, Leaf, Newspaper, Users, Shield, Award, Microscope, Atom, Calculator, FlaskConical } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Courses() {
  const courseCategories = [
    {
      category: 'UPSC Preparation',
      icon: Landmark,
      description: 'Comprehensive coaching for UPSC Civil Services Examination covering all essential subjects for post-graduation students.',
      color: 'text-chart-1',
      subjects: [
        { name: 'General Studies', icon: BookOpen },
        { name: 'History', icon: Landmark },
        { name: 'Geography', icon: Globe },
        { name: 'Economy', icon: TrendingUp },
        { name: 'Science', icon: Brain },
        { name: 'Current Affairs', icon: Newspaper },
        { name: 'Environment', icon: Leaf },
      ],
    },
    {
      category: 'MPSC Preparation',
      icon: Shield,
      description: 'Specialized training for Maharashtra Public Service Commission examinations and competitive government job preparation.',
      color: 'text-chart-2',
      subjects: [
        { name: 'Police Bharti', icon: Shield },
        { name: 'Group B and C', icon: Users },
        { name: 'CSAT', icon: Award },
      ],
    },
    {
      category: 'NEET Preparation',
      icon: Microscope,
      description: 'Comprehensive medical entrance exam preparation covering Physics, Chemistry, and Biology for aspiring medical students.',
      color: 'text-chart-4',
      subjects: [
        { name: 'Physics', icon: Atom },
        { name: 'Chemistry', icon: FlaskConical },
        { name: 'Biology', icon: Microscope },
      ],
    },
    {
      category: 'JEE Preparation',
      icon: Calculator,
      description: 'Complete engineering entrance exam coaching with focus on Physics, Chemistry, and Mathematics for future engineers.',
      color: 'text-chart-5',
      subjects: [
        { name: 'Physics', icon: Atom },
        { name: 'Chemistry', icon: FlaskConical },
        { name: 'Mathematics', icon: Calculator },
      ],
    },
    {
      category: 'Skill Development',
      icon: Code,
      description: 'Modern skill development programs to enhance career prospects and prepare for the digital economy.',
      color: 'text-chart-3',
      subjects: [
        { name: 'AI', icon: Brain },
        { name: 'Software Development', icon: Code },
        { name: 'DTP Operator', icon: Briefcase },
      ],
    },
  ];

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized coaching for UPSC, MPSC, NEET, and JEE students, along with skill development programs to build successful careers.
          </p>
        </div>

        <div className="space-y-12">
          {courseCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <Card className="border-2 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 ${category.color}`}>
                      <category.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{category.category}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.subjects.map((subject, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <subject.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{subject.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to start your journey towards success?
          </p>
          <a
            href="tel:7719044646"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Call us to discuss your requirements
          </a>
        </div>
      </div>
    </section>
  );
}
