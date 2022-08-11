document.addEventListener("DOMContentLoaded", () => {
    /**
     * Paginate
     */

    const previous = document.querySelector(".top");
    const next = document.querySelector(".bottom");
    const days = document.querySelectorAll(".day");

    let dayIndex = 0;

    previous.addEventListener("click", () => {
        if (dayIndex !== 0) {
            dayIndex = dayIndex - 1;

            if (dayIndex === 0) {
                previous.classList.add("disabled");
            } else {
                next.classList.remove("disabled");
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
            } else {
                previous.classList.remove("disabled");
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

    /**
     * Event popup
     */

    const events = document.querySelectorAll(".event-item");
    const popups = document.querySelectorAll(".popup");

    events.forEach((item) => {
        item.addEventListener("click", () => {
            const itemId = item.id;
        
            popups.forEach((popup) => {
                const popupId = popup.querySelector(".popup-id").innerHTML;

                if (popupId === itemId) {
                    popup.style.display = "flex";
                };
            });
        });
    });

    popups.forEach((popup) => {
        popup.querySelector(".close").addEventListener("click", () => {
            popup.style.display = "none";
        });
    });
});