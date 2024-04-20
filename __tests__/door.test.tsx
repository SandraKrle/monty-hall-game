import { afterEach, expect, test, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Door from "../app/door";
import { describe } from "node:test";

describe("Door", () => {
  afterEach(() => {
    cleanup();
  });

  test("Door can be clicked", () => {
    const handleClick = vi.fn();
    render(
      <Door
        onClick={handleClick}
        selected={false}
        open={false}
        winning={true}
        firstRound={true}
      />
    );
    const door = screen.getByRole("button", { name: "Open door" });

    expect(door).toBeDefined();

    fireEvent.click(door);

    expect(handleClick).toHaveBeenCalled();
  });
});
