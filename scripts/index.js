if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/SamsungBrowser/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    container = document.getElementById("container");
    container.style.fontSize = "75px";
} else {
    container = document.getElementById("container");
    container.style.fontSize = "100px";
}
