document.getElementById('predictor-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
    const population = parseInt(document.getElementById('population').value);
    const households = parseInt(document.getElementById('households').value);
    const total_rooms = parseInt(document.getElementById('total_rooms').value);

    const response = await fetch('https://housing-api-vbh0.onrender.com/predict/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            latitude,
            longitude,
            population,
            households,
            total_rooms
        })
    });

    if (response.ok) {
        const data = await response.json();
        document.getElementById('result').innerText = `Predicted Total Bedrooms: ${data.predicted_total_bedrooms}`;
    } else {
        document.getElementById('result').innerText = 'Error predicting bedrooms. Please try again.';
    }
});
