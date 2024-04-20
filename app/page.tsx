"use client";

import Header from "./header";
import Game from "./game";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 p-10">
      <Header />
      <Game />
    </main>
  );
}
