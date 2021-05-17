// document.querySelector('.container').addEventListener('click', cardClick);

// function cardClick(e) {
//     const target = e.target;
    
//     if (target.classList.contains('card')) {

//         const children = target.parentElement.children;

//         console.log(children);
//         Array.from(children).forEach((child) => {
//             child.classList.remove('active');
//         })

//         console.log(target);
//         target.classList.add('active');
//     }
// }

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActiveClasses();
        card.classList.add('active');
    });
});

function removeActiveClasses() {
    cards.forEach((card) => {
        card.classList.remove('active');
    });
}
