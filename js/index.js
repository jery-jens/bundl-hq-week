document.addEventListener("DOMContentLoaded", () => {
    const previous = document.querySelector(".top");
    const next = document.querySelector(".bottom");
    const days = document.querySelectorAll(".day");

    let dayIndex = 0;

    previous.addEventListener("click", () => {
        if (dayIndex !== 0) {
            dayIndex = dayIndex - 1;

            if (dayIndex === 0) {
                previous.classList.add("disabled");
                console.log("hide previous");
            } else {
                previous.classList.remove("disabled");
                console.log("show previous");
            };

            for (let i = 0; i < days.length; i++) {
                if (dayIndex === i) {
                    days[i].classList.remove("hidden");
                } else {
                    days[i].classList.add("hidden");
                };
            };
        };
    });

    next.addEventListener("click", () => {
        if (dayIndex !== 4) {
            dayIndex = dayIndex + 1;

            if (dayIndex === 4) {
                next.classList.add("disabled");
            };
            
            for (let i = 0; i < days.length; i++) {
                if (dayIndex === i) {
                    days[i].classList.remove("hidden");
                } else {
                    days[i].classList.add("hidden");
                };
            };
        };
    });
});