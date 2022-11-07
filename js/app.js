// Dynamic Date for Copywrite Section
const date = new Date()
const year = date.getFullYear()

const showYear = document.getElementById('date')
showYear.innerHTML = year


const hambar = document.getElementById('hambar')
const responsive_navbar = document.getElementById('response_nav')

const cross_nav = document.getElementById('cross_nav')


hambar.addEventListener('click', () => {
    responsive_navbar.style.left = '0'
    responsive_navbar.style.transition = 'all .5s'
})


cross_nav.addEventListener('click', () => {
    responsive_navbar.style.left = '-100%'
    responsive_navbar.style.transition = 'all .5s'
})

const see_more_section_text = document.getElementById('see_more_section_text')
const see_more_drop_section = document.querySelector('.see_more_drop_section')

see_more_section_text.addEventListener('click', (e) => {
    see_more_drop_section.classList.toggle('active')

    e.preventDefault()
})
