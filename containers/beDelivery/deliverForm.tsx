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
  const [loading, setLoading] = useState<boolean>(true); // Start loading as true
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("/api/countries");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Country[] = await res.json();
        setCountries(data);
      } catch (err: any) { // Type the error
        console.error("Error fetching countries:", err);
        setError("Failed to fetch countries. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
        if (!selectedCountry) return; // Exit early if no country selected
      try {
        setLoading(true); // Set loading before fetch
        const res = await fetch(`/api/states?country=${selectedCountry}`);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        const data: State[] = await res.json();
        setStates(data);
      } catch (err: any) {
        console.error("Error fetching states:", err);
        setError("Failed to fetch states. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
        const fetchCities = async () => {
            if (!selectedState) return;
          try {
            setLoading(true);
            const res = await fetch(`/api/cities?state=${selectedState}`);
              if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
              }
            const data: City[] = await res.json();
            setCities(data);
          } catch (err: any) {
            console.error("Error fetching cities:", err);
            setError("Failed to fetch cities. Please try again.");
          } finally {
            setLoading(false);
          }
        };
    fetchCities();
  }, [selectedState]);

  const handleNextStep = () => {
    if (!selectedCountry || !selectedState) {
      alert("Please select both a country and a state to proceed.");
      return;
    }
    router.push({
      pathname: "/deliverForm2",
      query: { country: selectedCountry, state: selectedState },
    });
  };

  if (loading) {
    return <p>Loading...</p>; //Simplified loading view, handles initial load
  }

  if (error) {
    return <p className="error-message">{error}</p>; //Simplified error view
  }


  return (
    <section className="deliver-form">
      <h1>Create Your Profile</h1>

      <select
        className="form-control"
        onChange={(e) => setSelectedCountry(e.target.value)}
        value={selectedCountry}
      >
        <option value="">Select A Country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <br />

      <select
        className="form-control"
        onChange={(e) => setSelectedState(e.target.value)}
        value={selectedState}
        disabled={!selectedCountry} // Disable if no country is selected
      >
        <option value="">Select A State</option>
        {states.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>
      <br />

      {cities.length > 0 && (
        <select className="form-control">
          <option value="">Select A City</option>
          {cities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>
      )}
      {!cities.length && selectedState && (
        <p>No cities available for the selected state.</p>
      )}
      <br />

      <button
        className="sub-mit"
        onClick={handleNextStep}
        disabled={!selectedCountry || !selectedState}
      >
        Next
      </button>
    </section>
  );
};

export default DeliverForm;
