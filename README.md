# age-calculator HTML Interface code
HTML Structure: The code creates a basic webpage with a title "Welcome To Aayu Calculator" and links to a CSS file for styling.
Marquee Text: A scrolling text that says "Discover Your Age with Aayu Calculator Because Every Year Counts Towards Your Future!".
Form: A form where users can input their birthdate (day, month, year).
Button: A button that triggers a JavaScript function calculateAge() when clicked.
Result Display: A paragraph element where the calculated age will be displayed.
Details Section: A section explaining how age is calculated, with a summary and detailed explanation.

# age-calculator CSS style code
Body Styles: Sets the font to Arial, background color to light blue, centers the text, and adds some top margin.
Container Styles: Defines a white background, padding, rounded corners, shadow, and centers the text inside the container.
Heading Styles: Changes the color of h2 to a teal shade and aligns h1 text to the left with a dark red color.
Form Styles: Displays the form as an inline block and adds top margin.
Label Styles: Makes labels bold.
Input Styles: Adds padding, sets a fixed width, and adds bottom margin to input fields.
Button Styles: Adds transition effects, positions, and styles the button with a green background, white text, rounded corners, and a shadow. Changes the button color on hover.
Paragraph Styles: Sets the font size and direction for p1, and styles the p element with a larger font size and dark gray color.

# age-calculator Javascript code
calculateAge() Function:
Gets the day, month, and year values from the form.
Checks if the inputs are valid (not empty and within valid ranges).
Converts the inputs to numbers.
Validates the year, month, and day.
Checks for valid dates (e.g., 30 days in April).
Calculates the age based on the birthdate and today's date.
Displays the age in the result paragraph.
isLeapYear(year) Function:
Checks if a given year is a leap year.
displayCurrentTime() Function:
Gets the current time.
Formats it as a string.
Displays the current time in a paragraph with the id 'time'.
setInterval(displayCurrentTime, 1000):
Updates the current time every second.

#About code and small Explaination#
