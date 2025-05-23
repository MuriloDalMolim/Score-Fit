import React, {useState} from "react";
import{
    View,
    Text,
    TextProps,
    TouchableOpacity
} 
from 'react-native';
import { style } from "./styles";

import {MaterialIcons} from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>>;

type Props = TextProps &{
    Icon?: IconComponent,
    Iconname?: string,
    act?: string,
    hour?: string
}

export const ScheduleItem = ((Props:Props)=>{
    const{Icon,Iconname,act,hour,...rest} = Props
    const [marked, setMarked] = useState(false);

    const currentIcon = marked ? 'check-circle-outline' : Iconname ?? 'panorama-fisheye';

    return(
    <>
        <View style={marked ? style.itenmarked : style.iten}>
            {Icon &&(
                <TouchableOpacity onPress={() => setMarked(!marked)}>
                <Icon
                        style={style.icon}
                        name={currentIcon as any}
                        size={40}
                        color={'black'}
                    />
                </TouchableOpacity>
            )}
            <View style={style.infos}>
                <View style={style.boxTrain}>
                    <Text style={style.train}>{act}</Text>
                </View>
                <View style={style.boxAtach}>
                    <Text style={style.atach}>{hour}</Text>
                </View>
            </View>
        </View>
    </>
    )
})