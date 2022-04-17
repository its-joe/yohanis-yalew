tog.addEventListener('click',()=>{
    const visibility = tabs.getAttribute("data-visible");

    console.log(visibility);
    if (visibility==="false"){
        tabs.setAttribute("data-visible",true);
        tog.setAttribute("aria-expanded",true);
    }
    else{
        tabs.setAttribute("data-visible",false);
        tog.setAttribute("aria-expanded",false);
    }
});