function searchFunction() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() === "") {
        alert("Please enter a search term.");
    } else {
        alert("Searching for: " + searchInput);
    }
}
