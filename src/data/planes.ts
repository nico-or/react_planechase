import { planes } from "./planes_data";

type Card = {
  id: string;
  name: string;
  slug: string;
  oracle_text: string;
  set: string;
  set_name: string;
};

type Deck = Array<Card>;

enum ImageSize {
  SMALL,
  NORMAL,
  LARGE,
  ART_CROP,
}

function getPlanes(): Deck {
  return planes;
}

function getPlaneFromSlug(slug: string): Card | undefined {
  return planes.find((card) => card.slug === slug);
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

function getPlaneBySlug(slug: string): Card | undefined {
  return planes.find((card) => card.slug === slug);
}

export type { Card, Deck };

export { planes } from "./planes_data";

export { getPlanes, getPlaneFromSlug, getImagePath, getPlaneBySlug, ImageSize };
