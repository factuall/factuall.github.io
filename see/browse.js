let pageContainer = document.getElementById("page-container");
var grid;

function contentHide(down){
    for (let place = 0; place < document.getElementsByClassName("page-grid-cell").length; place++) {
        const page = document.getElementsByClassName("page-grid-cell")[place];
        page.style.animation = down ? "cell-slide-out forwards 0.8s" : "cell-slide-out-up forwards 0.8s";
    }
}

function navInput(id){
    console.log(id);
    if(id != "#home") {
        window.location.href = "/see/#"+id
        contentChange();
    } else {
        contentHide(false);
        setTimeout(()=>{
            window.location.href = "/"+id;
        },450);
    }
    
}

if(window.location.hash == "") window.location.href = "/see/#about";

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
    scroll = pageContainer.getElementsByClassName("page-grid-cell")[0].getBoundingClientRect().x - 10;
    grid.style.right = scroll + "px";
    for (let place = 0; place < pageContainer.getElementsByClassName("page-grid-cell").length; place++) {
        const page = pageContainer.getElementsByClassName("page-grid-cell")[place];
        page.style.animationDelay = place / 10 + "s"; 
    }
}


let scroll = 0;
document.addEventListener("wheel", function (e) {
    if(scroll > 0 && e.deltaY < 0) scroll-=80;
    if(e.deltaY > 0) scroll+=80;
    grid.style.right = scroll + "px";
    if(scroll < 0) scroll = 0;
}, true);