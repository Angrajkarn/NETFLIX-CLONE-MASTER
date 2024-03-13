document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion li');

    accordionItems.forEach(item => {
        const input = item.querySelector('input[type="radio"]');
        const label = item.querySelector('label');
        const content = item.querySelector('.content');

        input.addEventListener('change', function() {
            if (input.checked) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });

        label.addEventListener('click', function() {
            input.click();
        });
    });

    const emailForm = document.querySelector('.email-signup form');
    const emailInput = emailForm.querySelector('input[type="email"]');
    const emailButton = emailForm.querySelector('button');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        if (email !== '') {
            // Here you can add your code to handle the email submission
            console.log('Email submitted:', email);
            emailInput.value = ''; // Clear the input field after submission
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
