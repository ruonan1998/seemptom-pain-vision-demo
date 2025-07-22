import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Camera, 
  Mic, 
  Brain, 
  Shield, 
  Zap,
  Users,
  Award,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Camera,
      title: "AR Pain Recognition",
      description: "Advanced computer vision analyzes facial expressions and body language to detect pain levels"
    },
    {
      icon: Mic,
      title: "Voice Analysis",
      description: "AI-powered voice pattern recognition identifies pain indicators through speech analysis"
    },
    {
      icon: Brain,
      title: "AI Assessment",
      description: "Machine learning algorithms provide instant, accurate pain assessments and recommendations"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensures all patient data is protected and compliant"
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "2s", label: "Assessment Time" },
    { number: "10k+", label: "Patients Helped" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-tech-bg rounded-full text-sm font-medium text-accent">
                  <Zap className="w-4 h-4 mr-2" />
                  Next-Gen Healthcare AI
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Intelligent
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Pain Recognition</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Revolutionary AR and voice-powered technology that transforms how we assess, track, and manage pain in real-time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-primary shadow-medical hover:shadow-glow transition-all duration-300">
                  <Link to="/pain-input">
                    Start Assessment <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl animate-glow"></div>
                <div className="relative bg-card rounded-2xl p-8 shadow-soft">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-secondary">Live Assessment</span>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-primary rounded-full w-3/4"></div>
                      <div className="h-4 bg-muted rounded-full w-1/2"></div>
                      <div className="h-4 bg-secondary rounded-full w-2/3"></div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-2">
                        <Camera className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">AR Active</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mic className="w-5 h-5 text-accent" />
                        <span className="text-sm text-muted-foreground">Voice Analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Powered by Advanced AI</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our cutting-edge technology combines computer vision, voice analysis, and machine learning 
            to provide the most accurate pain assessment available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-medical-light/50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                Transforming Healthcare
                <span className="text-secondary"> Outcomes</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-health rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">For Patients</h3>
                    <p className="text-muted-foreground">Faster diagnoses, better communication with healthcare providers, and more effective pain management strategies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">For Healthcare Providers</h3>
                    <p className="text-muted-foreground">Objective pain measurements, improved patient monitoring, and data-driven treatment decisions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-tech rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">For Healthcare Systems</h3>
                    <p className="text-muted-foreground">Reduced costs, improved efficiency, and better resource allocation through intelligent automation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">Pain Level</div>
                    <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">7.2</div>
                    <div className="text-sm text-muted-foreground">Moderate to Severe</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Facial Analysis</span>
                      <span className="font-medium text-primary">92%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full w-[92%]"></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Voice Patterns</span>
                      <span className="font-medium text-accent">87%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-tech h-2 rounded-full w-[87%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-90"></div>
          <div className="relative space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Experience the Future of Pain Assessment?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of healthcare providers and patients who are already benefiting from our AI-powered solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90">
                <Link to="/pain-input">Try Demo Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/dashboard">View Sample Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;