import React, { useState } from "react";
import Door from "./door";
import { Results } from "./Results";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export default function Game() {
  const doors = [0, 1, 2];

  const [firstRound, setFirstRound] = useState(true);
  const [selectedDoor, setSelectedDoor] = useState(5);
  const [winningDoor, setWinningDoor] = useState(getRandomInt(3));
  const [openDoors, setOpenDoors] = React.useState<number[] | []>([]);
  const [gameOver, setGameOver] = useState(false);
  const [stayPoints, setStayPoints] = useState(0);
  const [switchPoints, setSwitchPoints] = useState(0);
  const [userWins, setUserWins] = useState(false);

  const randomLoosingDoor = (winningDoor: number): number => {
    const losingDoors = doors.filter((door) => door !== winningDoor);
    return losingDoors[getRandomInt(losingDoors.length)];
  };

  const remainingLoosingDoor = (selectedDoor: number): number => {
    return doors.filter(
      (door) => door !== selectedDoor && door !== winningDoor
    )[0];
  };

  const userStaysOnWinningDoor = (doorIndex: number): boolean =>
    doorIndex === selectedDoor && doorIndex === winningDoor;
  const userSwitchedToWinningDoor = (doorIndex: number): boolean =>
    doorIndex !== selectedDoor && doorIndex === winningDoor;
  const resetGame = (): void => {
    setSelectedDoor(9);
    setOpenDoors([]);
    setWinningDoor(getRandomInt(3));
    setFirstRound(true);
    setUserWins(false);
    setGameOver(false);
  };
  const handleDoorClick = (doorIndex: number): void => {
    // First Round
    setSelectedDoor(doorIndex);
    if (firstRound && !gameOver) {
      setFirstRound(true);
      if (doorIndex === winningDoor) {
        setOpenDoors([...openDoors, randomLoosingDoor(winningDoor)]);
      } else {
        setOpenDoors([...openDoors, remainingLoosingDoor(doorIndex)]);
      }
      setFirstRound(false);
      // Second Round
    } else if (!firstRound && !gameOver) {
      setOpenDoors([...doors]);
      if (userStaysOnWinningDoor(doorIndex)) {
        setStayPoints(stayPoints + 1);
        setUserWins(true);
      } else if (userSwitchedToWinningDoor(doorIndex)) {
        setSwitchPoints(switchPoints + 1);
        setUserWins(true);
      }
      setGameOver(true);
    } else {
      // Third click resets game
      resetGame();
    }
  };

  return (
    <>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full min-w-48 lg:max-w-4xl md:grid-cols-4 gap-4">
        {doors.map((door, index) => (
          <Door
            key={index}
            onClick={() => handleDoorClick(index)}
            selected={selectedDoor === index}
            open={!!openDoors.filter((openDoor) => openDoor === index).length}
            winning={winningDoor === index}
            firstRound={firstRound}
          />
        ))}
        <Results
          switchPoints={switchPoints}
          stayPoints={stayPoints}
          userWins={userWins}
          gameOver={gameOver}
        ></Results>
      </div>
      <button onClick={resetGame} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 text-center me-2 mb-2">New game</button>

    </>
  );
}
