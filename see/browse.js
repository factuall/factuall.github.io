let pageContainer = document.getElementById("page-container");
var grid;
let currentPage = "";

function contentHide(down){
    for (let place = 0; place < document.getElementById("page-grid").children.length; place++) {
        const page = document.getElementById("page-grid").children[place];
        page.style.animation = down ? "cell-slide-out forwards 0.7s" : "cell-slide-out-up forwards 0.7s";
    }
}

function navInput(id){
    console.log(id);
    if(id != "#home") {
        window.location.href = "/see/#"+id
        currentPage = window.location.hash;
        contentChange();
    } else {
        contentHide(false);
        setTimeout(()=>{
            window.location.href = "/"+id;
        },550);
    }
    
}

function openLive(live){
    contentHide(false);
    setTimeout(()=>{
        window.location.href = "/live/" + live;
    },550);
}

if(window.location.hash == "") {
    window.location.href = "/see/#about";
    currentPage = window.location.hash;
}

function contentChange(){
    if(grid != null){
        contentHide(true);
        setTimeout(()=>{
            pageContainer.setAttribute("content-from", "/see/pages/" + window.location.hash.substring(1) + ".html");
            displayPage();
        }, 500);
    }else{
        pageContainer.setAttribute("content-from", "/see/pages/" + window.location.hash.substring(1) + ".html");
        displayPage();
    }

}
contentChange();


function displayPage() {
    let file, xhttp;
    file = pageContainer.getAttribute("content-from");
    if (file) {
        pageContainer.innerHTML = "";
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    pageContainer.innerHTML = this.responseText;
                    setUpPages(pageContainer);
                }
                if (this.status == 404) {pageContainer.innerHTML = "Page not found.";}
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        
        return;
    }
}

function setUpPages(pageContainer){
    grid = document.getElementById("page-grid");
    scroll = document.getElementById("page-grid").children.length[0].getBoundingClientRect().x - 10;
    grid.style.right = scroll + "px";
    grid.style.top = scroll + "px";
    for (let place = 0; place < document.getElementById("page-grid").children.length.length; place++) {
        const page = document.getElementById("page-grid").children.length[place];
        page.style.animationDelay = place / 10 + "s"; 
    }
}


let scroll = 0;
document.addEventListener("wheel", function (e) {
    if(scroll > 0 && e.deltaY < 0) scroll-=80;
    let asd = document.getElementById("page-grid").children[document.getElementById("page-grid").children.length-1];
    console.log(asd.getClientRects()[0].x + asd.getClientRects()[0].width);
    if(e.deltaY > 0 && (asd.getClientRects()[0].x + asd.getClientRects()[0].width) > window.innerWidth) scroll+=80;
    if(scroll < 0) scroll = 0;
    if(window.innerWidth > window.innerHeight){
        grid.style.right = scroll + "px";
        grid.style.top = 0 + "px";
    }else{
        grid.style.right = 0 + "px";
        grid.style.top = 0-(scroll*1.61) + "px";
    }
}, );
window.addEventListener('resize', (e) =>{
    if(window.innerWidth > window.innerHeight){
        grid.style.right = scroll + "px";
        grid.style.top = 0 + "px";
    }else{
        grid.style.right = 0 + "px";
        grid.style.top = 0-(scroll*1.61) + "px";
    }
});

function hashHandler() {
    if(currentPage != window.location.hash) contentChange();
}
  
window.addEventListener('hashchange', hashHandler, false);