const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to display the notes from localStorage
function showNote() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
}

// Function to save the notes to localStorage
function save() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Display the notes when the page loads
showNote();

// Event listener for the 'Create Notes' button
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.className = "delete-icon";
    notesContainer.appendChild(inputBox).appendChild(img);
    save(); // Save the state after adding a new note
});

// Event listener for the notes container
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        save(); // Save the state after deleting a note
    } 
});

// Event listener for contenteditable elements
notesContainer.addEventListener("input", function (e) {
    if (e.target.classList.contains("input-box")) {
        save(); // Save the state on input changes
    }
});

// Prevent default Enter key behavior in contenteditable elements
document.addEventListener("keydown", event => {
    if (event.key === "Enter" && document.activeElement.isContentEditable) {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
