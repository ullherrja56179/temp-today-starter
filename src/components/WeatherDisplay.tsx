import styled from "styled-components/native";

type WeatherDisplayProps = {
    temperature: number,
    condition: string
}

const WeatherView = styled.View`
    padding-top: 50px;
    align-items: center;
    justify-content: center;
`

const Temperature = styled.Text`
    font-weight: bold;
    font-size: 50px;
`

const Condition = styled.Text`
    padding-top: 5px;
    font-size: 20px;
    color: darkgray;
`

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({temperature, condition}) => {
    return <WeatherView>
        <Temperature>{temperature} °C</Temperature>
        <Condition>{condition}</Condition>
    </WeatherView>
}

export default WeatherDisplay
