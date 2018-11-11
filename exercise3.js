document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector(".daform");
  // let val = document.querySelector(".values");
  let sub = document.querySelector("#submit");
  let result = document.querySelector("#result");
  let lepic = document.querySelector(".hiding");
  let answer = 0;
  form.addEventListener("change", event => {
    answer += +event.target.value;
  });
  function changea(aclass) {
    aclass.classList = "corn";
  }
  function changeb(aclass) {
    aclass.classList = "lettuce";
  }
  function changec(aclass) {
    aclass.classList = "tomato";
  }
  sub.addEventListener("click", event => {
    result.innerHTML = answer;
    if (answer <= -2) {
      result.innerHTML = `<h1>You're a tomato \n
                          Congratz
                          on wasting your time with this quiz </h1>  `;
      changec(lepic);
    } else if (answer === 1 || answer === -1 || answer === 0) {
      result.innerHTML = `<h1>You got secret option CORN \n
                          You should feel proud....but dont.\n
                          cause you still wasted time doing this quiz :) </h1>`;
      changea(lepic);
    } else if (answer >= 2) {
      result.innerHTML = `<h1>Looks like you're a lettuce\n
                          You are green, like shrek,\n
                          You have also wasted at least a 30 seconds of your life.. \n
                          hahahaha</h1>`;
      changeb(lepic);
    }
  });
});
