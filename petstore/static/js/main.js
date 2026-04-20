const initApp = () => {
    const btn = document.getElementById('hamburger-btn')
    const menu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
    }

    btn.addEventListener('click', toggleMenu)
    menu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
