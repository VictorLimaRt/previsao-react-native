import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import ForeCast from '../../components/ForeCast';

const mylist = [
    {
        "date": "01/03",
        "weekday": "Seg",
        "max": 25,
        "min": 17,
        "description": "Tempestades isoladas",
        "condition": "storm"
    },
    {
        "date": "02/03",
        "weekday": "Ter",
        "max": 27,
        "min": 18,
        "description": "Tempo Nublado",
        "condition": "cloud"
    },
    {
        "date": "03/03",
        "weekday": "Qua",
        "max": 27,
        "min": 18,
        "description": "Tempestades isoladas",
        "condition": "storm"
    },
    {
        "date": "04/03",
        "weekday": "Qui",
        "max": 27,
        "min": 18,
        "description": "Céu Limpo",
        "condition": "clear_day"
    },
    {
        "date": "05/03",
        "weekday": "Sex",
        "max": 27,
        "min": 18,
        "description": "Dia Chuvoso",
        "condition": "rain"
    },
];

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Menu />
            <Header/>
            <Conditions />
            <FlatList 
                horizontal={true}
                contentContainerStyle={{
                    paddingBottom: '5%'
                }}
                style={styles.list}
                data={mylist}
                keyExtractor={ item => item.date}
                renderItem={ ({item}) => <ForeCast data={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container:{
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#e8f0ff',
   paddingTop: '5%',

   },
   list:{
       marginTop: 10,
       marginLeft: 10,
   }
});

