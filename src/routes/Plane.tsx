import { redirect, useLoaderData } from "react-router-dom";
import {
  Card,
  getImagePath,
  getPlaneBySlug,
  ImageSize,
} from "../data/planes.ts";

function planeLoader({ params }: any): Card | Response {
  const card = getPlaneBySlug(params.slug);
  if (card === undefined) {
    return redirect("/not_found");
  } else return card;
}

function Plane() {
  const card = useLoaderData() as Card;

  return (
    <>
      <h2>{card.name}</h2>
      <p>{card.oracle_text}</p>
      <img src={getImagePath(card, ImageSize.SMALL)} alt={card.name} />
    </>
  );
}

export default Plane;
export { planeLoader };
