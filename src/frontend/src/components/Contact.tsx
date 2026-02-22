import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: (
        <div className="space-y-1">
          <div>
            <a href="tel:7719044646" className="hover:text-primary transition-colors block">
              7719044646
            </a>
            <span className="text-xs text-muted-foreground">Director - Rahul Khandare</span>
          </div>
          <div>
            <a href="tel:7666818376" className="hover:text-primary transition-colors block">
              7666818376
            </a>
            <span className="text-xs text-muted-foreground">Director - Rahul Khandare</span>
          </div>
          <div>
            <a href="tel:9529114803" className="hover:text-primary transition-colors block">
              9529114803
            </a>
            <span className="text-xs text-muted-foreground">Office - Samad sir</span>
          </div>
        </div>
      ),
      link: null,
      action: null,
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'takshashila.academia31@gmail.com',
      link: 'mailto:takshashila.academia31@gmail.com',
      action: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: (
        <div className="text-sm leading-relaxed">
          3rd Floor, Shan Brahma Complex,<br />
          Behind Shrimant Dagduseth Ganpati,<br />
          In front of Farazkhana Police Station,<br />
          Pune
        </div>
      ),
      link: null,
      action: null,
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Sat: 9:00 AM - 8:00 PM',
      link: null,
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/generated/contact-bg.dim_1200x400.png"
          alt="Contact Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your learning journey? Contact us today to discuss how we can help you achieve your academic goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">{info.title}</h3>
                  <div className="text-sm text-muted-foreground">{info.content}</div>
                  {info.link && info.action && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mt-2"
                    >
                      <a href={info.link}>{info.action}</a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="pt-8 space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Enroll?</h3>
                <p className="text-muted-foreground">
                  Call us now to schedule a free consultation and learn more about our courses and teaching methodology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="tel:7719044646" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call 7719044646
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <a href="mailto:takshashila.academia31@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
