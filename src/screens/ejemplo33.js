

import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Componente = () => {
  return(
    <Text style={estilo.mensaje}>Un texto cualquiera que viene del ejemplo 33.</Text>
  )
}

const estilo = StyleSheet.create({
  mensaje:{
    textTransform:'uppercase',
    fontWeight: 'bold',
    color:'rgba(255,25,55,0.7)'
  }
})



export default Componente