import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Data Fetching Assignment
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/books">Books</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/products">Products</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

