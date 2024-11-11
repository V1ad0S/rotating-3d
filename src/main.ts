import { State } from "./state";
import { setupCanvas } from "./ui/setupCanvas";
import { setupInputs } from "./ui/setupInputs";

const state = new State(100);
const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const inputsContainer = document.getElementById("inputs") as HTMLDivElement;

setupCanvas(canvas, state);
setupInputs(inputsContainer, state);
