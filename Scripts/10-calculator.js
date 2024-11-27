let calculation = localStorage.getItem('calculation') || '';

    displayCalculation();

    function updateCalculation(num){
      
      calculation += num;
    // console.log(calculation);
    displayCalculation();
    localStorage.setItem('calculation', calculation);
    }

    function displayCalculation(){
      document.querySelector('.js-display-calculation').innerHTML = calculation;
    }
    