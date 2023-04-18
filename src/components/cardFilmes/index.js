import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';

export default function CardFilmes(){
    return(
        <TouchableOpacity style ={styles.containerFilmes}>

            <Image style ={styles.imagemFilme} source = {require(`../../Img/homemaranha.jpg`)}/>
            <Text style ={styles.tituloFilmes}> Homem Aranha</Text>
            <Text style ={styles.notaFilmes}> 9.5 </Text>

        </TouchableOpacity>
    );  
}