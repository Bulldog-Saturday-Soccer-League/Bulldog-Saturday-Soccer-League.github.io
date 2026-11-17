const registrationForm = document.querySelector("#registration-form");
const scheduleScroller = document.querySelector(".schedule-table-wrap");

if (scheduleScroller) {
    scheduleScroller.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
            return;
        }

        event.preventDefault();
        scheduleScroller.scrollLeft += event.key === "ArrowRight" ? 100 : -100;
    });
}

if (registrationForm) {
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registrationForm);
        const body = Array.from(formData.entries())
            .map(([label, value]) => `${label}: ${value}`)
            .join("\r\n");
        const subject = "Bulldog Saturday Soccer League Registration";

        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}