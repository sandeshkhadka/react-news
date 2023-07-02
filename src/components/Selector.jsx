import { useContext } from "react";
import SelectionContext, { countries, categories } from "../slectionContext";
const Selector = () => {
  const selectionContext = useContext(SelectionContext);
  const [_country, setCountry] = selectionContext.country;
  const [_category, setCategory] = selectionContext.category;
  return (
    <div>
      <form
        className="flex flex-col text-2xl"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setCountry(formData.get("countries"));
          setCategory(formData.get("categories"));
        }}
      >
        <label htmlFor="countries">
          Country:
          <select name="countries">
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="categories">
          Category:
          <select name="categories">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="border border-black px-1 py-1 text-xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default Selector;
