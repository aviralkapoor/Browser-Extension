document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('button').addEventListener('click',onclick,false)
    
    function onclick(){
        let p=document.getElementsByClassName('content');
        p[0].style.display="none";
        let q=document.getElementsByClassName('working');
        q[0].style.display="block";
        chrome.tabs.query({currentWindow:true,active:true},
            (tabs)=>{
                chrome.tabs.sendMessage(tabs[0].id,'Working...');
            })
    }

},false)