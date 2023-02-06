const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneResults = [
  "If we wait until we're ready, we'll be waiting for the rest of our lives.",
  "What good are wings, without the courage to fly.",
  "Patience is your ally at the moment. Don’t worry!",
  "Endurance and persistance will be rewarded.",
  "There is a connection between the artist being patient and the art being good.",
  "The reason to finish is to start something new.",
  "The best way to serve the audience is to ignore them.",
  "Be wary of preconceived ideas. Start completely open to possibilities.",
  "If you're distracted you might not recognize the idea when it appears.",
  "Make the best thing for you and then share it.",
  "Take a first step and see where it leads. The direction isn't important yet.",
]
let sortedIndex

screen1.querySelector("img").addEventListener("click", handleImageClick)
screen2.querySelector("button").addEventListener("click", handleButtonClick)

function handleImageClick() {
  toggleScreens()
  sortedIndex = Math.round(Math.random() * 10)
  screen2.querySelector("h2").innerText = fortuneResults[sortedIndex]
}

function handleButtonClick() {
  toggleScreens()
}

function toggleScreens() {
  if (screen2.classList.contains("hide")) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide") 
  } else {
    screen2.classList.add("hide")
    screen1.classList.remove("hide") 
  }
}