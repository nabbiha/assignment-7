import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Book {
  id: number
  name: string
  author: string
  type: string
  price?: number // Make price optional
  available: boolean
}

async function getBooks(): Promise<Book[]> {
  const res = await fetch('https://simple-books-api.glitch.me/books', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch books')
  }
  return res.json()
}

export default async function BooksPage() {
  const books = await getBooks()

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">Books (Server-side Fetching)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book: Book) => (
          <Card key={book.id} className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white">
            <CardHeader className="relative bg-gradient-to-r from-neonGreen to-pastelPink">
              <CardTitle className="text-black font-bold truncate">{book.name}</CardTitle>
            </CardHeader>
            <CardContent className="relative p-4">
              <p className="text-gray-700"><span className="font-semibold">Author:</span> {book.author}</p>
              <p className="text-gray-700"><span className="font-semibold">Type:</span> {book.type}</p>
              <p className="text-gray-700">
                <span className="font-semibold">Price:</span> 
                {book.price !== undefined ? `$${book.price.toFixed(2)}` : 'N/A'}
              </p>
              <p className="text-gray-700"><span className="font-semibold">Available:</span> {book.available ? 'Yes' : 'No'}</p>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 animate-shimmer" 
                 style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
          </Card>
        ))}
      </div>
    </div>
  )
}
