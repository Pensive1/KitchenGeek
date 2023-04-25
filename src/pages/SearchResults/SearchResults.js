import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  searchRecipesByName,
  complexSearch,
  searchRecipesByIngredients,
} from "../../utils/recipeCalls-paid.mjs";
import RecipeList from "../../components/RecipeList/RecipeList.js";
import SearchBar from "../../components/SearchBar/Searchbar.js";
import "./SearchResults.scss";

const SearchResults = () => {
  const { searchQuery } = useParams("/:searchQuery");
  const searchParams = window.location.search;
  const ingredients = searchParams.includes("?ingredients")
    ? searchParams.slice(13)
    : null;
  const [searchResults, setSearchResults] = useState(null);

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
      <div className="results__wrapper">
        <SearchBar />
        {ingredients ? (
          <RecipeList recipes={searchResults} />
        ) : (
          <RecipeList recipes={searchResults.results} />
        )}
      </div>
    </>
  );
};

export default SearchResults;
