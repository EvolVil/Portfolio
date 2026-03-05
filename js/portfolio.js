
class ProjectElement
{
    boxElement;
    titleElement;
    hoveredColor = "rgb(169, 169, 169)";
    unhoveredColor = "rgb(169, 169, 169)"
    isHovered = false;

    constructor(elementId, color)
    {
        this.boxElement = document.getElementById(elementId);
        this.titleElement = this.boxElement.querySelector(".projectHeader");
        this.thumbnailImage = this.boxElement.querySelector(".projectThumbnail");
        this.hoveredColor = color;
        this.unhoveredColor = this.boxElement.style.borderColor;

        this.boxElement.addEventListener('mouseenter', this.toggleHovered.bind(this));
        this.boxElement.addEventListener('mouseleave', this.toggleHovered.bind(this));
    }

    toggleHovered()
    {
        this.isHovered = !this.isHovered;
        let color = this.isHovered ? this.hoveredColor : this.unhoveredColor;
        this.boxElement.style.borderColor = color;
        this.titleElement.style.color = color;
        this.thumbnailImage.style.maxHeight = this.isHovered ? "29.2vh" : "28vh";
    }
}

const mother = new ProjectElement("mother", "orange");
const technomania = new ProjectElement("technomania", "red");
const specialization = new ProjectElement("specialization", "rgb(86, 86, 240)");
const projectEcho = new ProjectElement("projectEcho", "burlywood");
