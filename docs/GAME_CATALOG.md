# NES Game Catalog

The emulator repository separates **game metadata** from emulator implementation. The catalog is intended for legal ROM inventories, homebrew projects, test ROMs, and compatibility tracking.

## Files

- `src/catalog/categories.json` — category definitions.
- `src/catalog/games.json` — game metadata records.
- `src/catalog/GameCatalog.ts` — typed loader, validation, filtering, and search.

## Categories

| ID | Category |
|---|---|
| action | Action |
| adventure | Adventure |
| arcade | Arcade |
| platformer | Platformer |
| rpg | Role-Playing |
| strategy | Strategy |
| puzzle | Puzzle |
| sports | Sports |
| racing | Racing |
| shooter | Shooter |
| simulation | Simulation |
| education | Education |
| homebrew | Homebrew / Utility |

## Game record

```json
{
  "id": "example-homebrew",
  "title": "Example Homebrew",
  "category": "homebrew",
  "mapper": 0,
  "region": "NTSC",
  "notes": "Original test ROM"
}
```

The catalog stores metadata only; it does not bundle commercial ROM images.
