import { getCountries } from "@/app/lib/api";
import CountryCard from "@/components/CountryCard";

export default async function CountriesPage() {
  const countries = await getCountries();

  return (
    <main className="mx-auto max-w-7xl p-8">
      <h1 className="mb-8 text-center text-5xl font-bold">
        Explore Countries
      </h1>

      <p className="mb-10 text-center text-gray-600">
        {countries.length} countries found
      </p>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country) => (
          <CountryCard
            key={country.codes.alpha_3}
            country={country}
          />
        ))}
      </section>
    </main>
  );
}