console.log("this is js project");



function age(e){




    let date=document.getElementById('input-1');
let month=document.getElementById('input-2');
let year=document.getElementById('input-3');
    console.log("you clicked");

    let print=document.getElementById('print')

if(date.value<=30 && month.value<=12 && year.value>1900){
    let totalday=30-date.value;
    let totalmonth=12-month.value;
    let totalyear=2021-year.value;
    console.log(totalday);
    console.log(totalmonth);
    console.log(totalyear);

    print.innerHTML=" your age is  " + totalyear + " Year " ;

}
else{
    console.log("");
    print.innerText="plz enter valid value";
}

}