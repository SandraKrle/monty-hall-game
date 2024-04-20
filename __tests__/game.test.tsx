import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Game from "../app/game";
import React from "react";

describe("Game", () => {
  afterEach(() => {
    cleanup();
  });

  test("It renders three closed doors", () => {
    render(<Game />);
    const doors = screen.getAllByRole("button", { name: "Open door" });
    expect(doors.length).toBe(3);
  });

  test("New game btn closes all open doors", () => {
    render(<Game />);

    const doors = screen.getAllByRole("button", { name: "Open door" });
    fireEvent.click(doors[1]);
    
    const stayDoor = screen.getByRole("button", { name: "Stay" });
    const switchDoor = screen.getByRole("button", { name: "Switch" });

    expect(stayDoor).toBeDefined();
    expect(switchDoor).toBeDefined();

    const newGameBtn = screen.getByText("New game");
    fireEvent.click(newGameBtn);
    
    expect(screen.getAllByRole("button", { name: "Open door" }).length).toBe(3);
  });
});
