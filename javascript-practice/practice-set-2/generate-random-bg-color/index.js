const bodyTag = document.querySelector("body");

bodyTag.style.backgroundColor = "gray";
bodyTag.style.padding = "0.8rem";

function getRandomHexColor() {
  const hexCode = "0123456789ABCDEF";
  // hex code is of size 6 with # i.e #FFFFFF
  let color = "#";

  for (let i = 0; i <= 5; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    // console.log("randomIndex=", randomIndex);

    color += hexCode[randomIndex];
  }
  return color;
}

const startButton = document.querySelector("#start-btn");
const stopButton = document.querySelector("#stop-btn");

let timeInterval = null;

const changeTheBackgroundColor = () => {
  bodyTag.style.backgroundColor = getRandomHexColor();
};

const startChangingBackground = () => {
  if (!timeInterval) {
    timeInterval = setInterval(changeTheBackgroundColor, 1000);
    startButton.disabled = true;
  }
};
const stopChangingBackground = () => {
  clearInterval(timeInterval);
  bodyTag.style.backgroundColor = "gray";
  timeInterval = null;
  startButton.disabled = false;
};

startButton.addEventListener("click", startChangingBackground);
stopButton.addEventListener("click", stopChangingBackground);
