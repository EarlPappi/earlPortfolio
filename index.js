const navs = document.querySelectorAll('#navi');

navs.forEach(function (nav) {
    nav.addEventListener('click', function (e) {
        // e.preventDefault()
    })
})

const workCard = document.querySelectorAll('#work-card');
const workLink = document.querySelectorAll('#work-link');

console.log(workLink);



workCard.forEach(function (card) {
    card.addEventListener('mouseover', function (e) {
          e.target.children[1].style.display = 'flex'
    });

    card.addEventListener('mouseleave', function(e){
        e.target.children[1].style.display = 'none'
    });

});