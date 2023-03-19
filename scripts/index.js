container = document.getElementById("container");
container.style.fontSize = "100px";

const isMobile = navigator.userAgentData.mobile;

if (isMobile == True) {
    alert("Mobile Device")
} else {
    alert("Not Mobile Device")
}