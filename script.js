const toggleMenu=()=>{
    const menu= document.querySelector(".menu-links");
    const iconDir = document.querySelector(".three-line-icon");
    menu.classList.toggle("open")
    iconDir.classList.toggle("open")

    var profileSection = document.getElementById("profile");
    var menuIcon = document.querySelector(".three-line-menu");

    if (profileSection.style.marginTop === "150px") {
        profileSection.style.transition = "margin-top 0.3s ease"; // Adding transition
        profileSection.style.marginTop = "0";
    } else {
        profileSection.style.transition = "margin-top 0.3s ease"; // Adding transition
        profileSection.style.marginTop = "150px";
    }
}
