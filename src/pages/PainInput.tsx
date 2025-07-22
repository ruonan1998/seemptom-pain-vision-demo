import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Mic, 
  Play, 
  Pause, 
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Volume2
} from "lucide-react";

const PainInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [arActive, setArActive] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);

  const steps = [
    { title: "AR Setup", description: "Position yourself in camera view" },
    { title: "Voice Calibration", description: "Speak clearly for voice analysis" },
    { title: "Pain Assessment", description: "Describe your pain experience" },
    { title: "Results", description: "Review your assessment results" }
  ];

  const handleStartAssessment = () => {
    setIsRecording(true);
    setArActive(true);
    setVoiceActive(true);
    
    // Simulate assessment progress
    const interval = setInterval(() => {
      setAssessmentStep(prev => {
        if (prev >= 3) {
          clearInterval(interval);
          setIsRecording(false);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
  };

  const resetAssessment = () => {
    setIsRecording(false);
    setAssessmentStep(0);
    setArActive(false);
    setVoiceActive(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">AI-Powered Pain Assessment</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our advanced AR and voice analysis technology will assess your pain levels in real-time. 
          Follow the steps below for the most accurate results.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                index <= assessmentStep 
                  ? "bg-gradient-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {index < assessmentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-foreground">{step.title}</div>
                <div className="text-xs text-muted-foreground">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
        <Progress value={(assessmentStep / 3) * 100} className="h-2" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Camera/AR Section */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="w-5 h-5 text-primary" />
              <span>AR Pain Recognition</span>
              {arActive && <Badge className="bg-secondary">Active</Badge>}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative bg-muted rounded-xl aspect-video flex items-center justify-center">
              {arActive ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-4 border-2 border-primary rounded-lg border-dashed animate-pulse"></div>
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <Camera className="w-10 h-10 text-primary-foreground animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-foreground">Analyzing Facial Expressions</div>
                      <div className="text-sm text-muted-foreground">AI is detecting pain indicators...</div>
                    </div>
                    {/* Simulated face detection overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-40 border-2 border-accent rounded-lg animate-pulse">
                        <div className="absolute top-8 left-8 w-4 h-4 border-2 border-accent rounded-full"></div>
                        <div className="absolute top-8 right-8 w-4 h-4 border-2 border-accent rounded-full"></div>
                        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-4 border-2 border-accent rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <Camera className="w-16 h-16 text-muted-foreground mx-auto" />
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-foreground">Camera Ready</div>
                    <div className="text-sm text-muted-foreground">Click "Start Assessment" to begin AR analysis</div>
                  </div>
                </div>
              )}
            </div>

            {/* AR Analysis Results */}
            {arActive && (
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-medical-light rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Facial Tension</div>
                  <div className="text-2xl font-bold text-primary">High</div>
                  <Progress value={78} className="h-2 mt-2" />
                </div>
                <div className="bg-medical-light rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Micro-expressions</div>
                  <div className="text-2xl font-bold text-accent">Detected</div>
                  <Progress value={92} className="h-2 mt-2" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Voice Analysis Section */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mic className="w-5 h-5 text-accent" />
              <span>Voice Analysis</span>
              {voiceActive && <Badge variant="secondary">Recording</Badge>}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-tech-bg rounded-xl p-6 text-center space-y-4">
              {voiceActive ? (
                <>
                  <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <Volume2 className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-foreground">Listening...</div>
                    <div className="text-sm text-muted-foreground">Analyzing speech patterns</div>
                  </div>
                  {/* Voice visualization */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 bg-accent rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 40 + 10}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <Mic className="w-16 h-16 text-muted-foreground mx-auto" />
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-foreground">Voice Ready</div>
                    <div className="text-sm text-muted-foreground">Click start to begin voice analysis</div>
                  </div>
                </>
              )}
            </div>

            {/* Voice Analysis Results */}
            {voiceActive && (
              <div className="space-y-4">
                <div className="bg-medical-light rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Speech Patterns</div>
                  <div className="text-lg font-semibold text-foreground">Pain Indicators Detected</div>
                  <div className="flex items-center space-x-2 mt-2">
                    <AlertCircle className="w-4 h-4 text-destructive" />
                    <span className="text-sm text-destructive">Vocal stress detected</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tone Analysis</span>
                    <span className="font-medium text-accent">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Speech Rate</span>
                    <span className="font-medium text-primary">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
              </div>
            )}

            {/* Control Buttons */}
            <div className="flex flex-col space-y-2">
              {!isRecording ? (
                <Button 
                  onClick={handleStartAssessment}
                  className="bg-gradient-primary shadow-medical hover:shadow-glow transition-all duration-300"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Assessment
                </Button>
              ) : (
                <Button 
                  onClick={() => setIsRecording(false)}
                  variant="destructive"
                >
                  <Pause className="w-4 h-4 mr-2" />
                  Stop Assessment
                </Button>
              )}
              
              <Button 
                onClick={resetAssessment}
                variant="outline"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results Summary */}
      {assessmentStep >= 3 && (
        <Card className="border-2 border-secondary/20 shadow-medical">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-secondary">
              <CheckCircle className="w-5 h-5" />
              <span>Assessment Complete</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">7.3</div>
              <div className="text-xl font-semibold text-foreground mb-2">Moderate to Severe Pain</div>
              <div className="text-muted-foreground">Based on multi-modal AI analysis</div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-medical-light rounded-lg">
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">AR Confidence</div>
              </div>
              <div className="text-center p-4 bg-tech-bg rounded-lg">
                <div className="text-2xl font-bold text-accent">87%</div>
                <div className="text-sm text-muted-foreground">Voice Confidence</div>
              </div>
              <div className="text-center p-4 bg-medical-soft rounded-lg">
                <div className="text-2xl font-bold text-secondary">89%</div>
                <div className="text-sm text-muted-foreground">Overall Accuracy</div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-gradient-health">
                <a href="/assessment">View Full Assessment</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/diary">Save to Diary</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PainInput;