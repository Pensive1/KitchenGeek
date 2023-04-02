import { useParams } from "react-router-dom";
import { searchRecipesByName } from "../../utils/recipeCalls-paid.mjs";
import { useEffect, useState } from "react";
import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail.js";

const SearchResults = () => {
  const { searchQuery } = useParams("/:searchQuery");
  const [searchResults, setSearchResults] = useState(null);

  const getResults = async () => {
    const { results } = await searchRecipesByName(searchQuery);
    setSearchResults(results);
  };

  useEffect(() => {
    getResults();
  }, []);

  if (!searchResults) {
    return <p>Fetching results</p>;
  }

  if (searchResults.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <>
      <h1>Search Results</h1>
      {searchResults.map((recipe, index) => {
        return <RecipeThumbnail key={index} recipe={recipe} />;
      })}
    </>
  );
};

export default SearchResults;
