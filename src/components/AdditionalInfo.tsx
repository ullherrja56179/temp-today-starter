import React from "react";
import {Text, View} from "react-native";

type AdditionalInfoProps = {
    windSpeed: number;
    humidity: number;
};

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
                                                           windSpeed, humidity,
                                                       }) => {
    return (<View className={"mt-10 items-center"}>
        <Text className={"text-base my-1"}>Wind Speed: {windSpeed} km/h</Text>
        <Text className={"text-base my-1"}>Humidity: {humidity}%</Text>
    </View>);
};

export default AdditionalInfo;
