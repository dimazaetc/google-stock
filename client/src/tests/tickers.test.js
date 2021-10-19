// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// const { default: toggleColor } = require("../components/toggleColor");

// let container = null;
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });
// it("if the first value is more then second value add className 'green_color", () => {
//   <div className="tickers_box">
//     <div className="tikers_wrapper "></div>
//     <div className="tikers_wrapper "></div>
//     <div className="tikers_wrapper "></div>
//     <div className="tikers_wrapper "></div>
//   </div>;

//   let b = document.querySelectorAll(".tickers_box > .tikers_wrapper");
//   const a = ["222", "222", "222", "222"];
//   const c = ["223", "223", "232", "232"];
//   act(() => {
//     render(toggleColor(a, b, c), container);
//   });
//   expect(container.textContent).toBe(
//     <div className="tickers_box">
//       <div className="tikers_wrapper green_color"></div>
//       <div className="tikers_wrapper green_color"></div>
//       <div className="tikers_wrapper green_color"></div>
//       <div className="tikers_wrapper green_color"></div>
//     </div>
//   );

//   act(() => {
//     render(toggleColor(c, b, a), container);
//   });
//   expect(container.textContent).toBe(
//     <div className="tickers_box">
//       <div className="tikers_wrapper red_color"></div>
//       <div className="tikers_wrapper red_color"></div>
//       <div className="tikers_wrapper red_color"></div>
//       <div className="tikers_wrapper red_color"></div>
//     </div>
//   );

//   //   act(() => {
//   //     render(<toggleColor name="Margaret" />, container);
//   //   });
//   //   expect(container.textContent).toBe("Hello, Margaret!");
// });
