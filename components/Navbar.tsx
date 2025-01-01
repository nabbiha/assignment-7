import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-neonGreen p-4 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Data Fetching Assignment
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-pastelPink transition-colors">
            Home
          </Link>
          <Link href="/SSR" className="hover:text-pastelPink transition-colors">
            SSR
          </Link>
          <Link href="/CSR" className="hover:text-pastelPink transition-colors">
            CSR
          </Link>
        </div>
      </div>
    </nav>
  )
}

