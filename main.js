const btn = document.querySelector(".btn");
const generatedAdvice = document.querySelector(".generatedAdvice");
const adviceId = document.getElementById("adviceId");
const adviceURL = "https://api.adviceslip.com/advice";

const generateAdvice = () => {
  // API for get requests
  let adviceRequest = fetch(adviceURL);
  // fetchRes is the promise to resolve
  // it by using.then() method
  adviceRequest
    .then((res) => res.json())
    .then((data) => {
      adviceId.innerHTML = `${data.slip.id}`;
      generatedAdvice.innerHTML = ` "${data.slip.advice}"`;
    });
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  generateAdvice();
});
