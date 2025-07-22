import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { 
  Plus, 
  TrendingUp, 
  TrendingDown,
  Calendar as CalendarIcon,
  Filter,
  Download,
  Share,
  Activity,
  MapPin,
  Clock,
  Thermometer
} from "lucide-react";
import { format } from "date-fns";

const PainDiary = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("week");

  // Mock pain diary data
  const painEntries = [
    {
      id: 1,
      date: "2024-01-20",
      time: "09:15 AM",
      painLevel: 7,
      location: "Lower Back",
      type: "Sharp/Stabbing",
      duration: "2 hours",
      triggers: ["Sitting too long", "Poor posture"],
      medications: ["Ibuprofen 400mg"],
      activities: ["Work at desk"],
      mood: "Frustrated",
      notes: "Pain started after long meeting, improved after stretching"
    },
    {
      id: 2,
      date: "2024-01-19",
      time: "03:30 PM",
      painLevel: 4,
      location: "Shoulders",
      type: "Dull/Aching",
      duration: "30 minutes",
      triggers: ["Stress"],
      medications: [],
      activities: ["Exercise"],
      mood: "Good",
      notes: "Mild tension after workout, resolved quickly"
    },
    {
      id: 3,
      date: "2024-01-18",
      time: "11:45 PM",
      painLevel: 8,
      location: "Head/Neck",
      type: "Throbbing",
      duration: "4+ hours",
      triggers: ["Screen time", "Lack of sleep"],
      medications: ["Acetaminophen 500mg"],
      activities: ["Rest"],
      mood: "Poor",
      notes: "Severe headache, had to stop work early"
    }
  ];

  const painStats = {
    averagePain: 6.3,
    painFrequency: 4.2, // episodes per week
    trendDirection: "down", // up, down, stable
    trendPercentage: 12,
    mostCommonLocation: "Lower Back",
    mostCommonTrigger: "Sitting too long"
  };

  const getPainLevelColor = (level: number) => {
    if (level <= 3) return "bg-secondary text-secondary-foreground";
    if (level <= 6) return "bg-primary text-primary-foreground";
    return "bg-destructive text-destructive-foreground";
  };

  const getPainLevelText = (level: number) => {
    if (level <= 3) return "Mild";
    if (level <= 6) return "Moderate";
    return "Severe";
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Pain Diary</h1>
          <p className="text-xl text-muted-foreground">Track and analyze your pain patterns over time</p>
        </div>
        <div className="flex space-x-3">
          <Button asChild className="bg-gradient-primary">
            <a href="/pain-input">
              <Plus className="w-4 h-4 mr-2" />
              New Entry
            </a>
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar with Calendar and Stats */}
        <div className="lg:col-span-1 space-y-6">
          {/* Calendar */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5 text-primary" />
                <span>Calendar</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="pointer-events-auto"
              />
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-secondary" />
                <span>This Week</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Average Pain</span>
                  <Badge className={getPainLevelColor(painStats.averagePain)}>
                    {painStats.averagePain}/10
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Episodes</span>
                  <span className="font-medium text-foreground">{painStats.painFrequency}/week</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Trend</span>
                  <div className="flex items-center space-x-1">
                    {painStats.trendDirection === "down" ? (
                      <TrendingDown className="w-4 h-4 text-secondary" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-destructive" />
                    )}
                    <span className={`text-sm font-medium ${
                      painStats.trendDirection === "down" ? "text-secondary" : "text-destructive"
                    }`}>
                      {painStats.trendPercentage}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t space-y-2">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Most Common Location</div>
                  <div className="text-sm font-medium text-foreground">{painStats.mostCommonLocation}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Top Trigger</div>
                  <div className="text-sm font-medium text-foreground">{painStats.mostCommonTrigger}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* View Controls */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {["day", "week", "month"].map((mode) => (
                <Button
                  key={mode}
                  variant={viewMode === mode ? "default" : "outline"}
                  onClick={() => setViewMode(mode as any)}
                  size="sm"
                  className="capitalize"
                >
                  {mode}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Pain Entries */}
          <div className="space-y-4">
            {painEntries.map((entry) => (
              <Card key={entry.id} className="shadow-soft hover:shadow-medical transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge className={getPainLevelColor(entry.painLevel)}>
                        {entry.painLevel}/10
                      </Badge>
                      <div>
                        <div className="font-semibold text-foreground">{entry.date}</div>
                        <div className="text-sm text-muted-foreground">{entry.time}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {getPainLevelText(entry.painLevel)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-foreground">{entry.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Thermometer className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{entry.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">{entry.duration}</span>
                    </div>
                  </div>

                  {entry.triggers.length > 0 && (
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-2">TRIGGERS</div>
                      <div className="flex flex-wrap gap-2">
                        {entry.triggers.map((trigger, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {trigger}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {entry.medications.length > 0 && (
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-2">MEDICATIONS</div>
                      <div className="flex flex-wrap gap-2">
                        {entry.medications.map((med, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {med}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {entry.notes && (
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-2">NOTES</div>
                      <p className="text-sm text-foreground bg-muted/50 rounded-lg p-3">
                        {entry.notes}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="text-xs text-muted-foreground">
                        Mood: <span className="text-foreground font-medium">{entry.mood}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Activity: <span className="text-foreground font-medium">{entry.activities.join(", ")}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline">
              Load More Entries
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainDiary;