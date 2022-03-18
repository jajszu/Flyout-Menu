function slide(a)
{
    a.parentNode.parentNode.classList.toggle("active");
    a.children[0].classList.toggle("X0");
    a.children[1].classList.toggle("X1");
    a.children[2].classList.toggle("X2");
    a.classList.toggle("active-X");
    
}