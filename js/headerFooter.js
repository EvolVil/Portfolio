// ▼ ►

const ROOT = (location.hostname == "localhost" || location.hostname == "127.0.0.1" || location.hostname == "") ? "/" : "/Portfolio-webpage/";

const header = document.getElementById('header')
const footer = document.getElementById('footer')
var dropdownMenu = null;
var dropdownButton = null;
var dropdownOpen = false;

window.addEventListener('load', function () {
    header.innerHTML = `
    <div class="titleWrapper">
        <a href="` + ROOT + `index.html" class="noDecor"><h1 class="myName">Love Erlandsson</h1></a>
        <p class="myTitle">Game Programmer</p>
    </div>
    <div class="navBar">
        <a class="navText" href="` + ROOT + `index.html">Home</a>
        <div>
            <div class="flex">
                <a class="projectsButton" onclick="toggleDropdown()" id="projDropdownButton">Projects</a>
                <p style="font-size: 0.5em; margin-top: 5%">▼</p>
            </div>
            <div class="relativeCentered">
                <div id="dropdownMenu">
                    <div class="dropdownElement">
                        <a class="dropdownText" href="` + ROOT + `Projects/mother.html">M0THER</a>
                    </div>
                    <div class="dropdownElement">
                        <a class="dropdownText" href="` + ROOT + `Projects/technomania.html">TECHNOMANIA</a>
                    </div>
                    <div class="dropdownElement">
                        <a class="dropdownText" href="` + ROOT + `Projects/specialization.html">Specialization</a>
                    </div>
                    <div class="dropdownElement">
                        <a class="dropdownText" href="` + ROOT + `Projects/project-echo.html">Project: Echo</a>
                    </div>
                </div>
            </div>
        </div>
        <a class="navText" href="` + ROOT + `aboutMe.html">About me</a>
    </div>`;

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
                <img src="` + ROOT + `Assets/Icons/InBug-Black.png" class="linkIcon">
            </a>
            <a href="mailto:love.erlandsson@hotmail.com" target="_blank" class="noDecor">
                <img src="` + ROOT + `Assets/Icons/envelope-regular.png" class="linkIcon">
            </a>
            <a href="https://evolvil.itch.io/" target="_blank" class="noDecor">
                <img src="` + ROOT + `Assets/Icons/itch-io-brands-solid.png" class="linkIcon">
            </a>
        </div>
    </div>`;

    this.dropdownMenu = this.document.getElementById("dropdownMenu");
    this.dropdownButton = this.document.getElementById("projDropdownButton");

    window.addEventListener('click', function(e) {
        if (this.dropdownOpen && e.target != this.dropdownMenu && e.target != this.dropdownButton)
            setDropdown(false);
    })
})


window.onscroll = function() {
    if (this.document.documentElement.scrollTop > 50)
    {
        header.style.paddingTop = "1%";
        header.style.paddingBottom = "1%";
        header.style.borderBottomStyle = "solid";
    }
    else
    {
        header.style.paddingTop = "2.5%";
        header.style.paddingBottom = "2.5%";
        header.style.borderBottomStyle = "none";
    }
}

function toggleDropdown()
{
    setDropdown(!this.dropdownOpen);
}

function setDropdown(open)
{
    this.dropdownOpen = open;
    if (open)
        this.dropdownMenu.style.display = "block";
    else
        this.dropdownMenu.style.display = "none";
}
