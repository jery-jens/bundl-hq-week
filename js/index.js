document.addEventListener("DOMContentLoaded", () => {
    const previous = document.querySelector(".top");
    const next = document.querySelector(".bottom");
    const days = document.querySelectorAll(".day");

    let dayIndex = 0;

    previous.addEventListener("click", () => {
        if (dayIndex !== 0) {
            dayIndex = dayIndex - 1;

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