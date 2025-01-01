export default function CSRPage() {
    return (
      <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-pastelPink">Client-side Rendering (CSR)</h1>
        <p className="text-lg">
          Client-side rendering (CSR) is a technique where the initial HTML, CSS, and JavaScript are loaded, and then 
          JavaScript is used to dynamically update the content of the page. This approach can provide a more interactive 
          user experience as subsequent updates can happen without full page reloads.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Rich interactions without page reloads</li>
          <li>Reduced server load</li>
          <li>Faster subsequent page loads</li>
          <li>Ideal for web applications with complex user interfaces</li>
        </ul>
      </div>
    )
  }
  
  