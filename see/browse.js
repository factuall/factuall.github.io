let pageContainer = document.getElementById("page-container");

function navInput(id){
    console.log(id);
    if(id == "#home") window.location.href = "/"+id;
    else window.location.href = "/see/#"+id;
    contentChange();
}

if(window.location.hash == "") window.location.href = "/see/#about";

function contentChange(){
    pageContainer.setAttribute("content-from", "/see/pages/" + window.location.hash.substring(1) + ".html");
    displayPage();
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
                if (this.status == 200) {pageContainer.innerHTML = this.responseText;}
                if (this.status == 404) {pageContainer.innerHTML = "Page not found.";}
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
    }
}

