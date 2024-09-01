import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Article {
    title: String;
    author: String;
    readTime: number;
    content: String;
    image: string;
    category: String;
}


const ArticleCard: React.FC<Article> = ({ title, author, readTime, content, image, category }) => (
  <Card>
    <img src={image} alt={`${title} cover`} className="h-48 w-full object-cover" />
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{author} • {readTime} min read</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{content}</p>
    </CardContent>
    <CardFooter className="flex items-center justify-between">
      <Button variant="ghost">Read More</Button>
      <Badge variant="secondary">{category}</Badge>
    </CardFooter>
  </Card>
)

export default function ArticleAndContentFeed() {
  const mainArticle = {
    title: "The Future of AI: Promises and Perils",
    author: "John Doe",
    readTime: 5,
    content: "Artificial Intelligence is reshaping our world, offering unprecedented opportunities and challenges. This article explores the potential impacts of AI on society, economy, and human life.",
    image: "/placeholder.svg?height=400&width=600"
  }

  const articles = [
    { id: 1, title: "Web Development Trends 2023", author: "Jane Smith", readTime: 3, content: "Explore the latest trends in web development, from serverless architectures to AI-powered interfaces.", image: "/placeholder.svg?height=200&width=300&text=Article 1", category: "Technology" },
    { id: 2, title: "The Rise of Quantum Computing", author: "Alan Turing", readTime: 4, content: "Quantum computing promises to revolutionize data processing. Learn about its potential applications and challenges.", image: "/placeholder.svg?height=200&width=300&text=Article 2", category: "Science" },
    { id: 3, title: "Sustainable Energy Solutions", author: "Greta Green", readTime: 3, content: "Discover innovative approaches to renewable energy that are shaping a sustainable future.", image: "/placeholder.svg?height=200&width=300&text=Article 3", category: "Environment" },
    { id: 4, title: "The Art of Product Management", author: "Steve Jobs", readTime: 5, content: "Uncover the secrets of successful product management from industry leaders.", image: "/placeholder.svg?height=200&width=300&text=Article 4", category: "Business" },
    { id: 5, title: "Cybersecurity in the Digital Age", author: "Hacker X", readTime: 4, content: "Learn about the latest threats and defenses in the ever-evolving world of cybersecurity.", image: "/placeholder.svg?height=200&width=300&text=Article 5", category: "Security" },
    { id: 6, title: "The Psychology of User Experience", author: "UX Guru", readTime: 3, content: "Dive into the psychological principles that drive effective user experience design.", image: "/placeholder.svg?height=200&width=300&text=Article 6", category: "Design" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <main className="mb-8">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3">
              <img
                src={mainArticle.image}
                alt="Main article image"
                className="h-64 w-full object-cover md:h-full"
              />
            </div>
            <div className="p-6 md:w-1/3">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{mainArticle.title}</CardTitle>
                <CardDescription>{mainArticle.author} • {mainArticle.readTime} min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{mainArticle.content}</p>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </main>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Latest Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>
    </div>
  )
}