
    function swapTheme() {
        let app = document.getElementById("app");
        let button = document.getElementById("swap");

        if (app.classList.contains("day")) {
            // Switch to night theme
            app.classList.remove("day");
            app.classList.add("night");
            button.classList.remove("button_day");
            button.classList.add("button_night");
        } else {
            // Switch to day theme
            app.classList.remove("night");
            app.classList.add("day");
            button.classList.remove("button_night");
            button.classList.add("button_day");
        }
    }