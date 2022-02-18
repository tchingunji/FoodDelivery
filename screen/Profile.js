import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import User from "../assets/user.png";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-web';
import BottomTabs from '../components/Home/BottomTabs';

const itens=[
    {
        image: require("../assets/pera.png"),
        text: "Pera",
    },
    {
        image: require("../assets/carne.png"),
        text:"Carne",
    },
    {
        image: require("../assets/limao.png"),
        text:"Limão",
    },
    {
        image: require("../assets/ovo.png"),
        text:"Ovo",
    },
    {
        image: require("../assets/batata.png"),
        text:"Batata",
    },
    {
        image: require("../assets/lagosta.png"),
        text:"Lagosta",
    },
];

export default function Profile() {

    const Icons = (props) => (
        <TouchableOpacity>
            <View style={{flexDirection:"row", justifyContent:"space-between", margin:8}}>
                <Icon name={props.icon} size={25} color="#000"
                    style={{
                        marginBottom: 3,
                        alignSelf: "center",
                        
                    }}/>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{backgroundColor:"#fff",padding:10,}}>
            <View style={{alignItems:"center", marginBottom:10}}>
                <Image source={User} style={{width:120,height:120,}}/> 
                <Text style={{fontFamily:"Century Gothic",fontSize:20}}>Natercio dos Anjos Silva</Text>
            </View>

            <View style={{flexDirection: "row",margin: 5,justifyContent:"space-between",
                shadowColor:"#000",
                    shadowOffset:{width:0.5, height: 3},
                    shadowRadius: 6,
                    shadowOpacity:0.36,
                    elevation: 8,
                    marginBottom:10,
                    borderRadius:10,
                    shadowOffset:{  width: 0,  height: 5,  },
                    shadowColor: '#eee',
                    shadowOpacity: 0.7,
                    padding:5,
                }}>
                <View style={{alignItems:"center"}}>
                    <Icons icon="e-mail" text='Nat44@gmail.com'/>
                    
                </View>
                <View style={{flexDirection:"column",justifyContent:"center"}}>
                    <Icons icon="localization" text='Angola, Luanda, Talatona'/>
                    <Icons icon="phone" text='948050181 - 996877632'/>
                </View>
            </View>

            <TouchableOpacity 
                style={{
                    backgroundColor:"#FFCE36",
                    padding:10,
                    borderRadius:10,
                    marginHorizontal:7,
                    marginVertical:22,
                }}>
                <Text style={{                    
                    color:"#000",
                    fontSize:16,
                    fontWeight:"bold",
                    fontFamily:"Corbel",
                    textAlign:"center",                    
                }}>Alterar Dados pesssoas</Text>
            </TouchableOpacity>
            <Text>Pesquise um igrendiente a sua Escolha</Text>


            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {itens.map((item, index)=>(
                <View key={index} style={{alignItems:"center", marginRight:30}}
                onClick={()=> 
                    console.log("TEST")}>
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
            <BottomTabs/>
        </View>
        
    )
}
