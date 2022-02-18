import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native'

const itens=[
    {
        image: require("../../assets/s-1.png"),
        text: "bega",
    },
    {
        image: require("../../assets/s-2.png"),
        text:"pizza",
    },
    {
        image: require("../../assets/s-5.png"),
        text:"bolo",
    },
    {
        image: require("../../assets/s-6.png"),
        text:"cha",
    },
    {
        image: require("../../assets/s-3.png"),
        text:"gelado",
    },
];

export default function Categories() {
    return (
        <View
            style={{
                marginTop:5,
                backgroundColor:"#fff",
                paddingVertical:10,
                paddingLeft:20,
            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {itens.map((item, index)=>(
                <View key={index} style={{alignItems:"center", marginRight:30}}
                onClick={()=> 
                    console.log("TEST", item.text)}>
                    <Image
                        source={item.image}
                        style={{
                            width:50,
                            height: 40,
                            resizeMode: "contain",
                            
                        }}                        
                        />
                        <Text style={{fontSize:13, fontWeight:"900"}}>{item.text}</Text>                
                </View>
            ))}            
            </ScrollView>
        </View>
    )
}
