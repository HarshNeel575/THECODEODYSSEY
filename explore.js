// Search Functionality
document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('.explore-item');
    
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
