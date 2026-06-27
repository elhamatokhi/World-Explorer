import Link from "next/link";
import { getFreshCountries } from "./lib/api";
import CountryCard from "@/components/CountryCard";

export default async function Home() {
  const countries = await getFreshCountries(8);
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

        <br></br>
        <section>
          <h2 className="mb-6 text-3xl font-semibold">
            Freshly Fetched Countries
          </h2>

          <p className="mt-4 rounded-lg bg-blue-50 p-4 text-blue-800">
            <code>cache: "no-store"</code>
          </p>
          <br></br>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((country) => (
              <CountryCard key={country.codes.alpha_3} country={country} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
