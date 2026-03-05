
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
        this.boxElement.style.padding = this.isHovered ? "1%" : "2%";
        this.titleElement.style.color = color;
    }
}

const mother = new ProjectElement("mother", "orange");
const technomania = new ProjectElement("technomania", "red");
const specialization = new ProjectElement("specialization", "rgb(86, 86, 240)");
const projectEcho = new ProjectElement("projectEcho", "burlywood");
