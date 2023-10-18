import { Data } from '../types/index';

export default function SuggestionsDropdown({ suggestions }: { suggestions?: Data }) {
  if(!suggestions) return null;
  return (
    <>
      {!!(suggestions.drinks.length || suggestions.ingredients.length) && (
        <div className="bg-white text-neutral-500 mt-2 rounded-sm h-[300px] overflow-y-scroll">
          {suggestions.drinks.length !== 0 && (
            <>
              <div className="mb-2 border-b-2 p-2">DRINKS</div>
              {suggestions.drinks.map((drink, index) => (
                <div key={index} className="suggestion p-1">
                  {drink.name}
                </div>
              ))}
            </>
          )}
          {suggestions.ingredients.length !== 0 && (
            <>
              <div className="mb-2 border-b-2 p-2">INGREDIENTS</div>
              {suggestions.ingredients.map((ingredient, index) => (
                <div key={index} className="suggestion p-1">
                  {ingredient.name}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
}
