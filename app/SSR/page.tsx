export default function SSRPage() {
    return (
      <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-neonGreen">Server-side Rendering (SSR)</h1>
        <p className="text-lg">
          Server-side rendering (SSR) is a technique where the initial content of a web page is generated on the server 
          in response to a user's request. The server processes the request, fetches any necessary data, renders the HTML, 
          and sends the fully formed page to the client. This approach can improve initial page load times and is beneficial 
          for SEO as search engines can easily crawl the content.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Faster initial page load</li>
          <li>Better SEO performance</li>
          <li>Improved performance on low-powered devices</li>
          <li>Consistent content across all users</li>
        </ul>
      </div>
    )
  }
  
  