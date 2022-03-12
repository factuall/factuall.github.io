let pageContainer = document.getElementById("page-container");

function contentHide(down){
    for (let place = 0; place < document.getElementById("page-grid").children.length; place++) {
        const page = document.getElementById("page-grid").children[place];
        page.style.animation = down ? "cell-slide-out forwards 0.7s" : "cell-slide-out-up forwards 0.7s";
    }
}

function navInput(id){
    if(id != "#home") {
        setTimeout(()=>{
            window.location.href = "/see/#"+id;
        },550);
    } else {
        setTimeout(()=>{
            window.location.href = "/"+id;
        },550);
    }
    var all = document.getElementsByTagName("*");
    var afterNavBar = false;
    for (var i=0, max=all.length; i < max; i++) {
        if(all[i].id == "nav-end") afterNavBar = true;
        if(afterNavBar){
            all[i].style.transition = "all 0.5s";
            all[i].style.opacity = "0%";
        }
    }
}