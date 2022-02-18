import React from 'react'
import { View, Text, TextInput} from 'react-native'

export default function SearchBar() {

    

    return (
        <View>            
            <TextInput            
            placeholder="Ingredientes"
                style={{                    
                        backgroundColor:"#eee",                        
                        fontWeight:"700",
                        marginTop: 7,
                        padding:10,                    
                        backgroundColor:"#eee",
                        borderRadius:50,
                        flexDirection: "row",                        
                        marginRight:10,                
                }}
                onKeyPress={()=>console.log("escrevi")}
            />
        </View>
    )
}
