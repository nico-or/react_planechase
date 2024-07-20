import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function GameModeCard({ children }: Props) {
  return <article>{children}</article>;
}

export default GameModeCard;
