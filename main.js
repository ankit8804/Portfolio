$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
$('header').toggleClass('toggle');    
    });

    $('window').on('scroll load',function(){
        $('#menu').removelass('fa-times');
        $('header').removeClass('toggle');
    });
    //smooth scrolling
    $('a[href*="#"]').on('click',function(e){
     e.preventDefault();
     $('html, body').animate({
scrollTop : $($(this).attr('href')).offset().top
     },
     500,
     'linear'
     );
    });
});
const rbtn = document.getElementById('resume');
rbtn.addEventListener("click", () => {
    window.open(
     "My Resume.pdf"
    );
  });

const allBtn = document.querySelectorAll(".back");
const menuBtn = document.querySelector('.menuBtn');
const headerBtn = document.querySelector('.headerBtn');
allBtn.forEach(e => {
    e.addEventListener('click', ()=>{
        headerBtn.classList.toggle('toggle');    
        menuBtn.classList.toggle('fa-times');
    })
})
