"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// Dummy data for a single post and its replies
const post = {
  id: 1,
  title: "Welcome to our new forum!",
  author: "Admin",
  date: "2023-03-17",
  content:
    "Hello everyone! We're excited to launch our new forum. Feel free to introduce yourselves and start discussions on various topics.",
  replies: [
    {
      id: 1,
      author: "User1",
      date: "2023-03-17",
      content: "Great to be here! Looking forward to engaging discussions.",
    },
    { id: 2, author: "User2", date: "2023-03-17", content: "Thanks for setting this up. It looks great!" },
  ],
}

export default function PostPage() {
  const { id } = useParams()
  const [newReply, setNewReply] = useState("")
  const [replies, setReplies] = useState(post.replies)

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault()
    if (newReply.trim()) {
      const newReplyObj = {
        id: replies.length + 1,
        author: "CurrentUser",
        date: new Date().toISOString().split("T")[0],
        content: newReply.trim(),
      }
      setReplies([...replies, newReplyObj])
      setNewReply("")
    }
  }

  return (
    <main className="container mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>
            Posted by {post.author} on {post.date}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{post.content}</p>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Replies</h2>
      <div className="space-y-4 mb-6">
        {replies.map((reply) => (
          <Card key={reply.id}>
            <CardHeader>
              <CardTitle className="text-lg">{reply.author}</CardTitle>
              <CardDescription>{reply.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{reply.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <form onSubmit={handleSubmitReply}>
        <Textarea
          placeholder="Write your reply..."
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
          className="mb-2"
        />
        <Button type="submit">Submit Reply</Button>
      </form>
    </main>
  )
}

