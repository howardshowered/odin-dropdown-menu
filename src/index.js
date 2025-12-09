import "./styles.css";


const dropDownMenu = document.querySelector(".dropdown-menu")
dropDownMenu.style.visibility = 'hidden';

const dropDownMenuCreator = () => {
    const dropdownBtn = document.querySelector("#dropdown-btn");
    const dropDownMenu = document.querySelector(".dropdown-menu")
    dropDownMenu.setAttribute("visibility", "hidden");
    dropdownBtn.addEventListener("click", () => {
        if (dropDownMenu.style.visibility === 'hidden')
            dropDownMenu.style.visibility = 'visible';
        else
            dropDownMenu.style.visibility = 'hidden'; 

    })
}

dropDownMenuCreator();

