import React, {useState} from "react";
import{
    View,
    TextProps,
    Text,
    TouchableOpacity
} 
from 'react-native';
import { style } from "./styles";

import {FontAwesome, MaterialIcons} from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                    React.ComponentType<React.ComponentProps<typeof MaterialIcons>>;


type Props = TextProps &{
    Icon?: IconComponent,
    Iconname?: string,
    IconFire?: IconComponent,
    IconNameFire?: string,
    name?: string,
}

export const SocialItem = ((Props:Props)=>{
    const{Icon,Iconname,IconFire,IconNameFire,name,...rest} = Props
    const [fired, setFired] = useState(false);

    return(
    <>
        <View style={style.iten}>
            <View style={style.userColumn}>
                <Icon
                    style={style.icon}
                    name={Iconname as any}
                    size={70}
                />
            </View>
            <View style={style.textColumn}>
                <Text style={style.itenText}>{name}</Text>
            </View>
                {IconFire && IconNameFire && (
                    <TouchableOpacity onPress={() => setFired(!fired)}>
                        <View style={style.fireColumn}>
                        <IconFire
                            style={fired ? style.firedFire : style.fire}
                            name={IconNameFire as any}
                            size={65}
                        />
                        </View>
                    
                    </TouchableOpacity>
                )}
        </View>
    </>
    )
})