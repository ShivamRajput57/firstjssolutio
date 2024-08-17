const billamount=document.getElementById("bill-input");
const peopleinput=document.querySelector(".people-input");
const outputtip=document.getElementById("tip-amount");

const outputbill=document.getElementById("total-amount");
const tips=document.querySelectorAll(".tips");

const customtip=document.getElementById("cust")

const resetbutton=document.getElementById("resets")
console.log(resetbutton)
billamount.addEventListener("input",billinputfun);
peopleinput.addEventListener("input",peopleinputfun);
customtip.addEventListener("input",customfun);
resetbutton.addEventListener('click',resetfun);
tips.forEach(function(val){
    val.addEventListener('click',handelclick);
})

let billvalue=0.0;
let peoplevalue=1;
let tipvalue=0.15;

billamount.value="0.0";
peopleinput.value="1";
outputtip.innerHTML="$"+0.00
outputbill.innerText="$"+0.00

function customfun(){
    tipvalue=customtip.value/100
    calculatetip()
}

function resetfun(){
    billvalue=0.0;
    peoplevalue=1;
    tipvalue=0.15;

    billamount.value="0.0";
    peopleinput.value="1";
    outputtip.innerHTML="$"+0.0
    outputbill.innerText="$"+0.00
    customtip.innerText='CUSTOME'

}

function billinputfun(){
    billvalue=parseFloat(billamount.value);
    calculatetip();
   

    
}

function peopleinputfun(){
    peoplevalue=parseFloat(peopleinput.value);
    calculatetip();

    
}

function handelclick(event){
    tips.forEach(function(val){
        val.classList.remove("active-tip");
        if (event.target.innerHTML==val.innerHTML){
            val.classList.add("active-tip");
            tipvalue=parseFloat(val.innerHTML) / 100;
        }
        calculatetip()

    });
    

}

function calculatetip(){
    if (peoplevalue>=1){
        let tipamount=(billvalue*tipvalue)/peoplevalue
        let total=(billvalue+tipamount)/peoplevalue
        outputtip.textContent="$"+tipamount;
        outputbill.textContent="$"+total;
    }
}



