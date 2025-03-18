import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Dummy data for forum posts
const forumPosts = [
  { id: 1, title: "Welcome to our new forum!", author: "Admin", date: "2023-03-17", replies: 5 },
  { id: 2, title: "How to get started with Next.js?", author: "NewDev", date: "2023-03-16", replies: 3 },
  { id: 3, title: "Best practices for React hooks", author: "ReactEnthusiast", date: "2023-03-15", replies: 7 },
]

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Forum Posts</h1>
      <div className="space-y-4">
        {forumPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>
                <Link href={`/post/${post.id}`} className="text-blue-600 hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>
                Posted by {post.author} on {post.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{post.replies} replies</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

