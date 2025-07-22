import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Mic, 
  Send,
  Volume2,
  Play,
  Square,
  RotateCcw
} from "lucide-react";
import bodyMapImage from "@/assets/body-map.png";

const PainInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [painDescription, setPainDescription] = useState("");
  const [aiInterpretation, setAiInterpretation] = useState("");
  const [arActive, setArActive] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);
  const [selectedBodyAreas, setSelectedBodyAreas] = useState<string[]>([]);

  // Mock body areas for clicking (coordinates would be actual click areas on the image)
  const bodyAreas = [
    { name: "Head", id: "head", x: 50, y: 15 },
    { name: "Neck", id: "neck", x: 50, y: 25 },
    { name: "Left Shoulder", id: "left-shoulder", x: 35, y: 35 },
    { name: "Right Shoulder", id: "right-shoulder", x: 65, y: 35 },
    { name: "Chest", id: "chest", x: 50, y: 45 },
    { name: "Left Arm", id: "left-arm", x: 25, y: 50 },
    { name: "Right Arm", id: "right-arm", x: 75, y: 50 },
    { name: "Upper Back", id: "upper-back", x: 50, y: 40 },
    { name: "Lower Back", id: "lower-back", x: 50, y: 55 },
    { name: "Abdomen", id: "abdomen", x: 50, y: 60 },
    { name: "Left Hip", id: "left-hip", x: 40, y: 65 },
    { name: "Right Hip", id: "right-hip", x: 60, y: 65 },
    { name: "Left Leg", id: "left-leg", x: 45, y: 80 },
    { name: "Right Leg", id: "right-leg", x: 55, y: 80 }
  ];

  const handleArToggle = () => {
    setArActive(!arActive);
  };

  const handleVoiceToggle = () => {
    setVoiceActive(!voiceActive);
    setIsRecording(!isRecording);
  };

  const handleBodyAreaClick = (areaId: string, areaName: string) => {
    setSelectedBodyAreas(prev => {
      if (prev.includes(areaId)) {
        return prev.filter(id => id !== areaId);
      } else {
        return [...prev, areaId];
      }
    });
  };

  const analyzeDescription = () => {
    // Mock AI interpretation based on input
    if (painDescription.toLowerCase().includes("stomach") || painDescription.toLowerCase().includes("abdomen")) {
      setAiInterpretation("Sharp stabbing pain from L abdomen radiating to T12 vertebrae. Intensity: 7/10. Duration: Acute onset, intermittent pattern detected.");
    } else if (painDescription.toLowerCase().includes("head") || painDescription.toLowerCase().includes("headache")) {
      setAiInterpretation("Bilateral temporal throbbing pain with occipital tension. Migraine pattern detected. Intensity: 6/10. Associated photophobia indicated.");
    } else if (painDescription.toLowerCase().includes("back")) {
      setAiInterpretation("Chronic lower back pain L4-L5 region with sciatic nerve involvement. Mechanical pattern. Intensity: 8/10. Range of motion limited.");
    } else if (painDescription) {
      setAiInterpretation("Multi-modal pain assessment indicates localized tissue inflammation with neuropathic components. Recommended further clinical evaluation for precise diagnosis.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Pain Input & Analysis</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Use AR camera, voice input, and body mapping to describe your pain. 
          Our AI will provide detailed medical interpretation.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - AR Camera & Voice */}
        <div className="space-y-6">
          {/* AR Camera Interface */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <span>AR Camera Interface</span>
                </div>
                {arActive && <Badge className="bg-secondary">AR Active</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative bg-muted rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                {arActive ? (
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10">
                    {/* Mock camera feed with face detection overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Face detection box */}
                        <div className="w-48 h-56 border-2 border-primary rounded-lg relative animate-pulse">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                            Face Detected
                          </div>
                          {/* Eye tracking points */}
                          <div className="absolute top-16 left-12 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                          <div className="absolute top-16 right-12 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                          {/* Mouth tracking */}
                          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-8 h-3 border border-accent rounded-full animate-pulse"></div>
                          {/* Pain expression indicators */}
                          <div className="absolute top-20 left-8 text-xs text-destructive font-medium">
                            Tension: High
                          </div>
                          <div className="absolute top-28 right-8 text-xs text-primary font-medium">
                            Expression: 7.2/10
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-sm text-foreground font-medium">AR Analysis Active</div>
                        <div className="text-xs text-muted-foreground">Detecting facial pain indicators...</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <Camera className="w-16 h-16 text-muted-foreground mx-auto" />
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-foreground">AR Camera Ready</div>
                      <div className="text-sm text-muted-foreground">Click "Start AR" to begin facial analysis</div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  onClick={handleArToggle}
                  className={arActive ? "bg-destructive hover:bg-destructive/90" : "bg-gradient-primary"}
                >
                  {arActive ? (
                    <>
                      <Square className="w-4 h-4 mr-2" />
                      Stop AR
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Start AR
                    </>
                  )}
                </Button>
                <Button variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Natural Language Input */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Describe Your Pain</span>
                <Button
                  onClick={handleVoiceToggle}
                  size="sm"
                  variant={voiceActive ? "destructive" : "outline"}
                  className="flex items-center space-x-2"
                >
                  {voiceActive ? (
                    <>
                      <Square className="w-4 h-4" />
                      <span>Stop</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4" />
                      <span>Voice</span>
                    </>
                  )}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Textarea
                  value={painDescription}
                  onChange={(e) => setPainDescription(e.target.value)}
                  placeholder="Describe your pain in natural language... (e.g., 'Sharp stabbing pain in my lower left abdomen that gets worse when I move')"
                  className="min-h-[120px] resize-none"
                />
                {voiceActive && (
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <Volume2 className="w-4 h-4 text-accent animate-pulse" />
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-accent rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 20 + 8}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Button 
                onClick={analyzeDescription}
                disabled={!painDescription.trim()}
                className="w-full bg-gradient-primary"
              >
                <Send className="w-4 h-4 mr-2" />
                Analyze Description
              </Button>
            </CardContent>
          </Card>

          {/* AI Interpretation Output */}
          <Card className="shadow-soft border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-accent">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>AI Medical Interpretation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-tech-bg rounded-lg p-4 min-h-[100px]">
                {aiInterpretation ? (
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">{aiInterpretation}</p>
                    <div className="text-xs text-muted-foreground pt-2 border-t">
                      AI Confidence: 94% • Analysis completed in 1.2s
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Enter a pain description to see AI interpretation
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Body Map */}
        <div className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 010-4.9h.1a2.5 2.5 0 010 4.9h-.1z" clipRule="evenodd" />
                </svg>
                <span>Body Map - Click Pain Areas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative mx-auto max-w-md">
                <img 
                  src={bodyMapImage} 
                  alt="Human body diagram for pain mapping"
                  className="w-full h-auto"
                />
                
                {/* Clickable body area overlays */}
                {bodyAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => handleBodyAreaClick(area.id, area.name)}
                    className={`absolute w-6 h-6 rounded-full border-2 transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 ${
                      selectedBodyAreas.includes(area.id)
                        ? "bg-destructive border-destructive shadow-lg animate-pulse"
                        : "bg-primary/20 border-primary hover:bg-primary/40"
                    }`}
                    style={{
                      left: `${area.x}%`,
                      top: `${area.y}%`
                    }}
                    title={area.name}
                  >
                    <span className="sr-only">{area.name}</span>
                  </button>
                ))}
              </div>

              {/* Selected Areas */}
              {selectedBodyAreas.length > 0 && (
                <div className="mt-6 space-y-3">
                  <div className="text-sm font-medium text-foreground">Selected Pain Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedBodyAreas.map((areaId) => {
                      const area = bodyAreas.find(a => a.id === areaId);
                      return area ? (
                        <Badge 
                          key={areaId} 
                          variant="destructive" 
                          className="cursor-pointer hover:bg-destructive/80"
                          onClick={() => handleBodyAreaClick(areaId, area.name)}
                        >
                          {area.name} ✕
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              <div className="mt-6 text-xs text-muted-foreground">
                💡 Click on body areas where you feel pain. Selected areas will be highlighted in red.
              </div>
            </CardContent>
          </Card>

          {/* Summary Card */}
          {(painDescription || selectedBodyAreas.length > 0 || arActive) && (
            <Card className="shadow-soft border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-secondary">Assessment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-medical-light rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">Pain Areas</div>
                    <div className="text-lg font-bold text-foreground">
                      {selectedBodyAreas.length}
                    </div>
                  </div>
                  <div className="bg-tech-bg rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">AR Analysis</div>
                    <div className="text-lg font-bold text-foreground">
                      {arActive ? "Active" : "Inactive"}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button asChild className="flex-1 bg-gradient-health">
                    <a href="/assessment">Continue to Assessment</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="/diary">Save to Diary</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PainInput;