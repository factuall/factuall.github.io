function navInput(id){
    console.log(id);
    if(id == "#home") window.location.href = "/"+id;
    else window.location.href = "/see/#"+id;
}

if(window.location.hash == "") window.location.href = "/see/#about";