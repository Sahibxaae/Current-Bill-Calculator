let amntBtn=document.querySelector('button');
amntBtn.addEventListener('click',displayAmnt);
function displayAmnt(){
    let unit=document.getElementById('input').value;
    if(NaN===unit.value){
        alert("Enter units");
    }
    let amount=0;
    if(unit<=50){
        amount=unit*0.75;
    }
    else if(unit>50 && unit<=150){
        amount=50*0.75+(unit-50)*1.00;
    }
    else if(unit>150 && unit<=250){
        amount=50*0.75+100*1.00+(unit-150)*1.30;
    }
    else if(unit>250){
        amount+=50*0.75+100*1.00+100*1.30+(unit-250)*1.50;
    }
    else{
         alert("Enter units");
    }
    document.getElementById("result").innerHTML=`Your bill is Rs &#x20B9 ${amount}`;
}
