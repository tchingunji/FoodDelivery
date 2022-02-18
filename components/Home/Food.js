import React from 'react'
import { View, Text , Image} from 'react-native'
import { TouchableOpacity } from 'react-native-web';

const localComidas=[
    {
        name: "Pizza Peperoni",
        image_url: "http://localhost/my-project/assets/s-img-2.jpg",
        categories: ["Entrada ","Sobremesa"],
        pricce: "8000 AO",
        rating: 8.9,
        igre: "Fermento,Iogurte,Farinha",
        preparo: "Em uma tigela misture a farinha e o iogurte; misture a massa até formar uma bola. Coloque a massa em uma superfície enfarinhada e deixe sovar por 5-8 minutos. Com um rolo de macarrão, deixe a massa em formato de pizza e depois adicione as coberturas. Pré-aqueça o forno. Coloque a pizza no forno em temperatura máxima por 12 minutos.",
        tempo:"1h 2min",
    },
    {
        name: "Galão & Pão",
        image_url: "http://localhost/my-project/assets/s-img-6.jpg",
        categories: ["Café ","Bar"],
        pricce: "2500 AO",
        rating: 3.7,
        igre: "",
        preparo: "",
        tempo:"10min",
    },
    {
        name: "Prego no Pão",
        image_url: "http://localhost/my-project/assets/g-2.jpg",
        categories: ["Refeição ","Bar"],
        pricce: "1600 AO",
        rating: 10,
        igre: "",
        preparo: "",
        tempo:"30min",
    },
    {
        name: "Pão Tostado & ovo",
        image_url:"http://localhost/my-project/assets/g-7.jpg",
        categories: ["Refeição ","Bar"],
        pricce: "2000 AO",
        rating: 5.5,
        igre: "Fermento,Iogurte,Farinha",
        preparo: "Em uma tigela, misture a farinha e o iogurte; misture a massa até formar uma bola. Coloque a massa em uma superfície enfarinhada e deixe sovar por 5-8 minutos. Com um rolo de macarrão, deixe a massa em formato de pizza e depois adicione as coberturas. Pré-aqueça o forno. Coloque a pizza no forno em temperatura máxima por 12 minutos.",
        tempo:"20min",
    },


    {
        name: "Calulu",
        image_url: "http://localhost/my-project/assets/n-1.jpg",
        categories: ["Entrada ","Sobremesa"],
        pricce: "8000 AO",
        rating: 8.9,
        igre: "4 postas grossas de peixe corvina (ou outro tipo de peixe fresco e grosso), 4 postas de peixe corvina seco (pode ser outro tipo de peixe) 300 g de quiabo, 2 beringelas, 1 cebola média picada, 3 dentes de alho, 1 folha de louro, 2 pacotes de espinafres, 1/2 dl de oléo de palma, 1 tomate médio",
        preparo: "Escame as 4 postas do peixe fresco e também do peixe seco. Esmague os 3 dentes de alho e tempere todo o peixe. Não precisa deixar repousar. Retire as pontas dos quiabos. Descasque as beringelas e corte-as aos quadrados e coloque ambos num recipiente com água. Retire a pele da cebola e rale-a. Faça o mesmo com o tomate. Lave os espinafres com bastante água e reserve-os tal como fez com os outros ingredientes até a preparação do peixe. Num tacho largo comece por colocar uma parte da cebola ralada, uma parte do tomate picado, as postas de peixes (fresco e seco), os espinafres, a folha de louro, a beringela aos quadrados, o restante da cebola, o tomate e por cima o óleo de palma. Leve ao fogo médio para que todos os ingredientes cozinhem lentamente. Não adicione água pois os ingredientes utilizados já contém muita água. Após 30 minutos adicione os quiabos. Deixe cozinhar por volta de 40 minutos sempre tendo atenção para que o peixe não se desmanche. Deve engrossar o molho do calulu com farinha de milho ou farinha de mandioca. Desfaça em água uma colher de sopa de farinha (das indicadas), e misture ao cozido. Deixe no fogo por mais 2 minutinhos. Retire do tacho.",
        tempo:"1h 2min",
    },
    {
        name: "Cachupa",
        image_url: "http://localhost/my-project/assets/n-2.jpg",
        categories: ["Café ","Bar"],
        pricce: "2500 AO",
        rating: 3.7,
        igre: "4 xícaras de milho batido, 200 g de feijão, 200 g de carne bovina, 300 g de pés de porco, 200 g de bacon, 2 batatas grandes, 4 chouriços, 2 mandiocas, 2 batatas doces, 200 g de couve, 2 cebolas, 2 folhas de louro, 2 dentes de alho, Azeite a gosto, Sal e pimenta a gosto",
        preparo: "Coloque em uma panela a carne em pedaços, o bacon, um pé de porco, os chouriços, pimenta, sal ou caldo de carne. Na panela de pressão ferva durante 30 minutos os grãos de milho e os feijões, cobertos com água, 1 cebola, 1 fio de azeite, 1 folha de louro e sal. Depois, em uma panela maior, coloque os feijões com o milho, cubra com água e leve ao fogo para ferver. Acrescente a carne marinada. Quando tudo estiver quase cozido, acrescente as batatas e a couve.Terminado o cozimento, deixe repousar por alguns minutos e está pronto para ser servido. A cachupa deve ficar um pouco líquida.",
        tempo:"10min ",
    },
    {
        name: "Pão com carne",
        image_url: "http://localhost/my-project/assets/g-2.jpg",
        categories: ["Refeição ","Bar"],
        pricce: "1600 AO",
        rating: 10,
        igre: "",
        preparo: "",
        tempo:"30min",
    },
    {
        name: "Tosta",
        image_url:"http://localhost/my-project/assets/g-7.jpg",
        categories: ["Refeição ","Bar"],
        pricce: "2000 AO",
        rating: 5.5,
        igre: "Fermento,Iogurte,Farinha",
        preparo: "Em uma tigela, misture a farinha e o iogurte; misture a massa até formar uma bola. Coloque a massa em uma superfície enfarinhada e deixe sovar por 5-8 minutos. Com um rolo de macarrão, deixe a massa em formato de pizza e depois adicione as coberturas. Pré-aqueça o forno. Coloque a pizza no forno em temperatura máxima por 12 minutos.",
        tempo:"20min",
    },
];

