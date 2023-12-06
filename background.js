const GOOGLE_CACHE_URL = "https://webcache.googleusercontent.com/search?q=cache:";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "get-web-cache") {
        const URL = sender.url;
        fetch(
            GOOGLE_CACHE_URL + URL + "&vwsrc=1"
        ).then((response) => {
            return response.text();
        }).then((text) => {
            sendResponse(text);
        });
    }
    return true;
});