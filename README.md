# Sstudiosdev-lib-css
Sstudiosdev-lib-css is a CSS library that provides a collection of predefined styles for animations and useful functions implemented in JavaScript, designed to enhance the web development experience.

# Features
- **Custom Animations:** Access a variety of predefined animations to enhance the interactivity of your website.
- **Ready-to-use JavaScript functions:** Provides ready-to-use JavaScript functions that can help you perform common tasks more efficiently.
- **Flexible Customization:** Adaptability to customize animation styles according to the specific needs of your project.

# Installation
You can install Sstudiosdev-lib-css via npm:

```bash
npm i sstudiosdev-lib
```

Or you can include the CSS file directly in your project:

### Animations
```html
<link rel="stylesheet" href="/node_modules/sstudiosdev-lib/lib/css/sstudios-lib-animated.main.css">
```

### Design
```html
<link rel="stylesheet" href="/node_modules/sstudiosdev-lib/lib/css/sstudios-lib-style.main.css">
```

# Usage
Once you've installed the library into your project, you can start using its styles and functions as follows:

## CSS Animations
To apply a pre-defined CSS animation, simply add the corresponding class to the HTML element you wish to animate. For example:

```html
<div class="fadeIn">Welcome!</div>
```

## JavaScript Functions
To utilize the included JavaScript functions, simply import the module and call the desired function. For example:

```js
// formValidation.js

function validateForm(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        event.preventDefault();
        alert('Please complete all fields.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', validateForm);
});
```

## import to html

```js
<script src="/node_modules/sstudiosdev-lib/lib/js/formValidation.js"></script>
```

# Contribution
Contributions are welcome! If you have ideas to enhance this library, please open an issue or submit a pull request. Make sure to follow the contribution guidelines.

  <a href="https://github.com/Sstudiosdev"><img src="https://avatars.githubusercontent.com/u/149289426?v=4" height="128" width="128" /></a>
    <a href="https://github.com/StaffV77"><img src="https://avatars.githubusercontent.com/u/107765373?v=4" height="128" width="128" /></a>

# License
Sstudiosdev-lib is released under the MIT License. See the LICENSE file for more details.

# Contact
For any questions or suggestions, feel free to reach out to the Sstudiosdev team via sstudiosdev@gmail.com
