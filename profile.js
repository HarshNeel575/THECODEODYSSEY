document.addEventListener('DOMContentLoaded', function () {
    const postButton = document.getElementById('post-btn');
    const postCaption = document.getElementById('post-caption');
    const postImageInput = document.getElementById('post-image');
    const postsSection = document.querySelector('.posts-section');
    
    const profilePhoto = document.getElementById('profile-img');
    const profileName = document.getElementById('username');
    const profileClass = document.getElementById('user-class');
    const profileBio = document.getElementById('user-bio');
    const editButton = document.getElementById('edit-btn');
    const editBioButton = document.getElementById('edit-bio-btn');
    const profilePhotoInput = document.getElementById('profile-photo-input');

    // Function to create a new post
    postButton.addEventListener('click', function () {
        const captionText = postCaption.value.trim();
        const file = postImageInput.files[0];

        if (captionText || file) {
            const newPost = document.createElement('article');
            newPost.classList.add('post');

            // Create the new post content
            const postHeader = document.createElement('div');
            postHeader.classList.add('head');

            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            const profilePicture = document.createElement('div');
            profilePicture.classList.add('profile-picture');
            const profileImage = document.createElement('img');
            profileImage.src = profilePhoto.src; // Get the profile image dynamically
            profilePicture.appendChild(profileImage);

            const userInfo = document.createElement('div');
            userInfo.classList.add('ingo');
            const username = document.createElement('h3');
            username.textContent = profileName.textContent; // Get the profile name dynamically
            const timestamp = document.createElement('small');
            timestamp.textContent = 'Just Now'; // Timestamp
            userInfo.appendChild(username);
            userInfo.appendChild(timestamp);

            userDiv.appendChild(profilePicture);
            userDiv.appendChild(userInfo);

            postHeader.appendChild(userDiv);

            // Create the post photo (if any)
            const postPhoto = document.createElement('div');
            postPhoto.classList.add('photo');
            if (file) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);  //image URL assign to the img element
                img.alt = 'Post Image';
                img.classList.add('post-image'); // Add a class for styling
                postPhoto.appendChild(img);
            }

            // Create the caption section
            const captionDiv = document.createElement('div');
            captionDiv.classList.add('caption');
            const captionP = document.createElement('p');
            captionP.innerHTML = `<b>${profileName.textContent}</b> ${captionText}`;
            captionDiv.appendChild(captionP);

            // Append the new post to the posts section, after the header
            newPost.appendChild(postHeader);
            newPost.appendChild(postPhoto);
            newPost.appendChild(captionDiv);

            // Add Interaction buttons (Like, Comment, Share)
            const interactionButtonsDiv = document.createElement('div');
            interactionButtonsDiv.classList.add('interaction-buttons');
            interactionButtonsDiv.innerHTML = `
                <span class="like-icon uil uil-heart"></span>
                <span class="comment-icon uil uil-comment"></span>
                <span class="share-icon uil uil-share-alt"></span>
            `;
            newPost.appendChild(interactionButtonsDiv);

            // Append the post to the posts section
            postsSection.appendChild(newPost);

            // Add event listeners to the Like and Comment buttons
            const likeBtn = newPost.querySelector('.like-icon');
            const commentBtn = newPost.querySelector('.comment-icon');
            const shareBtn = newPost.querySelector('.share-icon');

            // Like button functionality
            likeBtn.addEventListener('click', function () {
                likeBtn.classList.toggle('liked'); // Toggle like/unlike
                likeBtn.style.color = likeBtn.classList.contains('liked') ? '#ff0000' : '#ff4c4c'; // Change color
            });

            // Comment button functionality
            commentBtn.addEventListener('click', function () {
                alert('You can write your comment here!');
            });

            // Share button functionality
            shareBtn.addEventListener('click', function () {
                alert('Post shared!');
            });

            // Clear the input fields
            postCaption.value = '';
            postImageInput.value = '';
        } else {
            alert('Please add a caption or an image!');
        }
    });

    // Profile photo upload functionality
    profilePhotoInput.addEventListener('change', function () {
        const file = profilePhotoInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePhoto.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Edit bio functionality
    editBioButton.addEventListener('click', function () {
        const newBio = prompt('Edit your bio:', profileBio.textContent);
        if (newBio !== null && newBio !== '') {
            profileBio.textContent = newBio;
        }
    });

    // Edit name/class functionality
    editButton.addEventListener('click', function () {
        const newName = prompt('Enter your name:', profileName.textContent);
        const newClass = prompt('Enter your class:', profileClass.textContent);
        if (newName !== null && newClass !== null && newName !== '' && newClass !== '') {
            profileName.textContent = newName;
            profileClass.textContent = newClass;
        }
    });
});
