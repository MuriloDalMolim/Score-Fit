import React, {useState} from "react";
import{
    View,
    Text,
    TextProps,
    TouchableOpacity
}
from 'react-native';
import { style } from "./styles";

import {MaterialIcons, Feather, FontAwesome} from '@expo/vector-icons';
import { themes } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>>;

type Props = TextProps &{
    Icon?: IconComponent;
    Iconname?: string;
    act?: string;
    hour?: string;
    description?: string; // Adicionar esta linha
    onEdit: () => void;
    onDelete: () => void;
}

export const ScheduleItem = ((Props:Props)=>{
    const{Icon,Iconname,act,hour, description, onEdit, onDelete} = Props // Adicionar 'description' aqui
    const [marked, setMarked] = useState(false);

    const currentIcon = marked ? 'check-circle-outline' : Iconname ?? 'panorama-fisheye';

    return(
        <View style={marked ? style.itenmarked : style.iten}>
            {Icon &&(
                <TouchableOpacity onPress={() => setMarked(!marked)} style={style.checkIconContainer}>
                    <Icon
                        name={currentIcon as any}
                        size={40}
                        color={'black'}
                    />
                </TouchableOpacity>
            )}
            <View style={style.textContainer}>
                <View style={style.boxTrain}>
                    <Text style={style.train}>{act}</Text>
                </View>
                <View style={style.boxAtach}>
                    <Text style={style.atach}>{hour}</Text>
                    {description && <Text style={style.descriptionText}>{description}</Text>} {/* Adicionar esta linha */}
                </View>
            </View>

            <View style={style.actionIconGroup}>
                <TouchableOpacity onPress={onEdit} style={style.actionIcon}>
                    <Feather name="edit" size={34} color={themes.colors.bluefosco}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete} style={style.actionIcon}>
                    <FontAwesome name="trash-o" size={34} color={themes.colors.bluefosco}/>
                </TouchableOpacity>
            </View>
        </View>
    )
})