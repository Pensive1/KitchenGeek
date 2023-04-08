import { useParams } from "react-router-dom";
import {
  searchRecipesByName,
  complexSearch,
  searchRecipesByIngredients,
} from "../../utils/recipeCalls-paid.mjs";
import { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList/RecipeList.js";

const SearchResults = () => {
  const { searchQuery } = useParams("/:searchQuery");
  const searchParams = window.location.search;
  const ingredients = searchParams.includes("?ingredients")
    ? searchParams.slice(13)
    : null;
  const [searchResults, setSearchResults] = useState(null);
  console.log(searchResults);

  const getResults = async () => {
    if (searchQuery) {
      const results = await searchRecipesByName(searchQuery);
      return setSearchResults(results);
    }

    if (searchParams.includes("?ingredients")) {
      const results = await searchRecipesByIngredients(ingredients);
      setSearchResults(results);
    } else if (searchParams !== "") {
      const results = await complexSearch(searchParams);
      setSearchResults(results);
    }
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

  if (searchResults === null) {
    return <p>Page not found</p>;
  }

  return (
    <>
      <h1>Search Results</h1>
      {ingredients ? (
        <RecipeList recipes={searchResults} />
      ) : (
        <RecipeList recipes={searchResults.results} />
      )}
    </>
  );
};

export default SearchResults;
