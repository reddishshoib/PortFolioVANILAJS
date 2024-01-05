const toggleMenu=()=>{
    const menu= document.querySelector(".menu-links");
    const iconDir = document.querySelector(".three-line-icon");
    menu.classList.toggle("open")
    iconDir.classList.toggle("open")
}