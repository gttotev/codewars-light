var link = document.createElement("link");
link.href = chrome.extension.getURL("src/light.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);
