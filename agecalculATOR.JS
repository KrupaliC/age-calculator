function calculateAge() {
    // Get the input values
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    // Create a date object with the user's birthdate
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').textContent = `You are ${age} years old.`;

    // Display current time
    displayCurrentTime();
}

function displayCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `Current Time: ${hours}:${minutes}:${seconds}`;

    const timeElement = document.getElementById('time');
    if (!timeElement) {
        const newTimeElement = document.createElement('p');
        newTimeElement.id = 'time';
        newTimeElement.textContent = timeString;
        document.body.appendChild(newTimeElement);
    } else {
        timeElement.textContent = timeString;
    }
    // Update the time every second
setInterval(displayCurrentTime, 1000);

}

// Update the time every second
setInterval(displayCurrentTime, 1000);
