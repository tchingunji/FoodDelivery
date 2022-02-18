import React from  "react";
import {View, SafeAreaView, ScrollView} from "react-native";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";
import Food from "../components/Home/Food";

import HeaderTabs from "../components/Home/HeaderTabs";
import SearchBar from "../components/Home/SearchBar"


const Home = ({navigation}) =>{
    return(
        <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor: "white", padding:15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories navigation={navigation}/>
                <Food navigation={navigation}/>
            </ScrollView>
            
            <BottomTabs navigation={navigation}/>
        </SafeAreaView>        
    );
}
export default Home; 