import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
const { default: onDelete } = require("../components/onDelete");

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
it("return new array without elemet", () => {
  const select = ["1", "3", "5", "10"];
  act(() => {
    render(onDelete(1, select), container);
  });
  expect(container.textContent).toBe(["1", "5", "10"]);

  act(() => {
    render(onDelete(2, select), container);
  });
  expect(container.textContent).toBe(["1", "3", "10"]);

  //   act(() => {
  //     render(<toggleColor name="Margaret" />, container);
  //   });
  //   expect(container.textContent).toBe("Hello, Margaret!");
});
