import Image from "next/image";
import { getCountryByCode } from "@/app/lib/api";

// Generate a unique title and description for each country page.
export async function generateMetadata({ params }) {
  const { code } = await params;

  try {
    const country = await getCountryByCode(code.toUpperCase());

    return {
      title: `${country.names.common} | World Explorer`,
      description: `Explore information about ${country.names.common}.`,
    };
  } catch {
    return {
      title: "Country Not Found | World Explorer",
    };
  }
}

export default async function CountryDetailsPage({ params }) {
  // Await params in Next.js 15
  const { code } = await params;

  let country = null;

  try {
    country = await getCountryByCode(code.toUpperCase());
  } catch (error) {
    console.error(error);
  }

  if (!country) {
    return <p>Country not found.</p>;
  }
const flag = country.flag?.url_svg || country.flag?.url_png;

return (
  <main className="mx-auto max-w-5xl p-8">
    <div className="overflow-hidden rounded-xl border bg-white shadow-md">
      {flag && (
        <Image
          src={flag}
          alt={`${country.names.common} flag`}
          width={1000}
          height={600}
          className="h-80 w-full object-cover"
        />
      )}

      <div className="p-8">
        <h1 className="mb-2 text-4xl font-bold">
          {country.names.common}
        </h1>

        <p className="mb-4 text-lg text-gray-500">
          {country.names.official}
        </p>

        <p className="mb-2 text-lg text-gray-500">
        <b>Government Type:</b>{country.government_type}
        </p>

        

        <div className="grid gap-4 sm:grid-cols-2">
        <p>
         <span className="font-semibold">Region:</span>{" "}
            {country.region}
          </p>
            
          <p>
            <span className="font-semibold">Subregion:</span>{" "}
            {country.subregion || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {country.capitals?.map((c) => c.name).join(", ") || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population?.toLocaleString() || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Area:</span>{" "}
            {country.area.kilometers?.toLocaleString() || "N/A"} km²
          </p>

          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {country.languages?.map((l) => l.name).join(", ") || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Currencies:</span>{" "}
            {country.currencies?.map((c) => c.name).join(", ") || "N/A"}
          </p>

          <p>
            <span className="font-semibold">Time Zones:</span>{" "}
            {country.timezones?.join(", ") || "N/A"}
          </p>
        </div>
        <a
            href={country.links?.google_maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition duration-200 hover:bg-blue-700 hover:shadow-md"
        >
            📍 View on Google Maps
        </a>
            
      </div>
    </div>
  </main>
);
}