import { useContext } from "react";
import SelectionContext, { countries, categories } from "../slectionContext";
const Selector = () => {
  const selectionContext = useContext(SelectionContext);
  const [_country, setCountry] = selectionContext.country;
  const [_category, setCategory] = selectionContext.category;
  return (
    <div>
      <form
        className="flex text-2xl gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setCountry(formData.get("countries"));
          setCategory(formData.get("categories"));
        }}
      >
        <div className="border border-gray-300 p-1">
          <label htmlFor="countries" className="pt-1 pr-2">
            Country
          </label>
          <select
            name="countries"
            className="bg-white border-l border-gray-300 pl-2"
          >
            <option value="us">us</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="border border-gray-300 p-1">
          <label htmlFor="categories" className="pt-1 pr-2">
            Category
          </label>
          <select
            name="categories"
            className="bg-white border-l border-gray-300 pl-2"
          >
            <option value="technology">technology</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="border border-gray-300 p-1 px-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default Selector;
