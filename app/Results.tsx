type Props = {
  switchPoints: number;
  stayPoints: number;
  userWins: boolean;
  gameOver: boolean;
};

export function Results({
  switchPoints,
  stayPoints,
  userWins,
  gameOver,
}: Props) {
  return (
    <div className="flex flex-col justify-end items-end text-2xl leading-relaxed" aria-live='polite'>
      {userWins && gameOver && <p className="text-4xl font-bold text-orange-400">You win!</p>}
      {!userWins && gameOver && <p className="text-4xl font-bold text-pink-500">You loose!</p>}

      <p>Switch: {switchPoints}</p>
      <p>Stay: {stayPoints}</p>
      <div className="h-px w-full bg-stone-950"></div>
      <p>Total: {switchPoints + stayPoints}</p>
    </div>
  );
}
