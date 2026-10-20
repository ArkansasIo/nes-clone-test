import "./style.css";
import { NES } from "./nes/NES.js";
import categories from "./catalog/categories.json";

const canvas = document.querySelector<HTMLCanvasElement>("#screen");
const status = document.querySelector<HTMLElement>("#status");
const categoryHost = document.querySelector<HTMLElement>("#categories");
const filter = document.querySelector<HTMLInputElement>("#filter");
if (!canvas || !status || !categoryHost || !filter) throw new Error("Required UI element missing.");

const nes = new NES(canvas);
nes.reset();
nes.renderDemoFrame();
status.textContent = "DEMO FRAME · CPU CORE INCOMPLETE";

function renderCategories(query = ""): void {
  const normalized = query.trim().toLowerCase();
  const matches = categories.categories.filter(item => item.name.toLowerCase().includes(normalized));
  categoryHost.replaceChildren();
  if (matches.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No matching categories.";
    categoryHost.append(empty);
    return;
  }
  for (const item of matches) {
    const card = document.createElement("article");
    card.className = "category";
    const title = document.createElement("strong");
    title.textContent = item.name;
    const detail = document.createElement("span");
    detail.textContent = item.description;
    card.append(title, detail);
    categoryHost.append(card);
  }
}
filter.addEventListener("input", () => renderCategories(filter.value));
renderCategories();
