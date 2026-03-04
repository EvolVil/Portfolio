
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')

window.addEventListener('load', function () {
    header.innerHTML = `
    <div class="titleWrapper">
        <h1 class="myName">Love Erlandsson</h1>
        <p class="myTitle">Game Programmer</p>
    </div>
    <div class="navBar">
        <p class="navText">Home</p>
        <p class="navText">Projects</p>
        <p class="navText">About me</p>
    </div>`

    footer.innerHTML = `
    <h2>Contact me</h2>
    <div class="footerContactWrapper">
        <div>
            <div class="flex">
                <p class="contactInfo">Mail:</p>
                <a class="infoText" href="mailto:love.erlandsson@hotmail.com">love.erlandsson@hotmail.com</a>
            </div>
            <div class="flex">
                <p class="contactInfo">Phone:</p>
                <p class="infoText">+46 (0)72 557 07 57</p>
            </div>
        </div>
        <div class="contactLinks">
            <a href="https://www.linkedin.com/in/love-erlandsson-3648a336a/" target="_blank" class="noDecor">
                <img src="Assets/Icons/square-linkedin-brands-solid.png" class="linkIcon">
            </a>
            <a href="mailto:love.erlandsson@hotmail.com" target="_blank" class="noDecor">
                <img src="Assets/Icons/envelope-regular.png" class="linkIcon">
            </a>
            <a href="https://evolvil.itch.io/" target="_blank" class="noDecor">
                <img src="Assets/Icons/itch-io-brands-solid.png" class="linkIcon">
            </a>
        </div>
    </div>`
})

