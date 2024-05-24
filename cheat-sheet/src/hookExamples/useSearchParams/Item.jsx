import { useParams } from "react-router-dom";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Grapes" },
];

function Item() {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Item ID: {item.id}</p>
    </div>
  );
}

export default Item;
