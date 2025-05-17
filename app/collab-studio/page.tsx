"use client"

import { useState, useRef, useEffect } from "react"
import {
  Code,
  PenTool,
  MessageSquare,
  Play,
  Save,
  Download,
  Share,
  Zap,
  Settings,
  ChevronRight,
  Folder,
  File,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Demo data
const activeUsers = [
  { id: 1, name: "You", avatar: "/placeholder.svg?height=32&width=32", color: "#f43f5e", role: "Owner" },
  { id: 2, name: "Alex Chen", avatar: "/placeholder.svg?height=32&width=32", color: "#60a5fa", role: "Editor" },
  { id: 3, name: "Sophia R.", avatar: "/placeholder.svg?height=32&width=32", color: "#4ade80", role: "Viewer" },
]

const fileStructure = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Button.jsx", type: "file", language: "jsx" },
          { name: "Card.jsx", type: "file", language: "jsx" },
          { name: "Header.jsx", type: "file", language: "jsx" },
        ],
      },
      {
        name: "pages",
        type: "folder",
        children: [
          { name: "index.js", type: "file", language: "js" },
          { name: "about.js", type: "file", language: "js" },
          { name: "dashboard.js", type: "file", language: "js" },
        ],
      },
      {
        name: "utils",
        type: "folder",
        children: [
          { name: "api.js", type: "file", language: "js" },
          { name: "helpers.js", type: "file", language: "js" },
        ],
      },
      { name: "App.jsx", type: "file", language: "jsx" },
      { name: "index.js", type: "file", language: "js" },
    ],
  },
  { name: "package.json", type: "file", language: "json" },
  { name: "README.md", type: "file", language: "md" },
]

const messages = [
  { id: 1, user: "Alex Chen", text: "I just pushed the new component structure. Can you review it?", time: "10:32 AM" },
  { id: 2, user: "You", text: "Looks good! I'll make some tweaks to the styling.", time: "10:35 AM" },
  {
    id: 3,
    user: "Sophia R.",
    text: "The API integration is working now. Check the utils/api.js file.",
    time: "10:40 AM",
  },
]

// Sample code for the editor
const sampleCode = `import React, { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { fetchData } from './utils/api';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadData() {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    }
    
    loadData();
  }, []);
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>InnovVerse X Project</h1>
        <Button onClick={() => console.log('Button clicked!')}>
          Get Started
        </Button>
      </header>
      
      <main>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <div className="card-grid">
            {data.map(item => (
              <Card key={item.id} title={item.title} content={item.content} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;`

