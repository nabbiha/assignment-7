import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">Data Fetching Assignment</h1>
      <p className="text-xl mb-8 text-white">Explore server-side and client-side data fetching examples</p>
      <div className="space-x-4">
        <Link href="/books" className="bg-neonGreen text-black px-4 py-2 rounded hover:bg-pastelPink transition-colors">
          View Books
        </Link>
        <Link href="/products" className="bg-pastelPink text-black px-4 py-2 rounded hover:bg-neonGreen transition-colors">
          View Products
        </Link>
      </div>
    </div>
  )
}

