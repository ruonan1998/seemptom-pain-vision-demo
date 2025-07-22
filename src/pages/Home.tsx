import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Camera, 
  Mic, 
  Brain, 
  Shield, 
  Users,
  Activity,
  Smartphone,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Camera,
      title: "AR Pain Detection",
      description: "Computer vision technology analyzes facial expressions and body posture to detect pain indicators"
    },
    {
      icon: Brain,
      title: "AI Pain Analysis",
      description: "Advanced machine learning algorithms interpret pain signals and provide accurate assessments"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Accessible pain tracking and sharing from any device, anywhere, anytime"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "HIPAA-compliant data protection ensures your medical information stays confidential"
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "2s", label: "Detection Time" },
    { number: "24/7", label: "Availability" },
    { number: "1000+", label: "Users Helped" }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Logo/Brand */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medical">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Seemptom-Pain
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              An AR-based AI system for pain detection, tracking, and sharing.
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-primary text-lg px-8 py-6 shadow-medical hover:shadow-glow transition-all duration-300 animate-fade-in"
              >
                <Link to="/pain-input">
                  Start Self-Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Advanced Pain Recognition Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining AR, AI, and medical expertise to revolutionize pain assessment and management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, fast, and accurate pain assessment in three steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Capture</h3>
              <p className="text-muted-foreground">Use AR camera to analyze facial expressions and describe your pain</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-health rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-secondary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Analyze</h3>
              <p className="text-muted-foreground">AI processes visual and verbal cues to assess pain levels and location</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-tech rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Share</h3>
              <p className="text-muted-foreground">Generate reports to track progress and share with healthcare providers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-primary-foreground space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Pain Management?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of users who are already using AI-powered pain assessment to improve their quality of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                variant="secondary" 
                className="bg-card text-foreground hover:bg-card/90 shadow-soft"
              >
                <Link to="/pain-input">Start Self-Assessment</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/diary">View Pain Diary</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;