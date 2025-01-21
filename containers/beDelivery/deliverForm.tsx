import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Country {
  code: string;
  name: string;
}

interface State {
  code: string;
  name: string;
}

interface City {
  code: string;
  name: string;
}

const DeliverForm: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("/api/countries");
        const data: Country[] = await res.json();
        setCountries(data);
      } catch (err: any) {
        setError("Failed to fetch countries.");
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (!selectedCountry) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/states?country=${selectedCountry}`);
        const data: State[] = await res.json();
        setStates(data);
      } catch (err: any) {
        setError("Failed to fetch states.");
      } finally {
        setLoading(false);
      }
    };
    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedState) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/cities?state=${selectedState}`);
        const data: City[] = await res.json();
        setCities(data);
      } catch (err: any) {
        setError("Failed to fetch cities.");
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, [selectedState]);

  const handleNextStep = () => {
    if (!selectedCountry || !selectedState || !selectedCity) {
      alert("Please select a country, state, and city to proceed.");
      return;
    }
    router.push({
      pathname: "/deliverForm2",
      query: { country: selectedCountry, state: selectedState, city: selectedCity },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <section className="deliver-form">
      <h1>Create Your Profile</h1>

      <select onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry}>
        <option value="">Select A Country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <br />

      <select onChange={(e) => setSelectedState(e.target.value)} value={selectedState} disabled={!selectedCountry}>
        <option value="">Select A State</option>
        {states.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>
      <br />

      {cities.length > 0 && (
        <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
          <option value="">Select A City</option>
          {cities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>
      )}
      <br />

      <button onClick={handleNextStep} disabled={!selectedCountry || !selectedState || !selectedCity}>
        Next
      </button>
    </section>
  );
};

export default DeliverForm;
