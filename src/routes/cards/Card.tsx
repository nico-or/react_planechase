import { redirect, useLoaderData } from "react-router-dom";
import {
  Card as CardType,
  getImagePath,
  getCardBySlug,
  ImageSize,
} from "../../data/planes.ts";

function cardLoader({ params }: any): CardType | Response {
  const card = getCardBySlug(params.slug);
  return card || redirect("/not_found");
}

function Card() {
  const card = useLoaderData() as CardType;
  console.log(card);

  return (
    <>
      <h2>{card.name}</h2>
      <p>{card.oracle_text}</p>
      <p>{card.chaos_text}</p>
      <img src={getImagePath(card, ImageSize.NORMAL)} alt={card.name} />
    </>
  );
}

export default Card;
export { cardLoader };
