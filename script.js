// Script for the toggle button for smaller screen sizes

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const hiddenMenu = document.querySelector('.hidden-menu');
    const overlay = document.querySelector('.overlay');
    const menuLinks = document.querySelectorAll('.hidden-menu a'); 

    
    menuToggle.addEventListener('click', function() {
        hiddenMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    
    overlay.addEventListener('click', function() {
        hiddenMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hiddenMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});

/* LI function */

document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.expand-list li');

    // Set the first list item to be expanded initially
    let expandedItem = listItems[0];
    expandedItem.classList.add('expanded-li');

    listItems.forEach(item => {
        item.addEventListener('click', function () {
            if (item !== expandedItem) {
                // Close the currently expanded item
                expandedItem.classList.remove('expanded-li');
                // Expand the clicked item
                item.classList.add('expanded-li');
                // Update the expanded item reference
                expandedItem = item;
            }
        });
    });
});
