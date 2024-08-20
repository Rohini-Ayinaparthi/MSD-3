document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');
    const container = document.getElementById('container');

    let isToggled = false;

    button.addEventListener('click', function () {
        if (isToggled) {
            button.textContent = 'Click me!';
            text.textContent = 'This is the initial text.';
            container.style.backgroundColor = 'lightblue';
            button.style.backgroundColor = 'darkblue';
        } else {
            button.textContent = 'Clicked!';
            text.textContent = 'The text has changed!';
            container.style.backgroundColor = 'lightcoral';
            button.style.backgroundColor = 'coral';
        }

        isToggled = !isToggled;
    });
});
