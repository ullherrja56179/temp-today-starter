import {Button, Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components/native";

type StyledButtonProps = {
    title: string;
    onPress: () => void;
};

export const StyledButton: React.FC<StyledButtonProps> = ({title, onPress, }) => {
    return <TouchableOpacity onPress={onPress} className={"rounded-lg bg-blue-500 p-3 items-center"}>
            <Text className={"text-white text-lg font-semibold"}>{title}</Text>
        </TouchableOpacity>
}
