 let bar = document.querySelector('.menu-bar');
 let links = document.querySelector('.list-of-links');
 console.log(links)
 

 bar.addEventListener('click', () => {
    links.classList.toggle('show')
 })
 