document.addEventListener("DOMContentLoaded", () => {
  let count = document.querySelector(".countdown");
  let joker = document.querySelector(".jack-hiding");
  let button = document.querySelector("#jackbutton");

  button.addEventListener("click", event => {
    function something(athing) {
      athing.classList = "jack";
    }

    setTimeout(() => {
      something(joker);
    }, 5000);

    let arr = ["POP!!!!", 1, 2, 3, 4];

    function countDown() {
      count.innerHTML = arr.pop();
    }

    let timer = setInterval(() => {
      if (arr.length) {
        countDown();
      } else {
        clearInterval(timer);
      }
    }, 1000);
  });
});
