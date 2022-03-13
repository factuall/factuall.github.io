let pageContainer = document.getElementById("page-container");
var grid, normalScroll = false;
let currentPage = "";

function contentHide(down){
    for (let place = 0; place < document.getElementById("page-grid").children.length; place++) {
        const page = document.getElementById("page-grid").children[place];
        if(normalScroll){ //adjust slide out animation for size of the article
            var textNode = null;
            let exitHeight = document.getElementsByClassName("page-grid-article-cell").length != 0 ?
                document.getElementsByClassName("page-grid-article-cell")[0].getBoundingClientRect().height+100 :
                (document.getElementsByClassName("page-grid-cell").length + 1)*document.getElementsByClassName("page-grid-cell")[document.getElementsByClassName("page-grid-cell").length-1].getBoundingClientRect().height;
            let keyFrames = '@keyframes cell-slide-out-article {'+
            'from {top: 0}'+
            'to {top: '+exitHeight+'px}}';
            textNode = document.createTextNode(keyFrames);
            document.getElementsByTagName("style")[0].appendChild(textNode);
        }

        page.style.animation = normalScroll ? "cell-slide-out-article forwards 0.7s" : down ? "cell-slide-out forwards 0.7s" : "cell-slide-out-up forwards 0.7s";
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
    normalScroll = document.getElementsByClassName("page-grid-article-cell").length > 0 || window.innerWidth < window.innerHeight;
    scroll = 0;
    grid.style.right = scroll + "px";
    grid.style.top = scroll + "px";
    for (let place = 0; place < document.getElementById("page-grid").children.length; place++) {
        const page = document.getElementById("page-grid").children[place];
        if(window.innerWidth < window.innerHeight) {
            page.style.top = "120vh";
            page.style.animation = "cell-slide-in-article forwards 0.7s";
        }
        page.style.animationDelay = place / 15 + "s"; 
    }
    updateScroll();
}


let scroll = 0;
document.addEventListener("wheel", function (e) {
    if(scroll > 0 && e.deltaY < 0) scroll-=80;
    let last = document.getElementById("page-grid").children[document.getElementById("page-grid").children.length-1];
    if(e.deltaY > 0 && (last.getClientRects()[0].x + last.getClientRects()[0].width) > window.innerWidth) scroll+=80;
    updateScroll();
}, );
window.addEventListener('resize', (e) =>{
    normalScroll = document.getElementsByClassName("page-grid-article-cell").length > 0 || window.innerWidth < window.innerHeight;
    updateScroll();
});

function updateScroll(){
    if(!normalScroll){
        if(scroll < 0) scroll = 0;
        grid.style.right = scroll + "px";
        grid.style.top = 5 + "vh";
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "visible";
        grid.style.top = 4.8 + "vh";
        grid.style.right = 0 + "vh";
    }
}

function hashHandler() {
    if(currentPage != window.location.hash) contentChange();
}
  
window.addEventListener('hashchange', hashHandler, false);