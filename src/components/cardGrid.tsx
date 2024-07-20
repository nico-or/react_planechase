import { Card } from "../data/planes.ts";
import PlaneCard from "../components/planeCard.tsx";

interface prop {
  cards: Card[];
}

function CardGrid({ cards }: prop) {
  return (
    <details>
      <summary>{cards[0].set_name}</summary>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: Array(5).fill("1fr").join(" "),
        }}
      >
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <PlaneCard card={card} />
            </div>
          );
        })}
      </div>
    </details>
  );
}

export default CardGrid;
