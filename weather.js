const http = require('http');

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url.startsWith('/weather')) {
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const city = queryParams.get('city');

    if (city) {
      getWeather(city)
        .then((temperature) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`Weather temperature in ${city}: ${temperature}°C`);
        })
        .catch((error) => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error fetching weather data');
        });
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('City parameter is missing');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint not found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

function getWeather(city) {
  return new Promise((resolve, reject) => {
    const apiKey = 'YOUR_WEATHER_API_KEY'; // Replace with your actual API key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`;

    http.get(apiUrl, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        const weatherData = JSON.parse(data);

        if (weatherData.error) {
          reject(weatherData.error.message);
        } else {
          resolve(weatherData.current.temp_c);
        }
      });
    }).on('error', (error) => {
      reject(error.message);
    });
  });
}
