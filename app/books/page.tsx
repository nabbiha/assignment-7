import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

async function getBooks() {
  const res = await fetch('https://simple-books-api.glitch.me/books')
  if (!res.ok) {
    throw new Error('Failed to fetch books')
  }
  return res.json()
}

export default async function BooksPage() {
  const books = await getBooks()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Books (Server-side Fetching)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book: any) => (
          <Card key={book.id}>
            <CardHeader>
              <CardTitle>{book.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Author: {book.author}</p>
              <p>Type: {book.type}</p>
              <p>Price: ${book.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

