function select(id){
    console.log(id);
    document.getElementById("main-container").toggleAttribute("shrink");
    document.getElementById("full-name").toggleAttribute("shrink");
    setTimeout(()=>{
        window.location.href = "/"+id;
    },500);
}