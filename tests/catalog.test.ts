import { describe, expect, it } from "vitest";
import { GameCatalog } from "../src/catalog/GameCatalog.js";

describe("GameCatalog", () => {
  it("accepts a valid game and filters by category", () => {
    const catalog = new GameCatalog();
    catalog.add({ id: "demo-1", title: "Demo Platformer", category: "platformer", mapper: 0 });
    expect(catalog.byCategory("platformer")).toHaveLength(1);
    expect(catalog.search("demo")[0]?.id).toBe("demo-1");
  });
  it("rejects unknown categories", () => {
    const catalog = new GameCatalog();
    expect(() => catalog.add({ id: "x", title: "Bad", category: "unknown" })).toThrow("Unknown category");
  });
});
