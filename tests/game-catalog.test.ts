import { describe, expect, it } from "vitest";
import { GameCatalog } from "../src/catalog/GameCatalog.js";

describe("GameCatalog", () => {
  it("loads the NES category dataset", () => {
    const catalog = new GameCatalog();
    expect(catalog.all().length).toBeGreaterThan(20);
    expect(catalog.categories()).toContain("platformer");
  });

  it("filters games by category", () => {
    const catalog = new GameCatalog();
    expect(catalog.byCategory("puzzle").every((game) => game.category === "puzzle")).toBe(true);
  });

  it("searches game titles", () => {
    const catalog = new GameCatalog();
    expect(catalog.search("Mario").some((game) => game.title.includes("Mario"))).toBe(true);
  });
});
