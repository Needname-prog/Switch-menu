document.addEventListener("DOMContentLoaded", () => {
    const shutdownButton = document.getElementById("shutdown");

    if (shutdownButton) {
        shutdownButton.addEventListener("click", () => {
            window.close();
        });
    }
});

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('time').innerHTML =
  ""+h + ":" + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
 
startTime();

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("click", (event) => {
            const rect = square.getBoundingClientRect();
            
            const backgroundImage = window.getComputedStyle(square).backgroundImage;

            square.classList.add("no-hover");

            const clone = square.cloneNode(true);
            clone.classList.add("game-launch");
            document.body.appendChild(clone);

            clone.style.backgroundImage = backgroundImage;
            clone.style.position = "absolute";
            clone.style.left = `${rect.left}px`;
            clone.style.top = `${rect.top}px`;
            clone.style.width = `${rect.width}px`;
            clone.style.height = `${rect.height}px`;

            setTimeout(() => {
                clone.classList.add("expand");
            }, 50);

            setTimeout(() => {
                document.body.classList.add("fade-to-black");
            }, 1000);

            setTimeout(() => {
                window.location.href = "html/calculette.html";
            }, 1800);
        });
    });
});

