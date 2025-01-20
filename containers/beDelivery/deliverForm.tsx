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
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const router = useRouter();

  // Fetch countries on component mount
  useEffect(() => {
    setLoading(true);
    fetch("/api/countries") // Replace with actual API endpoint
      .then((res) => res.json())
      .then((data: Country[]) => {
        setCountries(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError("Failed to fetch countries. Please try again.");
      });
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    if (selectedCountry) {
      setLoading(true);
      fetch(`/api/states?country=${selectedCountry}`)
        .then((res) => res.json())
        .then((data: State[]) => {
          setStates(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError("Failed to fetch states. Please try again.");
        });
    }
  }, [selectedCountry]);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (selectedState) {
      setLoading(true);
      fetch(`/api/cities?state=${selectedState}`)
        .then((res) => res.json())
        .then((data: City[]) => {
          setCities(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError("Failed to fetch cities. Please try again.");
        });
    }
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

  return (
    <section className="deliver-form">
      <h1>Create Your Profile</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {/* Country Dropdown */}
      <select
        className="form-control"
        onChange={(e) => setSelectedCountry(e.target.value)}
        value={selectedCountry}
        disabled={loading}
      >
        <option value="">Select A Country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <br />

      {/* State Dropdown */}
      <select
        className="form-control"
        onChange={(e) => setSelectedState(e.target.value)}
        value={selectedState}
        disabled={!states.length || loading}
      >
        <option value="">Select A State</option>
        {states.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>
      <br />

      {/* City Dropdown */}
      {cities.length > 0 && (
        <select className="form-control" disabled={loading}>
          <option value="">Select A City</option>
          {cities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>
      )}
      {!cities.length && selectedState && !loading && (
        <p>No cities available for the selected state.</p>
      )}
      <br />

      <button
        className="sub-mit"
        onClick={handleNextStep}
        disabled={loading || !selectedCountry || !selectedState}
      >
        Next
      </button>
    </section>
  );
};

export default DeliverForm;
