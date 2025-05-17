"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, Check, MessageSquare, Star, Users } from "lucide-react"
import type { Notification } from "@/lib/types"

interface NotificationsListProps {
  notifications: Notification[]
}

export function NotificationsList({ notifications }: NotificationsListProps) {
  const [readNotifications, setReadNotifications] = useState<string[]>([])

  const markAsRead = (id: string) => {
    setReadNotifications((prev) => [...prev, id])
  }

  const markAllAsRead = () => {
    setReadNotifications(notifications.map((n) => n.id))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-4 w-4 text-blue-500" />
      case "mention":
        return <Users className="h-4 w-4 text-green-500" />
      case "review":
        return <Star className="h-4 w-4 text-amber-500" />
      default:
        return <Bell className="h-4 w-4 text-primary" />
    }
  }

  const unreadCount = notifications.filter((n) => !readNotifications.includes(n.id)).length

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center">
          <CardTitle>Notifications</CardTitle>
          {unreadCount > 0 && <Badge className="ml-2 bg-primary/20 text-primary">{unreadCount} new</Badge>}
        </div>
        <Button variant="ghost" size="sm" onClick={markAllAsRead}>
          Mark all read
        </Button>
      </CardHeader>
      <CardContent className="max-h-[350px] overflow-auto">
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className={`flex items-start space-x-4 p-2 rounded-md ${
                readNotifications.includes(notification.id) ? "opacity-70" : "bg-muted/30"
              }`}
            >
              <div className="bg-background rounded-full p-2">{getNotificationIcon(notification.type)}</div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                  {!readNotifications.includes(notification.id) && (
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => markAsRead(notification.id)}>
                      <Check className="h-3 w-3" />
                    </Button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{notification.message}</p>
                {notification.sender && (
                  <div className="flex items-center mt-2">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback className="text-xs">{notification.sender.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs">{notification.sender}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
