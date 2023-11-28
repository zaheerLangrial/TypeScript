import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Typography } from 'antd';

const { Title } = Typography;

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [temperature, setTemperature] = useState<number | null>(null);

  const apiKey = 'e4f23b01d16336ae3e19aae80619226f';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
        // console.log(response.data.main.temp)
      setTemperature(response.data.main.temp);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div>
      <Title level={2}>Weather App</Title>
      <Input
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="primary" onClick={fetchWeather}>
        Get Temperature
      </Button>

      {temperature !== null && (
        <div>
          <Title level={3}>Temperature:</Title>
          <Title level={2}>{city.toUpperCase()}</Title>
          <p>{temperature}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
