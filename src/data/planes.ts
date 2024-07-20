import data from "../../public/data/card_data.json";

const planes = data.filter(({ type }) => type === "Plane") as Card[];
const phenomenons = data.filter(({ type }) => type === "Phenomenon") as Card[];
const sets: string[] = [...new Set(data.map(({ set }) => set))];

type Card = {
  id: string;
  name: string;
  slug: string;
  oracle_text: string;
  chaos_text: string;
  set: string;
  set_name: string;
  type: string;
};

type Deck = Array<Card>;

enum ImageSize {
  SMALL,
  NORMAL,
  LARGE,
  ART_CROP,
}

function getCardBySlug(slug: string): Card | undefined {
  return data.find((card) => card.slug === slug) as Card | undefined;
}

function getImagePath(card: Card, size: ImageSize): string {
  const join_paths = ({ slug }: Card, size: string) => {
    const base_path = ["..", "public", "images"].join("/");
    return [base_path, size, slug].join("/") + ".jpg";
  };

  switch (size) {
    case ImageSize.SMALL:
      return join_paths(card, "small");
    case ImageSize.NORMAL:
      return join_paths(card, "normal");
    case ImageSize.LARGE:
      return join_paths(card, "large");
    case ImageSize.ART_CROP:
      return join_paths(card, "art_crop");
  }
}

export type { Card, Deck };

export { planes, phenomenons, sets, getCardBySlug, getImagePath, ImageSize };
