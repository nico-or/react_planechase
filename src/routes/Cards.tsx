import { Card, planes, phenomenons, sets } from "../data/planes.ts";
import { useLoaderData } from "react-router-dom";
import CardGrid from "../components/cardGrid.tsx";

interface props {
  title: string;
}
interface loadData {
  sets: string[];
  cards: Card[];
}

function planesLoader(): loadData {
  return { sets, cards: planes };
}

function phenomenonLoader(): loadData {
  return { sets, cards: phenomenons };
}

function Cards({ title }: props) {
  const { sets, cards } = useLoaderData() as loadData;

  // groups by set. removes empty arrays
  const data: Card[][] = sets
    .map((set) => cards.filter((card) => card.set === set))
    .filter((cards) => cards.length != 0);

  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        {data.map((cards) => {
          return <CardGrid cards={cards} />;
        })}
      </main>
    </>
  );
}

export default Cards;

export { planesLoader, phenomenonLoader };
