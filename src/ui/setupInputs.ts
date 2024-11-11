import type { State } from "../state";
import { Axis } from "../types";

const getInputLabel = (axis: Axis, value: number): string => `${axis}: ${value}`;

function createInput(min: number, max: number, defaultValue: number, modifier: number = 1): HTMLInputElement {
  const input = document.createElement('input');
  input.type = 'range';
  input.min = (min * modifier).toString();
  input.max = (max * modifier).toString();
  input.value = (defaultValue * modifier).toString();

  return input;
}

function createInputContainer(axis: Axis, defaultValue: number = 0, oninput?: (value: number) => void): HTMLDivElement {
  const inputContainer = document.createElement('div');
  inputContainer.className = "input-container";

  const inputLabel = document.createElement('span');
  inputLabel.innerHTML = getInputLabel(axis, defaultValue);

  const inputModifier = 100;
  const input = createInput(0, Math.PI * 2, defaultValue, inputModifier);
  input.addEventListener('input', (e: any) => {
    const value = parseInt(e.target.value) / inputModifier;
    inputLabel.innerHTML = getInputLabel(axis, value);
    oninput?.(value);
  });

  inputContainer.appendChild(inputLabel);
  inputContainer.appendChild(input);

  return inputContainer;
}

function setupInputs(container: HTMLDivElement, state: State) {
  for (const axis of ['x', 'y', 'z'] as const) {
    const input = createInputContainer(axis, state.angles[axis], (v) => state.setAngle(axis, v));
    container.appendChild(input);
  }
}

export { setupInputs };
