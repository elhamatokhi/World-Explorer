import { getCountries } from "@/app/lib/api";
import CountrySearch from "@/components/CountrySearch";

export const metadata = {
  title: "Search Countries | World Explorer",
  description: "Search countries by name.",
};

export default async function SearchPage() {
  const countries = await getCountries(25);

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Search Countries
      </h1>
      <CountrySearch countries={countries} />
    </main>
  );
}