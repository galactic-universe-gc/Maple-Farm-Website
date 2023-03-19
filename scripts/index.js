const isMobile = navigator.userAgentData.mobile;

if (isMobile == true) {
    container = document.getElementById("container");
    container.style.fontSize = "60px";
} else {
    container = document.getElementById("container");
    container.style.fontSize = "100px";
}