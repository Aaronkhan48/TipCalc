document.querySelector('#tip-form').onchange = function(){
    var bill = Number(document.getElementById('billTotal').value);
    var tip = document.getElementById('tipInput').value;
    document.getElementById('tipOutput').innerHTML = `${tip}%`;
    var tipValue = bill * (tip/100)
    var finalBill = bill + tipValue

    console.log(finalBill)
    var tipAmount = document.querySelector('#tipAmount')
    var totalBillWithTip = document.querySelector('#totalBillWithTip')
    tipAmount.value = tipValue.toFixed(2);
    totalBillWithTip.value =finalBill.toFixed(2);

    var tipAmount2 = document.querySelector('#tipAmount')
    var totalBillWithTip2 = document.querySelector('#totalBillWithTip')
    tipAmount2.value = tipValue.toFixed(2);
    totalBillWithTip2.value =finalBill.toFixed(2);



    //Currency Dollar
    var revert = document.getElementById('revert');
    revert.addEventListener("click", function(){
      if(document.getElementById("current").selectedIndex='0'){ //Dollar
        document.getElementById('billTotal').value = (bill);
        tipAmount.value = (tipValue).toFixed(2);
        totalBillWithTip.value =(finalBill).toFixed(2);
        document.getElementById('revert').style.display='none';
        document.getElementById('submit').style.display='block';
      } 
    })

    //Currency Euro
    var submit = document.getElementById('submit');
    submit.addEventListener("click", function(){
      if(document.getElementById("current").selectedIndex='1'){ //Euro
        document.getElementById('revert').style.display='block';
        document.getElementById('submit').style.display='none';
        document.getElementById('billTotal').value = (bill *.91).toFixed(2);
        tipAmount2.value = (tipValue *.91).toFixed(2);
        totalBillWithTip2.value =(finalBill *.91).toFixed(2);
      } 
    })

    
  
   //Show Results
    document.getElementById('results').style.display='flex';
  }

  var reset = document.getElementById('reset');
    //Clear Results
    reset.onclick = function(){
        document.getElementById('results').style.display='none';
        document.getElementById('tipOutput').innerHTML = `${0}%`;
    }

function myFunction(){
  document.getElementById('tog').style.display='none';
  document.getElementById('tog2').style.display='block';
  document.getElementById('getit').style.backgroundColor='#121212';
  document.getElementById('plus').style.backgroundColor='#121212';
  document.getElementById('dm3').style.backgroundColor='white';
  document.getElementById('getit').style.color='white';
  document.getElementById('plus').style.color='white';
  document.documentElement.style.setProperty('--black', '#fff');
}

    
function myFunction2(){
  document.getElementById('tog2').style.display='none';
  document.getElementById('tog').style.display='block';
  document.getElementById('getit').style.backgroundColor='white';
  document.getElementById('plus').style.backgroundColor='white';
  document.getElementById('dm3').style.backgroundColor='black';
  document.getElementById('getit').style.color='black';
  document.getElementById('plus').style.color='black';
  document.documentElement.style.setProperty('--black', '#000000');
}


function myFunction3(){
  document.getElementById('oop').style.display='none';
  document.getElementById('getit').style.display='block';
  document.getElementById('getit').style.display='block';
}

  
    








