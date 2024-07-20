import { Link } from "react-router-dom";
import { Card, getImagePath, ImageSize } from "../data/planes";

interface props {
  card: Card;
}

function PlaneCard({ card }: props) {
  const { name, slug, set_name } = card;
  return (
    <Link to={slug}>
      <article>
        <header>
          <b>{name}</b>
        </header>
        <img
          src={getImagePath(card, ImageSize.ART_CROP)}
          alt={name}
          loading="lazy"
        />
      </article>
    </Link>
  );
}

export default PlaneCard;
