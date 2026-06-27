import Image from "next/image";
import Link from "next/link";

export default function CountryCard({ country }) {
  const flag = country.flag?.url_svg || country.flag?.url_png;

  return (
    <Link href={`/countries/${country.codes.alpha_3}`}>
      <article className="overflow-hidden rounded-lg border shadow-sm transition hover:shadow-lg">
        {flag && (
          <Image
            src={flag}
            alt={`${country.names.common} flag`}
            width={500}
            height={320}
            className="h-52 w-full object-cover"
          />
        )}

        <div className="p-4">
          <h2 className="text-xl font-bold">
            {country.names.common}
          </h2>

          <p className="mt-2">
            <strong>Region:</strong> {country.region}
          </p>

          <p>
            <strong>Capital:</strong>{" "}
            {country.capitals?.[0]?.name || "N/A"}
          </p>
        </div>
      </article>
    </Link>
  );
}