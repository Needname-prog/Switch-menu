document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    let input = "";

    function press(key) {
        input += key;
        display.value = input;
    }

    function clearDisplay() {
        input = "";
        display.value = "";
    }

    function calculate() {
        try {
            if (input === "6*7") {
                display.value = "42 - La réponse à tout !";
                return;
            }

            if (input === "1987") {
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                return;
            }

            if (input.includes("/0")) {
                document.body.innerHTML = "<h1 style='color: white; background: grey; text-align: center; padding: 50px;'>💀 Erreur fatale : division par zéro détectée. Redémarrage en cours...</h1>";
                setTimeout(() => location.reload(), 3000);
                return;
            }

            if (input === "66.6") {
                document.body.style.background = "#200";
                document.body.style.color = "red";
                display.value = "Rejoins le côté obscur...";
                return;
            }

            if (input.toLowerCase() === "1234") {
                document.body.style.background = "black";
                display.value = "Bienvenue dans la Matrice...";
                matrixEffect();
                return;
            }

            // Calcul
            display.value = eval(input);
            input = display.value; 

        } catch (error) {
            display.value = "Erreur";
            input = "";
        }
    }

    function matrixEffect() {
        let matrix = document.createElement("div");
        matrix.style.position = "fixed";
        matrix.style.top = "0";
        matrix.style.left = "0";
        matrix.style.width = "100%";
        matrix.style.height = "100%";
        matrix.style.background = "black";
        matrix.style.color = "lime";
        matrix.style.fontSize = "20px";
        matrix.style.fontFamily = "monospace";
        matrix.style.overflow = "hidden";
        matrix.style.zIndex = "1000";
        document.body.appendChild(matrix);

        let columns = Math.floor(window.innerWidth / 20);
        let drops = [];
        for (let i = 0; i < columns; i++) drops[i] = 1;

        function drawMatrix() {
            matrix.innerHTML = "";
            for (let i = 0; i < columns; i++) {
                let text = document.createElement("span");
                text.innerHTML = Math.random() > 0.5 ? "1" : "0";
                text.style.position = "absolute";
                text.style.left = `${i * 20}px`;
                text.style.top = `${drops[i] * 20}px`;
                matrix.appendChild(text);

                if (drops[i] * 20 > window.innerHeight && Math.random() > 0.95) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(drawMatrix, 50);
    }

    window.press = press;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;
});
