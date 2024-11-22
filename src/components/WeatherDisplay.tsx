import styled from "styled-components/native";
import {formatMeasurement} from "../utils/utils"

type WeatherDisplayProps = {
    temperature: number,
    condition: string
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({temperature, condition}) => {
    return <WeatherView>
        <Temperature>{formatMeasurement(temperature)}</Temperature>
        <Condition>{condition}</Condition>
    </WeatherView>
}

const WeatherView = styled.View`
    padding-top: 30px;
    align-items: center;
`

const Temperature = styled.Text`
    font-weight: bold;
    font-size: 50px;
`

const Condition = styled.Text`
    padding-top: 10px;
    font-size: 20px;
    color: darkgray;
`

export default WeatherDisplay
