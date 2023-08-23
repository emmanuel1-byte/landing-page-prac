const navButton = document.querySelector('.hamburger');
const openClose = ()=>{
    const navbar = document.getElementById('nav');
    if(navbar.className==="navbar"){
        navbar.className="navbarresponsive";

    }else{
        navbar.className="navbar";
    }
}


   
navButton.addEventListener("click", openClose );

   
