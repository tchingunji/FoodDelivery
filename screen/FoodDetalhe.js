import React from 'react'
import { View, Text} from 'react-native'
import About from '../components/Detalhes/About'
import BottomTabs from '../components/Home/BottomTabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-web';

export default function FoodDetalhe({route}) {
    
    const{navegacao} = route.params;
    return (
        <View style={{backgroundColor:"#fff"}}>
            
            <About route={route}/>
            <BottomTabs navigation={navegacao}/>
        </View>
    )
}


const Icons = (props) => (
    <TouchableOpacity style={{padding:5, margin:13,}} >
        <View>
            <Icon name={props.icon} size={35} color="#000" 
            style={{
                marginBottom: 3,
                alignSelf: "left",                
            }} />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)