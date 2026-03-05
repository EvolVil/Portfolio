
const header = document.getElementById('header')
const footer = document.getElementById('footer')

window.addEventListener('load', function () {
    header.innerHTML = `
    <div class="titleWrapper">
        <a href="index.html" class="noDecor"><h1 class="myName">Love Erlandsson</h1></a>
        <p class="myTitle">Game Programmer</p>
    </div>
    <div class="navBar">
        <a class="navText" href="index.html">Home</a>
        <p class="navText">Projects</p>
        <a class="navText" href="aboutMe.html">About me</a>
    </div>`

    footer.innerHTML = `
    <h2 class="underline">Contact me</h2>
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
                <img src="Assets/Icons/InBug-Black.png" class="linkIcon">
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


window.onscroll = function() {
    if (this.document.documentElement.scrollTop > 50)
    {
        header.style.paddingTop = "1%"
        header.style.paddingBottom = "1%"
        header.style.borderBottomStyle = "solid"
    }
    else
    {
        header.style.paddingTop = "2.5%"
        header.style.paddingBottom = "2.5%"
        header.style.borderBottomStyle = "none"
    }
}

