import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Grapes" },
];

function ItemList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    setSearchParams({ query: event.target.value });
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Item List</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
