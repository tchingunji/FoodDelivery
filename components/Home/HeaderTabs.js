import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-web';

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Kudiya");
    return (
        <View style={{flexDirection:"row", alignSelf:"center"}}>
            <HeaderButton 
            text="Kudiya" 
            btnColor="black" 
            textColor="white" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            />

            <HeaderButton 
            text="Encomendar" 
            btnColor="white" 
            textColor="black"                
            activeTab={activeTab} 
            setActiveTab={setActiveTab}/>
        </View>
    );
}

const HeaderButton =(props)=>(    
    <TouchableOpacity 
    style={{
        backgroundColor:props.activeTab == props.text ? "black" : "white" ,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    }}
    onPress={()=>props.setActiveTab(props.text)}
    >
        <Text style={{color: props.activeTab == props.text ? "white" : "black", fontSize: 15, fontWeight:"90"}}>{props.text}</Text>
    </TouchableOpacity>    
);