 let msg = "Your net income will be dislayed here";

const taxFunc = () => {
   let grossIncome = (document.getElementById("income").value);
   let taxPerc;
   let netIncome;
   let deductionAmount;

   if(isNaN(grossIncome) || grossIncome < 0)
   {
     msg = `Sorry! ${grossIncome} is not valid number. Please enter number above 0  `;
    
   } else {
     if(grossIncome >= 150000)
     {
        netIncome = (grossIncome - (grossIncome * 0.45)).toFixed(2);
        deductionAmount = (grossIncome * 0.45).toFixed(2);
        taxPerc = "45%";
        msg = `Gross Income: £${grossIncome} <br> Tax Deduction: £${deductionAmount} (${taxPerc}) <br>Net Income: £${netIncome}` ;
     } else if (grossIncome >= 37500) 
      {
        netIncome = (grossIncome - (grossIncome * 0.4)).toFixed(2);
        deductionAmount = (grossIncome * 0.4).toFixed(2);
        taxPerc = "40%";
        msg = `Gross Income: £${grossIncome} <br> Tax Deduction: £${deductionAmount} (${taxPerc}) <br>Net Income: £${netIncome}` ;
      } else if (grossIncome > 0) 
        {
          netIncome = (grossIncome - (grossIncome * 0.2)).toFixed(2);
          deductionAmount = (grossIncome * 0.2).toFixed(2);
          taxPerc = "20%";
          msg = `Gross Income: £${grossIncome} <br> Tax Deduction: £${deductionAmount} (${taxPerc}) <br>Net Income: £${netIncome}` ;
        } 
   }
   
 
   
   document.getElementById("msgText").innerHTML = msg;
}


 