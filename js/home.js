function navInput(id){
    if(document.getElementById("full-name").style.animation == "0s ease 0s 1 normal none running none" || document.getElementById("full-name").style.animation == ""){
        document.getElementById("main-container").toggleAttribute("shrink");
        document.getElementById("full-name").toggleAttribute("shrink");
        document.getElementById("socials").style.opacity = "0%";
        setTimeout(()=>{
            window.location.href = "/see/#"+id;
        },500);
    }
}

//handling going back or pressing home button
const reloadAnimation = () => {
    if(document.getElementById("main-container").hasAttribute("shrink")){
        document.getElementById("main-container").toggleAttribute("shrink");
        document.getElementById("full-name").toggleAttribute("shrink");
    }else if(window.location.hash == "#home"){
        document.body.removeAttribute("style"); //no fade in
        document.body.style.backgroundColor = "#181818";
        document.getElementById("full-name").style.animation = "name-unslide 0.5s forwards"; //slide back
        document.getElementById("navigation-bar").style.animation = "none"; //no fade in
        document.getElementById("navigation-bar").style.opacity = "100%";
        setTimeout(()=>{
            document.getElementById("full-name").removeAttribute("style"); //dont block fade out 
            document.getElementById("full-name").style.animation = "none"; //still no fade in
        },500);
    }
    document.getElementById("socials").style.opacity = "100%";

};
window.addEventListener('pageshow', reloadAnimation);