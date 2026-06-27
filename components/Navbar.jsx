import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          🌍 World Explorer
        </Link>

        <div className="flex gap-6 text-lg">
          <Link
            href="/countries"
            className="transition hover:text-blue-200"
          >
            Countries
          </Link>

          <Link
            href="/search"
            className="transition hover:text-blue-200"
          >
            Search
          </Link>

          <Link
            href="/about"
            className="transition hover:text-blue-200"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}