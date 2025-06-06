let count = parseInt(localStorage.getItem("count"))|| 0;

    const countDisplay = document.getElementById("count");
    const incrementBtn = document.getElementById("incrementBtn");
    const decrementBtn = document.getElementById("decrementBtn");
    const resetBtn = document.getElementById("resetBtn");
    function updateDisplay(){
      countDisplay.textContent = count;
      localStorage.setItem("count" , count);
    }

    incrementBtn.addEventListener("click", () => {

      
        count++;
        countDisplay.textContent = count;
      
      
    });

    decrementBtn.addEventListener("click", () => {
      if (count>0){
        count--;
        countDisplay.textContent = count;
      }
      
      
    });
    resetBtn.addEventListener("click", () =>{
      count=0;
      updateDisplay();
    })  
updateDisplay();