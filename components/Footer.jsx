import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-slate-800 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        <p>
          © {new Date().getFullYear()} World Explorer
        </p>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/countries" className="hover:text-white">
            Countries
          </Link>

          <Link href="/search" className="hover:text-white">
            Search
          </Link>

          <Link href="/about" className="hover:text-white">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}