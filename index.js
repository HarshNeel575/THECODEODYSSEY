var root = document.querySelector(':root');
//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//remove active class from menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block';
        }
    })
})



//MESSAGES


// JavaScript for Search Bar and Tab Switching

// Get references to the DOM elements
const searchInput = document.getElementById('message-search');
const messages = document.querySelectorAll('.message');
const tabs = document.querySelectorAll('.category h6');
const messageContainers = document.querySelectorAll('.message');

// Function to filter messages based on search input
function filterMessages() {
    const searchTerm = searchInput.value.toLowerCase();

    messages.forEach((message) => {
        const name = message.querySelector('h5').innerText.toLowerCase();
        const text = message.querySelector('p').innerText.toLowerCase();

        if (name.includes(searchTerm) || text.includes(searchTerm)) {
            message.style.display = 'flex'; // Show matching messages
        } else {
            message.style.display = 'none'; // Hide non-matching messages
        }
    });
}

// Add event listener to the search bar
searchInput.addEventListener('input', filterMessages);

// Function to handle tab switching
function switchTab(event) {
    // Remove the 'active' class from all tabs
    tabs.forEach((tab) => tab.classList.remove('active'));

    // Add the 'active' class to the clicked tab
    event.target.classList.add('active');

    // Show messages corresponding to the selected tab
    const selectedCategory = event.target.innerText.toLowerCase();

    messages.forEach((message) => {
        // Use data attributes or classes to group messages by category
        const category = message.getAttribute('data-category');

        if (category === selectedCategory || selectedCategory === 'primary') {
            message.style.display = 'flex';
        } else {
            message.style.display = 'none';
        }
    });
}

// Add event listeners to tabs
tabs.forEach((tab) => tab.addEventListener('click', switchTab));


//THEME CUSTOMIzATION
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

//OPEN THEME CARD FUNCTION
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

theme.addEventListener('click', openThemeModal);


//CLOSE THEME CARD FUNCTION
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click',closeThemeModal);

//FONT
const fontSizes = document.querySelectorAll('.choose-size span');

//remove active class from font spans
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size =>{
    size.addEventListener('click', () =>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        //change font size of root html element
    document.querySelector('html').style.fontSize = fontSize;
    })
    
})


//PRIMARY COLORS
const colorPalette = document.querySelectorAll('.choose-color span');

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 0;
        } else if(color.classList.contains('color-2')){
            primaryHue = 270;
        } else if(color.classList.contains('color-3')){
            primaryHue = 120;
        } else if(color.classList.contains('color-4')){
            primaryHue = 45;
        } else if(color.classList.contains('color-5')){
            primaryHue = 220;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


//BACKGROUND
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
let blackColorLightness;
let darkColorLightness;
let lightColorLightness;

const changeBG = () => {
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--black-color-lightness', blackColorLightness);
}


Bg2.addEventListener('click', () => {
    darkColorLightness = '60%';
    lightColorLightness = '20%';
    blackColorLightness = '3%';

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg1.addEventListener('click', () => {
    darkColorLightness = '20%';
    lightColorLightness = '60%';
    blackColorLightness = '3%';

    Bg1.classList.add('active');

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '20%';
    lightColorLightness = '3%';
    blackColorLightness = '60%';

    Bg1.classList.add('active');

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})


//ACTION BUTTONS
// Select all heart, comment, share, and bookmark buttons for all posts
const heartButtons = document.querySelectorAll('.uil-heart');
const commentButtons = document.querySelectorAll('.uil-comment-dots');
const shareButtons = document.querySelectorAll('.uil-share-alt');
const bookmarkButtons = document.querySelectorAll('.uil-bookmark-full');

// Loop through all heart buttons and add event listeners
heartButtons.forEach((heartButton) => {
    heartButton.addEventListener('click', function() {
        if (heartButton.style.color === 'red') {
            heartButton.style.color = '';  // Reset color to default when unliked
            alert("You unliked this!");
        } else {
            heartButton.style.color = 'red';  // Change color to red when liked
            alert("You liked this!");
        }
    });
});

// Loop through all comment buttons and add event listeners
commentButtons.forEach((commentButton) => {
    commentButton.addEventListener('click', function() {
        const comment = prompt("Enter your comment:");
        if (comment) {
            alert(`Your comment: "${comment}"`);

            // Dynamically change the background color on click
            commentButton.style.backgroundColor = '#f0f0f0'; // Light gray
            setTimeout(() => {
                commentButton.style.backgroundColor = ''; // Reset background color after a while
            }, 500);
        }
    });
});

// Loop through all share buttons and add event listeners
shareButtons.forEach((shareButton) => {
    shareButton.addEventListener('click', function() {
        alert("Shared this content!");

        // Dynamically scale the icon on click
        shareButton.style.transform = 'scale(1.1)';  // Increase size
        setTimeout(() => {
            shareButton.style.transform = '';  // Reset size after animation
        }, 200);
    });
});

// Loop through all bookmark buttons and add event listeners
bookmarkButtons.forEach((bookmarkButton) => {
    bookmarkButton.addEventListener('click', function() {
        if (bookmarkButton.style.color === 'gold') {
            bookmarkButton.style.color = '';  // Reset to default when unbookmarked
            alert("Removed from bookmarks!");
        } else {
            bookmarkButton.style.color = 'gold';  // Change color to gold when bookmarked
            alert("Bookmarked this!");
        }
    });
});
