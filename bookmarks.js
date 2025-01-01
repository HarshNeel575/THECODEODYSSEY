document.addEventListener("DOMContentLoaded", function () {
    const bookmarkList = document.getElementById("bookmark-list");
    const noBookmarksSection = document.getElementById("no-bookmarks");
    const addBookmarkBtn = document.getElementById("add-bookmark-btn");
    const bookmarkNameInput = document.getElementById("bookmark-name");
    const bookmarkUrlInput = document.getElementById("bookmark-url");
    const searchInput = document.getElementById("search-input");

    // Load saved bookmarks from localStorage
    function loadBookmarks() {
        const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        if (savedBookmarks.length === 0) {
            noBookmarksSection.style.display = "block";  // Show no bookmarks message
            bookmarkList.style.display = "none";  // Hide bookmark list
        } else {
            noBookmarksSection.style.display = "none";  // Hide no bookmarks message
            bookmarkList.style.display = "grid";  // Show bookmark list
            savedBookmarks.forEach(bookmark => {
                displayBookmark(bookmark);
            });
        }
    }

    // Display a single bookmark
    function displayBookmark(bookmark) {
        const bookmarkItem = document.createElement("div");
        bookmarkItem.classList.add("bookmark-item");
        bookmarkItem.innerHTML = `
            <h3>${bookmark.name}</h3>
            <a href="${bookmark.url}" target="_blank">Visit</a>
        `;
        bookmarkList.appendChild(bookmarkItem);
    }

    // Save the new bookmark to localStorage
    function saveBookmark(name, url) {
        const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        savedBookmarks.push({ name, url });
        localStorage.setItem("bookmarks", JSON.stringify(savedBookmarks));
    }

    // Add a new bookmark
    addBookmarkBtn.addEventListener("click", function () {
        const name = bookmarkNameInput.value.trim();
        const url = bookmarkUrlInput.value.trim();

        if (name && url) {
            saveBookmark(name, url);

            // Clear inputs
            bookmarkNameInput.value = "";
            bookmarkUrlInput.value = "";

            // Display the new bookmark
            displayBookmark({ name, url });
            noBookmarksSection.style.display = "none";  // Hide the no bookmarks message
            bookmarkList.style.display = "grid";  // Show the bookmark list
        } else {
            alert("Please enter both bookmark name and URL.");
        }
    });

    // Search functionality
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const allBookmarks = document.querySelectorAll(".bookmark-item");

        allBookmarks.forEach(bookmark => {
            const name = bookmark.querySelector("h3").textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                bookmark.style.display = "block";
            } else {
                bookmark.style.display = "none";
            }
        });
    });

    // Load bookmarks when the page loads
    loadBookmarks();
});
