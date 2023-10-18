"use client";
import { useState, ChangeEvent } from "react";
import useDebouncedFetch from './hooks/useDebouncedFetch';
import { Data } from './types/index';
import SuggestionsDropdown from './components/SuggestionsList';
import HomeWrapper from './components/HomeWrapper';

export default function Home() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Data>();
  const fetch = useDebouncedFetch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setQuery(input);
    fetch("/api?search=" + input,
      (data: Data) => setSuggestions(data));
  };
  return (
    <HomeWrapper>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500 text-neutral-500"
      />
      <SuggestionsDropdown suggestions={suggestions} />
    </HomeWrapper>
  );
}
