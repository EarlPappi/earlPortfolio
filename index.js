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
        workLink.forEach(function (link) {
            if (link.style.display == 'none') {
                link.style.display = 'block'
            } else {
                link.style.display = 'none';    
            }
        }
        );

        //         if(workLink.getElementsByClassName.display == 'none'){
        //             workLink.getElementsByClassName.display == 'block'
        // 
        //             console.log(workLink)
        //         }
    });
});
