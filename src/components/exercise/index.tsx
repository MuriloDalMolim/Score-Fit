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
    train?: string,
    series?: string,
    time?: string,
    weight?: string,
    hour?: string
}

export const Exercise = ((Props:Props)=>{
    const{Icon,Iconname,train,series,time,weight,hour,...rest} = Props
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
            <View style={style.info}>
                <View style={style.boxtrain}>
                    <Text style={style.train}>{train}</Text>
                </View>
                <View style={style.boxatach}>
                    <Text style={style.atach}>{series}</Text>
                    <Text style={style.atach}>{time}</Text>
                    <Text style={style.atach}>{weight}</Text>
                </View>
            </View>
        </View>
    </>
    )
})