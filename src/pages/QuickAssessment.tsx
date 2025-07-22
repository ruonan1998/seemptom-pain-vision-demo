import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { 
  MapPin, 
  Clock, 
  Thermometer, 
  Activity,
  Brain,
  FileText,
  Send,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const QuickAssessment = () => {
  const [painLevel, setPainLevel] = useState([5]);
  const [painLocation, setPainLocation] = useState("");
  const [painType, setPainType] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const painTypes = [
    { id: "sharp", label: "Sharp/Stabbing", icon: "⚡" },
    { id: "dull", label: "Dull/Aching", icon: "🔄" },
    { id: "burning", label: "Burning", icon: "🔥" },
    { id: "throbbing", label: "Throbbing", icon: "💓" },
    { id: "cramping", label: "Cramping", icon: "🌀" },
    { id: "shooting", label: "Shooting", icon: "🏹" }
  ];

  const locations = [
    "Head/Neck", "Shoulders", "Arms", "Chest", "Upper Back", 
    "Lower Back", "Abdomen", "Hips", "Legs", "Feet"
  ];

  const durations = [
    "Just started", "Few minutes", "1-2 hours", 
    "Several hours", "1-2 days", "More than a week"
  ];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getPainLevelColor = (level: number) => {
    if (level <= 3) return "text-secondary";
    if (level <= 6) return "text-primary";
    return "text-destructive";
  };

  const getPainLevelText = (level: number) => {
    if (level <= 3) return "Mild";
    if (level <= 6) return "Moderate";
    return "Severe";
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto border-2 border-secondary/20 shadow-medical">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-health rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-secondary-foreground" />
            </div>
            <CardTitle className="text-2xl text-secondary">Assessment Submitted</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground">
                Your pain assessment has been recorded and analyzed.
              </p>
              
              <div className="bg-medical-light rounded-lg p-6">
                <div className="text-center space-y-2">
                  <div className={`text-5xl font-bold ${getPainLevelColor(painLevel[0])}`}>
                    {painLevel[0]}/10
                  </div>
                  <div className="text-xl font-semibold text-foreground">
                    {getPainLevelText(painLevel[0])} Pain Level
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {painLocation} • {painType} • {duration}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-tech-bg rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">AI Confidence</div>
                  <div className="text-2xl font-bold text-accent">94%</div>
                </div>
                <div className="bg-medical-soft rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Risk Assessment</div>
                  <div className="text-2xl font-bold text-secondary">Low</div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <Button asChild className="w-full bg-gradient-primary">
                  <a href="/diary">Save to Pain Diary</a>
                </Button>
                <div className="flex space-x-4">
                  <Button asChild variant="outline" className="flex-1">
                    <a href="/pain-input">AR Assessment</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="/dashboard">View Trends</a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Quick Pain Assessment</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Provide details about your current pain to receive instant AI-powered insights and recommendations.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Assessment Form */}
          <div className="space-y-6">
            {/* Pain Level */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Thermometer className="w-5 h-5 text-primary" />
                  <span>Pain Intensity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className={`text-6xl font-bold ${getPainLevelColor(painLevel[0])}`}>
                    {painLevel[0]}
                  </div>
                  <div className="text-lg font-medium text-muted-foreground">
                    {getPainLevelText(painLevel[0])} Pain
                  </div>
                </div>
                <Slider
                  value={painLevel}
                  onValueChange={setPainLevel}
                  max={10}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>No Pain</span>
                  <span>Worst Pain</span>
                </div>
              </CardContent>
            </Card>

            {/* Pain Location */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Pain Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {locations.map((location) => (
                    <Button
                      key={location}
                      variant={painLocation === location ? "default" : "outline"}
                      onClick={() => setPainLocation(location)}
                      className="justify-start text-sm"
                    >
                      {location}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pain Type */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-accent" />
                  <span>Pain Type</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {painTypes.map((type) => (
                    <Button
                      key={type.id}
                      variant={painType === type.id ? "default" : "outline"}
                      onClick={() => setPainType(type.id)}
                      className="justify-start text-sm"
                    >
                      <span className="mr-2">{type.icon}</span>
                      {type.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Duration */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Duration</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {durations.map((dur) => (
                    <Button
                      key={dur}
                      variant={duration === dur ? "default" : "outline"}
                      onClick={() => setDuration(dur)}
                      className="justify-start text-sm"
                    >
                      {dur}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Details & Submit */}
          <div className="space-y-6">
            {/* Description */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-secondary" />
                  <span>Additional Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="description" className="text-sm font-medium">
                    Describe your pain (optional)
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what triggers the pain, what makes it better or worse, any associated symptoms..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-2 min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* AI Analysis Preview */}
            <Card className="border-2 border-accent/20 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-accent" />
                  <span>AI Analysis Preview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pain Assessment</span>
                    <span className="font-medium text-foreground">
                      {painLevel[0] > 0 ? `${painLevel[0]}/10` : "Pending"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Location Analysis</span>
                    <span className="font-medium text-foreground">
                      {painLocation || "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Type Classification</span>
                    <span className="font-medium text-foreground">
                      {painType ? painTypes.find(t => t.id === painType)?.label : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Duration Category</span>
                    <span className="font-medium text-foreground">
                      {duration || "Not selected"}
                    </span>
                  </div>
                </div>

                {painLevel[0] > 7 && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-destructive">High Pain Level Detected</div>
                        <div className="text-xs text-destructive/80">Consider seeking immediate medical attention</div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Submit Button */}
            <Button 
              onClick={handleSubmit}
              disabled={!painLocation || !painType || !duration}
              className="w-full bg-gradient-primary shadow-medical hover:shadow-glow transition-all duration-300"
              size="lg"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Assessment
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Want a more detailed analysis?{" "}
                <a href="/pain-input" className="text-primary font-medium hover:underline">
                  Try our AR & Voice Assessment
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAssessment;