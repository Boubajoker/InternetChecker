let internet_status_box_img = document.querySelector('#internet_status_box_img');
let internet_status_box = document.querySelector('#internet_status_box');
let relaod_btn = document.querySelector('#relaod_btn');
let settings_btn = document.querySelector('#settings_btn');
let loading_text_box = document.querySelector('#loading_text_box');
let loading_img_box = document.querySelector('#loading_img_box');
let advices_text = document.querySelector('#advices_text');
let checkbox = document.getElementById('checkbox');

if (document.location.protocol === 'chrome-extension:') {
    chrome.browserAction.setIcon({path:"./assets/icon/icon_64.png"});
    chrome.browserAction.setTitle({title:"Click here to open InternetChecker"});
    
    loading_text_box.innerText = "Loading, this might take a moment...";
    loading_img_box.innerHTML = "<img src=\"./assets/img/loading_img.svg\" class=\"loading-img\">";
    
    setInterval(async () => {
        const response = await check_network();
        
        console.log(response);
        if (response === false) {
            chrome.browserAction.setIcon({path:"./assets/img/connection_status_disconnected.svg"});
            chrome.browserAction.setTitle({title:"No Internet"});
            loading_text_box.innerText = "Loaded, it seems like you are disconnected from the internet !";
            loading_img_box.remove();
            internet_status_box.innerHTML = "<h2 class=\"no-internet-text\">Not Connected !</h2>";
            internet_status_box_img.innerHTML = "<img src=\"./assets/img/connection_status_disconnected.svg\">";
            advices_text.innerHTML = "<h2 class=\"advice-title\">Here are some advices you should take:</h2><ul><li class=\"advices\">Check your internet modem if it is off or if it is properly working.</li></ul><ul><li class=\"advices\">If everything looks good, shut it down then restart it a couple of seconds later.</li></ul><ul><li class=\"advices\">If it's still not working, call your internet provider.</li></ul>";
        } else {
            chrome.browserAction.setIcon({path:"./assets/img/connection_status_connected.svg"});
            loading_text_box.innerText = "Loaded !";
            loading_img_box.remove();
            internet_status_box.innerHTML = "<h2 class=\"internet-text\">Connected !</h2>";
            internet_status_box_img.innerHTML = "<img src=\"./assets/img/connection_status_connected.svg\">";
        };
    }, 3000);
} else {
    document.body.innerText = "Cannot Run Internet Checker directly on browser render.";
};

relaod_btn.addEventListener('click', ()=>{ document.location.reload(); });
settings_btn.addEventListener('click', ()=>{ window.location = "./settings.html"; });