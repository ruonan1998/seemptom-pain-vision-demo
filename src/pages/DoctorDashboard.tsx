import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Calendar,
  Activity,
  Brain,
  FileText,
  Search,
  Filter,
  Download,
  Bell,
  Clock,
  MapPin,
  Thermometer
} from "lucide-react";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for doctor dashboard
  const dashboardStats = {
    totalPatients: 124,
    activePatients: 89,
    highRiskPatients: 12,
    newAssessments: 23,
    avgPainReduction: 32,
    adherenceRate: 78
  };

  const recentPatients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 34,
      lastAssessment: "2 hours ago",
      currentPainLevel: 8,
      trend: "up",
      riskLevel: "high",
      location: "Lower Back",
      condition: "Chronic Back Pain"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 45,
      lastAssessment: "4 hours ago",
      currentPainLevel: 4,
      trend: "down",
      riskLevel: "low",
      location: "Shoulders",
      condition: "Post-Surgery Recovery"
    },
    {
      id: 3,
      name: "Emma Wilson",
      age: 28,
      lastAssessment: "6 hours ago",
      currentPainLevel: 6,
      trend: "stable",
      riskLevel: "medium",
      location: "Head/Neck",
      condition: "Migraine Management"
    },
    {
      id: 4,
      name: "David Rodriguez",
      age: 52,
      lastAssessment: "1 day ago",
      currentPainLevel: 3,
      trend: "down",
      riskLevel: "low",
      location: "Knees",
      condition: "Arthritis"
    }
  ];

  const alerts = [
    {
      id: 1,
      type: "critical",
      patient: "Sarah Johnson",
      message: "Pain level increased from 5 to 8 in last 4 hours",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "warning",
      patient: "Emma Wilson",
      message: "Missed medication reminder 3 times today",
      time: "4 hours ago"
    },
    {
      id: 3,
      type: "info",
      patient: "Michael Chen",
      message: "Completed physical therapy session",
      time: "6 hours ago"
    }
  ];

  const getPainLevelColor = (level: number) => {
    if (level <= 3) return "text-secondary";
    if (level <= 6) return "text-primary";
    return "text-destructive";
  };

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "outline";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return "↗️";
      case "down": return "↘️";
      case "stable": return "➡️";
      default: return "➡️";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Doctor Dashboard</h1>
          <p className="text-xl text-muted-foreground">AI-powered patient pain monitoring and analytics</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-primary">
            <FileText className="w-4 h-4 mr-2" />
            New Report
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">{dashboardStats.totalPatients}</div>
                <div className="text-sm text-muted-foreground">Total Patients</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Activity className="w-8 h-8 text-secondary" />
              <div>
                <div className="text-2xl font-bold text-foreground">{dashboardStats.activePatients}</div>
                <div className="text-sm text-muted-foreground">Active Today</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <div>
                <div className="text-2xl font-bold text-foreground">{dashboardStats.highRiskPatients}</div>
                <div className="text-sm text-muted-foreground">High Risk</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <FileText className="w-8 h-8 text-accent" />
              <div>
                <div className="text-2xl font-bold text-foreground">{dashboardStats.newAssessments}</div>
                <div className="text-sm text-muted-foreground">New Assessments</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-secondary" />
              <div>
                <div className="text-2xl font-bold text-foreground">{dashboardStats.avgPainReduction}%</div>
                <div className="text-sm text-muted-foreground">Avg Pain Reduction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">{dashboardStats.adherenceRate}%</div>
                <div className="text-sm text-muted-foreground">Treatment Adherence</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="patients">Patient List</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Patients */}
            <Card className="lg:col-span-2 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Patient Activity</span>
                  <Button variant="outline" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary-foreground">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{patient.name}</div>
                        <div className="text-sm text-muted-foreground">{patient.condition}</div>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{patient.lastAssessment}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant={getRiskBadgeVariant(patient.riskLevel)} className="text-xs">
                          {patient.riskLevel.toUpperCase()}
                        </Badge>
                        <span className="text-xs">{getTrendIcon(patient.trend)}</span>
                      </div>
                      <div className={`text-lg font-bold ${getPainLevelColor(patient.currentPainLevel)}`}>
                        {patient.currentPainLevel}/10
                      </div>
                      <div className="text-xs text-muted-foreground">{patient.location}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Alerts Panel */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5 text-accent" />
                  <span>Active Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                    alert.type === "critical" ? "border-destructive bg-destructive/5" :
                    alert.type === "warning" ? "border-primary bg-primary/5" :
                    "border-secondary bg-secondary/5"
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="font-medium text-foreground text-sm">{alert.patient}</div>
                        <div className="text-sm text-muted-foreground">{alert.message}</div>
                        <div className="text-xs text-muted-foreground">{alert.time}</div>
                      </div>
                      <AlertTriangle className={`w-4 h-4 ${
                        alert.type === "critical" ? "text-destructive" :
                        alert.type === "warning" ? "text-primary" :
                        "text-secondary"
                      }`} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="patients" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Patient Management</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <Card key={patient.id} className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <div className="font-semibold text-foreground">{patient.name}</div>
                          <div className="text-sm text-muted-foreground">Age: {patient.age}</div>
                          <div className="text-sm text-muted-foreground">{patient.condition}</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span className="text-sm text-foreground">{patient.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-accent" />
                            <span className="text-sm text-foreground">{patient.lastAssessment}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Thermometer className="w-4 h-4 text-primary" />
                            <span className={`text-lg font-bold ${getPainLevelColor(patient.currentPainLevel)}`}>
                              {patient.currentPainLevel}/10
                            </span>
                          </div>
                          <Badge variant={getRiskBadgeVariant(patient.riskLevel)}>
                            {patient.riskLevel.toUpperCase()} RISK
                          </Badge>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" className="bg-gradient-primary">
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            Send Message
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Pain Level Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-medical-light rounded-lg p-6">
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-primary">6.2</div>
                      <div className="text-sm text-muted-foreground">Average Pain Level (This Month)</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Severe (8-10)</span>
                      <span className="font-medium text-destructive">15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Moderate (4-7)</span>
                      <span className="font-medium text-primary">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Mild (1-3)</span>
                      <span className="font-medium text-secondary">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Treatment Effectiveness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-tech-bg rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-accent">87%</div>
                      <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
                    </div>
                    <div className="bg-medical-soft rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-secondary">34%</div>
                      <div className="text-sm text-muted-foreground">Pain Reduction</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-medium text-foreground">Most Effective Treatments</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Physical Therapy</span>
                        <span className="font-medium text-secondary">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Medication Management</span>
                        <span className="font-medium text-primary">85%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Lifestyle Changes</span>
                        <span className="font-medium text-accent">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <div className="grid gap-4">
            {alerts.map((alert) => (
              <Card key={alert.id} className={`shadow-soft border-l-4 ${
                alert.type === "critical" ? "border-destructive" :
                alert.type === "warning" ? "border-primary" :
                "border-secondary"
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className={`w-5 h-5 ${
                          alert.type === "critical" ? "text-destructive" :
                          alert.type === "warning" ? "text-primary" :
                          "text-secondary"
                        }`} />
                        <span className="font-semibold text-foreground">{alert.patient}</span>
                        <Badge variant={
                          alert.type === "critical" ? "destructive" :
                          alert.type === "warning" ? "default" :
                          "secondary"
                        }>
                          {alert.type.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{alert.message}</p>
                      <div className="text-sm text-muted-foreground">{alert.time}</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Dismiss
                      </Button>
                      <Button size="sm" className="bg-gradient-primary">
                        Take Action
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DoctorDashboard;