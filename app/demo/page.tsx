"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Calendar, Globe, Home, MessageSquare, PieChart, Settings, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 border-r bg-white">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-emerald-600" />
            <span className="font-bold text-lg">Publink Interest</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-4 space-y-2">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("dashboard")}
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "community" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("community")}
          >
            <Users className="mr-2 h-4 w-4" />
            Community
          </Button>
          <Button
            variant={activeTab === "messages" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("messages")}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
            <Badge className="ml-auto" variant="secondary">
              3
            </Badge>
          </Button>
          <Button
            variant={activeTab === "calendar" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("calendar")}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Calendar
          </Button>
          <Button
            variant={activeTab === "analytics" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("analytics")}
          >
            <PieChart className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Separator className="my-2" />
          <Button
            variant={activeTab === "settings" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">EcoAlliance</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="md:hidden flex items-center gap-2">
              <Globe className="h-6 w-6 text-emerald-600" />
              <span className="font-bold">Publink Interest</span>
            </div>
            <div className="flex-1 max-w-md mx-4">
              <Input placeholder="Search..." className="bg-slate-50" />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
              <Avatar className="h-8 w-8 md:hidden">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>EC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Tabs defaultValue="dashboard" className="space-y-4">
            <TabsList className="md:hidden">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <Button>New Project</Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Members</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,248</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24.3%</div>
                    <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">3 due this week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Impact Score</CardTitle>
                    <PieChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87.4</div>
                    <p className="text-xs text-muted-foreground">+4.2 from last quarter</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[350px]">
                      <div className="space-y-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="flex items-start gap-4">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={`/placeholder.svg?height=36&width=36&text=${i}`} />
                              <AvatarFallback>U{i}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <p className="text-sm">
                                <span className="font-medium">User {i}</span> {i % 2 === 0 ? "commented on" : "created"}{" "}
                                <Link href="#" className="font-medium text-emerald-600 hover:underline">
                                  Project {i}
                                </Link>
                              </p>
                              <p className="text-xs text-gray-500">
                                {i} hour{i !== 1 ? "s" : ""} ago
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your scheduled events for the next 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Community Call</div>
                            <Badge>Today</Badge>
                          </div>
                          <div className="text-sm text-gray-500">3:00 PM - 4:00 PM</div>
                        </div>
                        <Separator />
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Project Planning</div>
                            <Badge variant="outline">Tomorrow</Badge>
                          </div>
                          <div className="text-sm text-gray-500">10:00 AM - 11:30 AM</div>
                        </div>
                        <Separator />
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Stakeholder Meeting</div>
                            <Badge variant="outline">Wed</Badge>
                          </div>
                          <div className="text-sm text-gray-500">2:00 PM - 3:30 PM</div>
                        </div>
                        <Separator />
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Team Workshop</div>
                            <Badge variant="outline">Fri</Badge>
                          </div>
                          <div className="text-sm text-gray-500">9:00 AM - 12:00 PM</div>
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      View Calendar
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-4">
              <h1 className="text-2xl font-bold tracking-tight">Community</h1>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle>Discussion Group {i}</CardTitle>
                      <CardDescription>
                        {i % 2 === 0 ? "Public" : "Private"} group • {20 + i} members
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        {i % 2 === 0
                          ? "A space to discuss environmental initiatives and share resources."
                          : "Collaborative group focused on community outreach and engagement strategies."}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Join Group
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="messages" className="space-y-4">
              <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 cursor-pointer"
                        >
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${i}`} />
                            <AvatarFallback>U{i}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="font-medium truncate">User {i}</p>
                              <span className="text-xs text-gray-500">{i}h ago</span>
                            </div>
                            <p className="text-sm text-gray-500 truncate">
                              {i % 3 === 0
                                ? "Can we discuss the project timeline?"
                                : i % 3 === 1
                                  ? "I've shared the resources you requested."
                                  : "Thanks for your help with the event planning!"}
                            </p>
                          </div>
                          {i % 4 === 0 && <Badge className="ml-auto">New</Badge>}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    New Message
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
