import { Typography } from "antd"
import Input from "antd/es/input/Input"
import React, { useState } from "react"
import {Button} from 'antd'
import axios from "axios"

const Weather:React.FC =() => {
  const [city , setCity] = useState<string>('')
  const [temp , setTemp] = useState<number | null> (null)

  const apiKey = 'e4f23b01d16336ae3e19aae80619226f'

  const fetchWeather = async () => {
    const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    console.log(res.data.main.temp)
    setTemp(res.data.main.temp)
  }
  return (
    <div className="MainDev">
      <Typography.Title level={2}>Weather App</Typography.Title>
      <Input placeholder="Enter City Name..." value={city} onChange={(e) => setCity(e.target.value)} />
      <br />
      <br />
      <Button type="primary" onClick={fetchWeather}>
        Check Tempature
      </Button>

      {
        temp !== null && (
          <div>
            <Typography.Title level={1}>Tempature</Typography.Title>
            <Typography.Title level={3}>{city}</Typography.Title>
            <p>{temp}</p>
          </div>
        )
      }
    </div>
  )
}

export default Weather