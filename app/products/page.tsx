'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><span className="loader"></span></div>
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">Products (Client-side Fetching)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white">
            <CardHeader className="relative bg-gradient-to-r from-pastelPink to-neonGreen">
              <CardTitle className="text-black font-bold truncate">{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative p-4">
              <div className="aspect-square relative mb-4 bg-white rounded-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-gray-700"><span className="font-semibold">Category:</span> {product.category}</p>
              <p className="text-gray-700"><span className="font-semibold">Price:</span> ${product.price.toFixed(2)}</p>
              <p className="text-gray-700 line-clamp-2"><span className="font-semibold">Description:</span> {product.description}</p>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 animate-shimmer" 
                 style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
          </Card>
        ))}
      </div>
    </div>
  )
}

