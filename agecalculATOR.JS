function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    
    if (!day && !month && !year) {
        alert('Please enter proper input.');
        return;
    }

    
    if (!day || !month || !year) {
        alert('Please enter a valid date.');
        return;
    }

    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (yearNum < 1000 || yearNum > 9999) {
        alert('Invalid year. Please enter a four-digit year.');
        return;
    }

    
    if (monthNum < 1 || monthNum > 12) {
        alert('Invalid month. Please enter a month between 1 and 12.');
        return;
    }

    
    if (dayNum < 1 || dayNum > 31) {
        alert('Invalid day. Please enter a day between 1 and 31.');
        return;
    }

    
    const isValidDate = (monthNum === 2 && dayNum > 29 && !isLeapYear(yearNum)) ||
                        ([4, 6, 9, 11].includes(monthNum) && dayNum > 30);

    if (isValidDate) {
        alert('Invalid date for the given month. Please check your input.');
        return;
    }

    const birthDate = new Date(yearNum, monthNum - 1, dayNum);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
    displayCurrentTime();
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
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
}

setInterval(displayCurrentTime, 1000);
