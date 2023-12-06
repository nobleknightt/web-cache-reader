let isMemberOnlyStory = false;

const pTags = document.getElementsByTagName("p");

for (const p of pTags) {
    if (p.textContent.trim() == "Member-only story") {
        isMemberOnlyStory = true;
        break;
    }
}

if (isMemberOnlyStory) {
    chrome.runtime.sendMessage("get-web-cache", (response) => {
        const parser = new DOMParser();
        const _document = parser.parseFromString(response, "text/html");
        const _html = _document.getElementsByTagName("pre")[0].textContent
        document.getElementsByTagName("html")[0].innerHTML = _html;
    });
}
