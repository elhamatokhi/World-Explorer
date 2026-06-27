import Link from "next/link";

export default function Home() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">

        <h1 className="text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl">
          Discover Our World
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          Explore countries around the globe and learn about their capitals,
          populations, currencies, languages, regions, and much more using
          real-time data.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/countries"
            className="rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-teal-800 hover:shadow-lg"
          >
            Explore Countries
          </Link>

          <Link
            href="/about"
            className="rounded-xl border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700 transition-all duration-300 hover:bg-stone-100"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}