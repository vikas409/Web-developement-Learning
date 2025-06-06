let count = 0;

    const countDisplay = document.getElementById("count");
    const incrementBtn = document.getElementById("incrementBtn");
    const decrementBtn = document.getElementById("decrementBtn");

    incrementBtn.addEventListener("click", () => {
      count++;
      countDisplay.textContent = count;
    });

    decrementBtn.addEventListener("click", () => {
      count--;
      countDisplay.textContent = count;
    });