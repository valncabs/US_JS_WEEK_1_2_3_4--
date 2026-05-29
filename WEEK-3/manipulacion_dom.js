// Select DOM elements
const noteInput = document.getElementById("noteInput");
const addButton = document.querySelector("#addButton");
const notesList = document.getElementById("notesList");
// Confirm elements exist
console.log(noteInput);
console.log(addButton);
console.log(notesList);
// Notes array
let notes = [];
// Load notes from Local Storage
const savedNotes = localStorage.getItem("notes");
if (savedNotes) {
    notes = JSON.parse(savedNotes);
    console.log(`${notes.length} notes loaded.`);
    // Render saved notes
    notes.forEach((note) => {
        createNote(note);
    });
}
// Add note event
addButton.addEventListener("click", () => {
    // Remove extra spaces
    const noteText = noteInput.value.trim();

    // Validate empty input
    if (noteText === "") {
        alert("Please enter a note.");
        return;
    }
    // Add note to array
    notes.push(noteText);
    // Save in Local Storage
    localStorage.setItem("notes", JSON.stringify(notes));
    // Create note in DOM
    createNote(noteText);
    // Clear input
    noteInput.value = "";
    // Focus input again
    noteInput.focus();
    console.log("Note added.");
});
// Function to create notes
function createNote(noteText) {

    // Create list item
    const li = document.createElement("li");
    // Add text content
    li.textContent = noteText;
    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    // Append button to li
    li.appendChild(deleteButton);
    // Append li to ul
    notesList.appendChild(li);
    // Delete note event
    deleteButton.addEventListener("click", () => {
        // Remove li from ul
        notesList.removeChild(li);
        // Remove from array
        notes = notes.filter((note) => note !== noteText);
        // Update Local Storage
        localStorage.setItem("notes", JSON.stringify(notes));
        console.log("Note deleted.");
    });
}