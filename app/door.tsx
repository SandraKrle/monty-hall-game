import Image from "next/image";
import goat from "./goat.svg";
import price from "./price.svg";
import { KeyboardEvent } from "react";

type Props = {
  onClick: () => void;
  selected: boolean;
  open: boolean;
  winning: boolean;
  firstRound: boolean;
};

export default function Door({
  selected,
  open,
  winning,
  firstRound,
  onClick,
}: Props) {
  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    // Keypresses other then Enter and Space should not trigger a command
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    } else {
      onClick();
    }
  };

  let className =
    "door flex items-center justify-center border-solid border-2 border-black hover:border-slate-400 rounded-lg focus:ring-1 focus:outline-none focus:ring-pink-800";

  if (selected) {
    className += " selected";
  }

  if (open) {
    className += winning ? " open winning" : " open losing pointer-events-none";
  }

  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={(e) => handleKeyPress(e)}
      role="button"
      aria-disabled={open}
      tabIndex={open ? -1 : 0}
    >
      {!open && !selected && firstRound && (
        <span className="text-xl">Open door</span>
      )}
      {!open && selected && <span className="text-xl">Stay</span>}
      {!open && !selected && !firstRound && (
        <span className="text-xl">Switch</span>
      )}
      <div className="h-full flex items-center justify-center rotate-y-180">
        {open && !winning && (
          <Image src={goat} alt="Goat head" width={150} height={150}></Image>
        )}
        {open && winning && (
          <Image src={price} alt="Dollar bill" width={150} height={150}></Image>
        )}
      </div>
    </div>
  );
}
