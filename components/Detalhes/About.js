import React from 'react'
import { View, Text, Image, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-web';


export default function About(props) {

   const {name, image, pricce, categoria, rating,igredientes, preparo,tempo,navegacao} = props.route.params;
    return (
        <View style={{
            backgroundColor:"#fff",
            paddingLeft:5,
            paddingTop:20,
        }}>
            <Text style={{fontFamily:"forte",fontSize:30,}}>{name}</Text>
            
            <Text style={{fontFamily:"Anson",fontSize:15,color:"#FFC717",}}>$ {pricce}</Text>
            
            <View 
                style={{
                    flexDirection: "row",
                    margin: 1,
                    marginHorizontal: 1,
                    justifyContent:"space-between",
                }}
            >

                
                <View style={{width:"auto"}}>
                    <Text style={{color:"#C1BAA6",fontSize:12,fontFamily:"Segoe Marker", margin:8}}>Tipo</Text>
                        <Text style={{color:"#000",fontSize:16,fontWeight:"bold",fontFamily:"Script MT", margin:4}}>{categoria}</Text>
                    <Text style={{color:"#C1BAA6",fontSize:12,fontFamily:"Segoe Marker", marginTop:4}}>Tempo</Text>
                        <Text style={{color:"#000",fontSize:16,fontWeight:"bold",fontFamily:"Script MT", margin:4}}>{tempo}</Text>
                    <Text style={{color:"#C1BAA6",fontSize:12,fontFamily:"Segoe Marker", marginTop:4}}>Clasificação</Text>
                        <Text style={{color:"#000",fontSize:16,fontWeight:"bold",fontFamily:"Script MT", margin:4}}>{rating}</Text>
                </View>                
                <View style={{ width:"auto"}}>     
                    <Text style={{color:"#fff",fontSize:12,fontWeight:"bold"}}>TESsdsdddsdssdsdddddsdsdTETESTE</Text>            
                    <RestaurantImage image={image} />
                </View>
            </View>


            <View style={{borderBottomColor: '#DBDAD5', borderBottomWidth: 0.5,margin:5, marginVertical:10}}>
             <Text> </Text>
             </View>

            <View 
                style={{
                    flexDirection: "column",
                    marginHorizontal:7,
                    justifyContent:"space-between",
                }}>
                <View >
                    <Text style={{color:"#000",fontSize:16,fontWeight:"bold", marginVertical:7,}}>Ingredientes</Text>
                    <Text
                        style={{
                            textAlign:"justify",
                            fontSize:13,
                            color:"#B2AEA2",
                            marginLeft:5,
                        }}
                    >{igredientes}</Text>
                </View>

                <View>
                    <Text style={{color:"#000",fontSize:16,fontWeight:"bold", marginVertical:7,}}>Forma de Preparo</Text>
                    <Text
                    style={{
                            textAlign:"justify",
                            fontSize:13,
                            color:"#B2AEA2",
                            marginLeft:5,
                            elevation:10,
                        }}
                        >{preparo}</Text>
                </View>
            </View>

            
            <TouchableOpacity 
                style={{
                    backgroundColor:"#FFCE36",
                    padding:10,
                    borderRadius:15,
                    marginHorizontal:7,
                    marginVertical:22,
                }}
                onPress={()=>navegacao.navigate("Feito")} 
            >
                <Text style={{                    
                    color:"#000",
                    fontSize:18,
                    fontWeight:"bold",
                    fontFamily:"arial",
                    textAlign:"center",                    
                }}>Manda Vir</Text>
            </TouchableOpacity>
        </View>
    )
}

const RestaurantImage=(props)=>(
    <Image source={{uri:props.image}} style={{width:"100%", height:180, borderRadius:"10%", elevation:70,}}/>
);
