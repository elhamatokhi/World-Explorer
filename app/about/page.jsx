export const metadata = {
  title: "About | World Explorer",
  description: "Learn more about the World Explorer project.",
};

export default function AboutPage() {
  return (
    <main >
      <div className="rounded-xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-4xl font-bold">About World Explorer</h1>

        <p className="mb-6 text-lg leading-8 text-gray-700">
          <strong>World Explorer</strong> is a Next.js application that lets
          users discover countries from around the world using real-time data
          from the <strong>REST Countries API v5</strong>. Users can browse all
          countries, search by name, and view detailed information about each
          country, including its flag, capital, region, population, and a link
          to its location on Google Maps.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">
          Technologies & Concepts Practiced
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>Next.js App Router</li>
          <li>File-based Routing</li>
          <li>Nested and Dynamic Routes</li>
          <li>Layouts and Metadata</li>
          <li>Server Components</li>
          <li>Client Components</li>
          <li>Data Fetching with fetch()</li>
          <li>API Authentication using Environment Variables</li>
          <li>Data Caching and Revalidation</li>
          <li>Passing Data from Server Components to Client Components</li>
          <li>Search with React useState</li>
          <li>Reusable Components</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-50 p-4 text-blue-900">
          <p>
            🌍 This project demonstrates how to build a modern web application
            using Next.js by combining server-side rendering, client-side
            interactivity, API integration, and reusable React components.
          </p>
        </div>
      </div>
    </main>
  );
}