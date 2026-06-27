const API_URL = "https://api.restcountries.com/countries/v5";

const headers = {
  Authorization: `Bearer ${process.env.API_KEY}`,
};

function checkResponse(response, responseName) {
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${responseName}. Status: ${response.status}`,
    );
  }

  return response;
}

// Fetch all countries (limit results)
export async function getCountries(limit = 20) {
  const res = await fetch(`${API_URL}`, {
    headers,
    cache: "force-cache",
  });

  const payload = await checkResponse(res, "countries").json();

  const countries = payload.data?.objects ?? [];

//   console.log("Countries:", countries);

  return countries.slice(0, limit);
}
// Fetch countries by region
export async function getCountriesByRegion(region) {
  const res = await fetch(`${API_URL}/region/${region}`, {
    headers,
    next: {
      revalidate: 60,
    },
  });

  const payload = await checkResponse(res, `region ${region}`).json();

  const countries = payload.data?.objects ?? [];

  console.log(`${region} countries:`, countries);

  return countries;
}

// Fetch a country by alpha-2 or alpha-3 code
export async function getCountryByCode(code) {
 const normalizedCode = String(code).toUpperCase();
  const res = await fetch(`${API_URL}/codes.alpha_3/${normalizedCode}`, {
    headers,
    next: {
      revalidate: 120,
    },
  });

  if (res.status === 404) {
    return null;
  }

  const payload = await checkResponse(res, `country ${code}`).json();

  const country = payload.data?.objects?.[0] ?? null;

  console.log("Country:", country);

  return country;
}

// Always fetch fresh data
export async function getFreshCountries(limit = 20) {
  const res = await fetch(`${API_URL}/all`, {
    headers,
    cache: "no-store",
  });

  const payload = await checkResponse(res, "fresh countries").json();

  const countries = payload.data?.objects ?? [];

  console.log("Fresh countries:", countries);

  return countries.slice(0, limit);
}