export default function Food({navigation, ...props}) {    
     
    return (
        <>
            {localComidas.map((comida, index)=>(
            <TouchableOpacity 
                key={index}
                activeOpacity={0.7} 
                style={{
                    shadowColor:"#000",
                    shadowOffset:{width:0, height: 2},
                    shadowRadius: 6,
                    shadowOpacity:0.26,
                    elevation: 8,
                    marginBottom:10,
                    shadowOffset:{  width: 50,  height: 50,  },
                    shadowColor: '#eee',
                    shadowOpacity: 0.7,
                }} 
                onPress={()=> 
                    navigation.navigate("FoodDetalhe",{
                        name: comida.name,
                        image: comida.image_url,
                        pricce: comida.pricce,
                        categoria: comida.categories,
                        rating: comida.rating,
                        igredientes: comida.igre,
                        preparo: comida.preparo,
                        tempo:comida.tempo,
                        navegacao: navigation,
                    })
                } 
            >
                <View
                    style={{marginTop:10, padding:15, backgroundColor:"#fff"}}                     
                >
                    <RestaurantImage image={comida.image_url}/>
                    <RestaurantInfo
                    name={comida.name}
                    rating={comida.rating}
                    tempo={comida.tempo}
                    />
                </View>
            </TouchableOpacity>
            ))}
        </>
    );
}
const RestaurantImage = (props) =>(
    <>
        <Image 
            source={{
                uri: props.image,
                }}
            style={{width:"100%", height:180}}
        />
        <TouchableOpacity style={{position:'absolute', right:20, top:20}}>
            
        </TouchableOpacity>
    </>
);
const RestaurantInfo=(props)=>(
    <View 
    style={{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10,
        }}>
        <View>
            <Text style={{fontSize:15,fontWeight:"bold"}}>
                {props.name}
            </Text>
            <Text style={{fontSize:13,color:"gray"}}>
                {props.tempo}
            </Text>
        </View>
        <View
         style={{
            backgroundColor:"#eee",
            height:30, 
            width:30,
            alignItems:"center",
            borderRadius:15,
            }}>
            <Text >{props.rating}</Text>
        </View>
    </View>    
);
