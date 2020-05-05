//for slidebar cative
function slidebaractive(){
    document.querySelector(".slidebarcontainer").classList.toggle("active");
}


//for preloader haha
let preloader=document.querySelector(".preloader")
function loading(){
    
    preloader.style.display="none";
    
}



//for navigation bar scroll transition haha
let nav = document.querySelector(".nav");
let home=document.querySelector(".home");
let selectoptions= {}; 

let selectobserver= new IntersectionObserver(function(entries,selectobserver){
    entries.forEach(entry => {
          
    if(entry.isIntersecting) {
        nav.id="nb";
    }else{
        
        nav.id="nbl";

    }
})


},selectoptions);

selectobserver.observe(home);




