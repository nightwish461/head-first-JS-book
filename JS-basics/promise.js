// Using Promise

//Async JS - Promises
// https://github.com/cfchou/icecream/blob/master/icecream.json
const iceCreams = [
  {
    name: "Caramel Chocolate Cheesecake",
    summary:
      "In your cheesecake dreams, is it like you’re spooning through a world of caramel cheesecake ice cream.",
  },
  {
    name: "Chocolate Shake",
    summary:
      "Chocolate Malt Milkshake Ice Cream with Chocolate Cookie-Covered Fudge Truffles & Marshmallow Swirls.",
  },
];

function getIceCreams() {
  setTimeout(() => {
    let output = "";
    iceCreams.forEach(
      (iceCream) =>
        (output += `<li>${iceCream.name}</li><p>${iceCream.summary}</p>`)
    );
    document.getElementById("promiseTest").innerHTML = output;
  }, 1000);
}

function createIceCreames(iceCream) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      iceCreams.push(iceCream);
      const num = 6;
      num > 4 ? resolve() : reject("Error: Something is wrong");
    }, 2000);
  });
}

createIceCreames({
  name: "Banana Split",
  summary:
    "Banana & Strawberry Ice Creams with Walnuts, Fudge Chunks & a Fudge Swirl.",
})
  .then(getIceCreams)
  .catch((err) => (document.body.innerHTML = `${err}`));
