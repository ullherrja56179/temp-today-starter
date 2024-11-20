import {Text, TouchableOpacity} from "react-native";
import React from "react";

type StyledButtonProps = {
    onPress: () => void;
    children: React.ReactNode;
};

const StyledButton: React.FC<StyledButtonProps> = ({onPress, children}) => {
    return <TouchableOpacity onPress={onPress} className={"rounded-lg bg-blue-500 p-3 items-center"}>
        <Text className={"text-white text-lg font-semibold"}>{children}</Text>
    </TouchableOpacity>
}

export default StyledButton
