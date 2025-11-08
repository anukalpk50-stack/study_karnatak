document.addEventListener('DOMContentLoaded', () => {
    // Select the checkbox and the button from the DOM.
    const termsCheckbox = document.getElementById('terms');
    const loginButton = document.querySelector('.btn-login');

    // This function will be called to check the state of the checkbox 
    // and enable/disable the button accordingly.
    const toggleButtonState = () => {
        // The button should be enabled only if the checkbox is checked.
        // We set the 'disabled' property of the button to the opposite of the checkbox's 'checked' state.
        loginButton.disabled = !termsCheckbox.checked;
    };

    // Disable the button initially. The user must check the box to enable it.
    if (loginButton) {
        loginButton.disabled = true;
    }

    // Add an event listener to the checkbox.
    // The 'change' event fires whenever the user ticks or unticks the box.
    termsCheckbox ? .addEventListener('change', toggleButtonState);
});