export default function CollabStudio() {
  const [activeTab, setActiveTab] = useState("code")
  const [selectedFile, setSelectedFile] = useState("src/App.jsx")
  const [code, setCode] = useState(sampleCode)
  const [newMessage, setNewMessage] = useState("")
  const [localMessages, setLocalMessages] = useState(messages)
  const [isHackMode, setIsHackMode] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll chat to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [localMessages])

  // Handle sending a new message
  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const newMsg = {
      id: localMessages.length + 1,
      user: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setLocalMessages([...localMessages, newMsg])
    setNewMessage("")
  }

  // Recursive function to render file tree
  const renderFileTree = (items: any[], level = 0) => {
    return items.map((item) => (
      <div key={item.name} style={{ paddingLeft: `${level * 12}px` }}>
        {item.type === "folder" ? (
          <Collapsible defaultOpen={level < 1}>
            <CollapsibleTrigger className="flex items-center gap-1 py-1 w-full hover:bg-muted rounded px-1">
              <ChevronRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
              <Folder className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-sm">{item.name}</span>
            </CollapsibleTrigger>
            <CollapsibleContent>{item.children && renderFileTree(item.children, level + 1)}</CollapsibleContent>
          </Collapsible>
        ) : (
          <div
            className={`flex items-center gap-1 py-1 px-1 rounded text-sm hover:bg-muted cursor-pointer ${selectedFile === (level > 0 ? `src/${item.name}` : item.name) ? "bg-muted" : ""}`}
            onClick={() => setSelectedFile(level > 0 ? `src/${item.name}` : item.name)}
          >
            <File className="h-4 w-4 text-muted-foreground shrink-0" />
            <span>{item.name}</span>
          </div>
        )}
      </div>
    ))
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Live Collab Studio</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Build in real-time with integrated code editor, whiteboard, and multiplayer 'Hack Mode'.
        </p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <Input placeholder="Project Name" defaultValue="InnovVerse Demo Project" className="w-64" />
          <Select defaultValue="react">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Save className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Share className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button
            variant={isHackMode ? "default" : "outline"}
            className="gap-2"
            onClick={() => setIsHackMode(!isHackMode)}
          >
            <Zap className="h-4 w-4" />
            {isHackMode ? "Exit Hack Mode" : "Hack Mode"}
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-medium">Collaborators:</span>
        <div className="flex -space-x-2">
          {activeUsers.map((user) => (
            <TooltipProvider key={user.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className="border-2 border-background" style={{ borderColor: user.color }}>
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {user.name} ({user.role})
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Badge variant="outline" className="ml-2">
          3 online
        </Badge>
      </div>

      <div className="border rounded-lg shadow-sm overflow-hidden">
        <div className="bg-muted p-2 flex items-center justify-between">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 w-[400px]">
              <TabsTrigger value="code" className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                <span>Code</span>
              </TabsTrigger>
              <TabsTrigger value="whiteboard" className="flex items-center gap-1">
                <PenTool className="h-4 w-4" />
                <span>Whiteboard</span>
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>Chat</span>
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center gap-1">
                <Play className="h-4 w-4" />
                <span>Preview</span>
              </TabsTrigger>
            </TabsList>

            <div className="flex justify-end">
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>

            <TabsContent value="code" className="m-0 border-0 p-0">
              <ResizablePanelGroup direction="horizontal">
                {/* File Explorer */}
                <ResizablePanel defaultSize={20} minSize={15}>
                  <div className="h-[600px] border-r">
                    <div className="p-2 border-b flex items-center justify-between">
                      <h3 className="text-sm font-medium">Files</h3>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="p-2 overflow-auto h-[calc(100%-37px)]">{renderFileTree(fileStructure)}</div>
                  </div>
                </ResizablePanel>

                <ResizableHandle />

                {/* Main Content Area */}
                <ResizablePanel defaultSize={80}>
                  <div className="h-[600px] flex flex-col">
                    <div className="bg-muted px-4 py-1 border-b flex items-center gap-2">
                      <Badge variant="outline">{selectedFile}</Badge>
                      <Badge variant="secondary">React</Badge>
                    </div>
                    <div className="flex-1 overflow-auto p-4 font-mono text-sm bg-background">
                      <pre className="whitespace-pre-wrap">{code}</pre>
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </TabsContent>

            <TabsContent value="whiteboard" className="m-0 border-0 p-0">
              <div className="h-[600px] bg-white flex items-center justify-center">
                <div className="text-center">
                  <PenTool className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Collaborative Whiteboard</h3>
                  <p className="text-muted-foreground max-w-md">
                    Draw, sketch, and visualize ideas together in real-time.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="chat" className="m-0 border-0 p-0">
              <div className="h-[600px] flex flex-col">
                <div className="flex-1 overflow-auto p-4" ref={chatContainerRef}>
                  <div className="space-y-4">
                    {localMessages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.user === "You" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            msg.user === "You" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">{msg.user}</span>
                            <span className="text-xs opacity-70">{msg.time}</span>
                          </div>
                          <p>{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSendMessage()
                      }}
                    />
                    <Button onClick={handleSendMessage}>Send</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="preview" className="m-0 border-0 p-0">
              <div className="h-[600px] bg-white flex flex-col">
                <div className="bg-muted px-4 py-1 border-b flex items-center gap-2">
                  <Badge variant="outline">Live Preview</Badge>
                  <Badge variant="secondary">Development</Badge>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">App Preview</h3>
                    <p className="text-muted-foreground max-w-md mb-4">
                      See your application running in real-time as you make changes.
                    </p>
                    <Button>Start Preview</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {isHackMode && (
        <div className="mt-4 p-4 border rounded-lg bg-primary/10 border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <h3 className="font-bold">Hack Mode Activated</h3>
            </div>
            <Badge variant="outline">Multiplayer Enabled</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Hack Mode enables real-time collaborative editing with cursor presence, live code execution, and instant
            preview updates. All team members can see each other's changes as they happen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background p-3 rounded-lg border">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
                <span className="text-sm font-medium">Your Cursor</span>
              </div>
              <p className="text-xs text-muted-foreground">Currently editing App.jsx</p>
            </div>
            <div className="bg-background p-3 rounded-lg border">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#60a5fa]"></div>
                <span className="text-sm font-medium">Alex Chen</span>
              </div>
              <p className="text-xs text-muted-foreground">Currently editing Button.jsx</p>
            </div>
            <div className="bg-background p-3 rounded-lg border">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
                <span className="text-sm font-medium">Sophia R.</span>
              </div>
              <p className="text-xs text-muted-foreground">Currently viewing preview</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
