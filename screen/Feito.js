import React from 'react'
import { View, Text, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-web';

export default function Feito({navigation}) {
    return (
        <View style={{backgroundColor:"#fff"}}>
            <Image source="http://localhost/api/img/feito.gif" style={{width:"30%", height:180, alignSelf:"center"}}/>            
            <Text style={{alignSelf:"center", marginTop:"10", color:"#f00"}}>+1000 AOA valor do deslocamento</Text>
            <Text style={{alignSelf:"center", marginTop:"10", color:"#000"}}>Compra feita com sucesso...</Text>
            <TouchableOpacity 
                style={{
                    backgroundColor:"#FFCE36",
                    padding:10,
                    borderRadius:10,
                    marginHorizontal:7,
                    marginVertical:22,
                }}
                onPress={()=>navigation.navigate("home")} 
            >
                <Text style={{                    
                    color:"#000",
                    fontSize:18,
                    fontFamily:"arial",
                    textAlign:"center",                    
                }}>Feito</Text>
            </TouchableOpacity>
        </View>
    )
}
