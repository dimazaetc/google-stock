export default function toggleColor(a, b, c) {
  for (let i = 0; i < a.length; i++) {
    if (a[i].price > c[i].price) {
      b[i].classList.add("green_color");
      b[i].classList.remove("red_color");
    } else {
      b[i].classList.add("red_color");
      b[i].classList.remove("green_color");
    }
  }
}
