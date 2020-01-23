
import React from 'react'
import {Text,StyleSheet} from 'react-native'

const ejemplo = () => {
  return(
    <Text style={estilos.titulo}>Este es mi ejemplo</Text>
  )
}

const estilos = StyleSheet.create({
    titulo:{
      fontSize:24,
      color:'white',
      textAlign:'center',
      padding: 12 ,
      borderStyle:'dotted',
      borderWidth:3,
      borderColor:'black',
      backgroundColor:'red'
    }
})

export default ejemplo
