import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] border border-border">
      <h1 className="text-4xl font-bold mb-8">Data Fetching Assignment</h1>
      <p className="text-xl mb-8">Explore server-side and client-side data fetching examples</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/books">View Books</Link>
        </Button>
        <Button asChild>
          <Link href="/products">View Products</Link>
        </Button>
      </div>
    </div>
  )
}

