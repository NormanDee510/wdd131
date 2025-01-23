// Function to calculate Windchill
function calculateWindChill(temp, windSpeed) {
    // Check if conditions are suitable for windchill calculation
    if ((temp <= 10 && windSpeed > 4.8) || (temp <= 50 && windSpeed > 3)) {
        // Windchill formula for Celsius: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
        // Windchill formula for Fahrenheit: 35.74 + 0.6215*T - 35.75*(V^0.16) + 0.4275*T*(V^0.16)
        const windChillC = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChillC.toFixed(1) + "°C";
    }
    return "N/A"; // Return N/A if windchill conditions aren't met
}

// Get the current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("current-year").textContent = currentYear;
    document.getElementById("last-modified").textContent = lastModified;
}

// Function to display weather data
function displayWeather() {
    const temp = 10; // Static temperature value in Celsius
    const windSpeed = 15; // Static wind speed in km/h

    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windchill").textContent = windChill;
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function() {
    updateFooter();
    displayWeather();
});
