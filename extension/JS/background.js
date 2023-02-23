async function check_network() {
    try {
        const online_check = await fetch('https://jsonplaceholder.typicode.com/posts/');
        
        return online_check.status >= 200 && online_check.status < 300;
    } catch (err) {
        return false;
    }
};

if (document.location.pathname === "/_generated_background_page.html") {
    setInterval(async () => {
        const response = await check_network();
    
        if (response === false) {
            chrome.browserAction.setIcon({path:"./assets/img/connection_status_disconnected.svg"});
            chrome.browserAction.setTitle({title:"No Internet"});
        } else {
            chrome.browserAction.setIcon({path:"./assets/img/connection_status_connected.svg"});
        };
    }, 15000);
};