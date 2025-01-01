export default function SSRPage() {
    return (
      <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-neonGreen">Server-side Rendering (SSR)</h1>
        <p className="text-lg">
          SSR generates the full HTML for a page on the server in response to navigation. This approach can improve initial page load times and is beneficial for SEO.
        </p>
      </div>
    )
  }
  
  