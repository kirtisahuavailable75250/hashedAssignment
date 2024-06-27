        let timer;
        let milliseconds = 0;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let running = false;
        let continueBtn = document.getElementById("pause");

        function start() {
            if (!running) {
                running = true;
                document.getElementById("start").disabled = true;
                continueBtn.disabled = false;
                document.getElementById("stop").disabled = false;
                timer = setInterval(updateTime, 10);
            }
        }

        function pause() {
            if (running) {
                running = false;
                clearInterval(timer);
                continueBtn.textContent = "Continue";
            } else {
                running = true;
                timer = setInterval(updateTime, 10);
                continueBtn.textContent = "Pause";
            }
        }

        function stop() {
            running = false;
            clearInterval(timer);
            document.getElementById("start").disabled = false;
            continueBtn.disabled = true;
            document.getElementById("stop").disabled = true;
            continueBtn.textContent = "Pause";
            document.getElementById("time").textContent = "00:00:00";
            document.getElementById("milliseconds").textContent = ":000";
            milliseconds = 0;
            seconds = 0;
            minutes = 0;
            hours = 0;
        }

        function updateTime() {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            const formattedMilliseconds = `:${milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds}`;
            document.getElementById("time").textContent = formattedTime;
            document.getElementById("milliseconds").textContent = formattedMilliseconds;
        }