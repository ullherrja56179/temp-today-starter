import {Text, TouchableOpacity} from "react-native";
import React from "react";

type StyledButtonProps = {
    title: string;
    onPress: () => void;
};

const StyledButton: React.FC<StyledButtonProps> = ({title, onPress, }) => {
    return <TouchableOpacity onPress={onPress} className={"rounded-lg bg-blue-500 p-3 items-center"}>
            <Text className={"text-white text-lg font-semibold"}>{title}</Text>
        </TouchableOpacity>
}

export default StyledButton
