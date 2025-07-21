import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Star, CheckCircle, ArrowRight } from "lucide-react";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(!!loggedIn);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Courses",
      description: "Hands-on learning with real-world projects and practical exercises"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: Star,
      title: "Personalized Learning",
      description: "Adaptive learning paths tailored to your skill level and goals"
    },
    {
      icon: CheckCircle,
      title: "Certificates",
      description: "Earn recognized certificates upon successful course completion"
    }
  ];

  const stats = [
    { number: "50K+", label: "Students" },
    { number: "200+", label: "Courses" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-12 w-12 text-primary" />
            <BookOpen className="h-12 w-12 text-secondary" />
          </div>
          <h1 className="text-4xl font-bold">Welcome back to EduLearn!</h1>
          <p className="text-xl text-muted-foreground">Ready to continue your learning journey?</p>
          <Button onClick={() => navigate("/dashboard")} size="lg">
            Go to Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <BookOpen className="h-8 w-8 text-secondary" />
            <span className="text-2xl font-bold">EduLearn</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Learn, Grow, and
            <span className="text-primary"> Excel</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Join thousands of learners in our comprehensive educational platform. 
            Master new skills with expert-led courses and hands-on projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose EduLearn?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide the tools, resources, and support you need to succeed in your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-scale">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="text-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of learners and unlock your potential with our comprehensive courses
            </p>
            <Link to="/signup">
              <Button size="lg">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 text-center text-muted-foreground">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <BookOpen className="h-6 w-6 text-secondary" />
            <span className="font-semibold">EduLearn</span>
          </div>
          <p>&copy; 2024 EduLearn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
