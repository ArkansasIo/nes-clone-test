import categoryData from "./categories.json";
import gameData from "./games.json";

export interface GameEntry {
  id: string;
  title: string;
  category: string;
  mapper?: number;
  region?: "NTSC" | "PAL";
  notes?: string;
}

export class GameCatalog {
  private readonly games = new Map<string, GameEntry>();

  constructor(loadDefaults = true) {
    if (loadDefaults) for (const game of gameData.games) this.add(game);
  }

  add(game: GameEntry): void {
    if (!game.id.trim() || !game.title.trim()) throw new Error("Game id and title are required.");
    if (!categoryData.categories.some((c) => c.id === game.category)) throw new Error(`Unknown category: ${game.category}`);
    this.games.set(game.id, { ...game });
  }

  all(): GameEntry[] { return [...this.games.values()]; }
  categories(): string[] { return categoryData.categories.map((c) => c.id); }
  byCategory(category: string): GameEntry[] { return this.all().filter((g) => g.category === category); }
  search(query: string): GameEntry[] {
    const q = query.trim().toLocaleLowerCase();
    if (!q) return this.all();
    return this.all().filter((g) => g.title.toLocaleLowerCase().includes(q));
  }
}
