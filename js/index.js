document.addEventListener("DOMContentLoaded", () => {
    const previous = document.querySelector(".top");
    const next = document.querySelector(".bottom");

    let dayIndex = 0;

    previous.addEventListener("click", () => {
        if (dayIndex !== 0) {
            dayIndex = dayIndex - 1;
            console.log(dayIndex);
        };
    });

    next.addEventListener("click", () => {
        if (dayIndex !== 4) {
            dayIndex = dayIndex + 1;
            console.log(dayIndex);
        };
    });
});