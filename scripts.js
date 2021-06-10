chrome.runtime.onMessage.addListener((req)=>{
    const task=document.getElementsByClassName("submitter");

       for(let i=0;i<task.length;i++){
           caller(i,task);
       }
       //setTimeout(()=>{atmp(task[6])},2000);
       //alert(task.length);
})
function caller(i,task){
    setTimeout(()=>{atmp(task[i])},5000*i);
}
function atmp(men){
    men.click();
    console.log(men);
    let attempts=document.getElementsByClassName("attempt-switch");
    let name= men.querySelector(".profile .submitter-avatar .ml-2").innerText;
    setTimeout(()=>{attempts[0].click()},500);
    setTimeout(()=>{rev(name)},1000);
}



function rev(name){
    let review=document.getElementsByClassName("score-chip score-chip--excellent");
    //console.log(review[0]);
    //console.log(review_num);
    //review_num=review_num+1;
    //console.log(review[0].hasAttribute("onclick"));
    review[0].click();
    console.log("Excellent, I am clicked!");
    setTimeout(()=>{hats_off(name)},500);
}

function hats_off(name)
{
    let rev1=document.getElementsByTagName('textarea');
    if(rev1[0]!==undefined)
    {
    rev1[0].focus();
    rev1[0].value="Hey, "+ name +"! Something I really appreciate about you is your way of problem-solving. In the case of complex codes, write them in a clean manner for better understanding.";
    //rev1[0].setAttribute("minlength","0");
    //rev1[0].setAttribute("placeholder","Hey, "+ name +"! Something I really appreciate about you is your way of problem-solving. In the case of complex codes, write them in a clean manner for better understanding.");
    console.log(rev1[0].value);
    rev1[0].focus();
    //console.log(rev1[0].value.length);
    console.log("Great!");
    //xyz.click();
    setTimeout(()=>{sub()},2000);
    }
    else
    {
    console.log("Already reviewed!");
    sleep(1000);
    }
}

function sub(){
    let sub=document.getElementsByClassName("app-btn--theme");
    console.log(sub[0]);
    sub[0].click(console.log("POST, I am clicked!"));

    //sub[0].setAttribute('color','blue');
    let close=document.getElementsByClassName("close-button");
    //setTimeout(()=>{sub[0].click(console.log("POST, I am clicked 2nd time."));},1000);
    
    if(close[0]!==undefined)
    {
    setTimeout(()=>{close[0].click();},300);
    }
    else
    {
        console.log('Error in submitting');
        sleep(300);
    }
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}