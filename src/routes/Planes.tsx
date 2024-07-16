import { Deck, getPlanes } from "../data/planes.ts";
import { Link, useLoaderData } from "react-router-dom";

function planesLoader(): Deck {
  return getPlanes();
}

function Planes() {
  const planes = useLoaderData() as Deck;

  return (
    <ul>
      {planes.map((card) => {
        return (
          <li key={card.id}>
            <Link to={card.slug}>{card.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Planes;

export { planesLoader, Planes };
