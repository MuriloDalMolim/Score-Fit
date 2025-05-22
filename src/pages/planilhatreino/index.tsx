import React,{ useState } from "react";
import{
    View,
    Text,
    Image,
} 
from 'react-native';
import { style } from "./styles";
import { Upper } from "../../components/upper";
import { Bottom } from "../../components/bottom";
import {AntDesign, MaterialIcons,} from '@expo/vector-icons';
import { Uptext } from "../../components/uptext";
import { Exercise } from "../../components/exercise";

export default function PlanilhaTreino(){

    return(
        <>
        <Upper
            title="Planilha de treino"
            Icon={AntDesign}
            IconName="doubleleft"
        />
        <View style={style.mid}>
            <Uptext
                text="Treino X"
                subtext="Gerenciar"
            />
            <Exercise
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                train="Supino inclinado c/ halter"
                series="4x12"
                time="2min"
                weight="18kg"
            />
            <Exercise
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                train="Voador"
                series="4x12"
                time="2min"
                weight="6Br"
            />
            <Exercise
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                train="Supino Declinado"
                series="4x12"
                time="3min"
                weight="25kg"
            />
            <Exercise
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                train="Triceps Corda"
                series="3X15"
                time="1min"
                weight="5Br"
            />
            <Exercise
                Icon={MaterialIcons}
                Iconname="panorama-fisheye"
                train="Triceps Francês"
                series="3X15"
                time="1,5min"
                weight="12kg"
            />
        </View>
        <Bottom/>
        </>
    )
}