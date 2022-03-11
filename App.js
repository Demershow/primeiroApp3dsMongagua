
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { React, useState } from 'react';

export default function App() {
  const[valor1, setValor1] = useState();
  const[valor2, setValor2] = useState();
  const[resultado, setResultado] = useState();

  function somar(){
    setResultado (parseFloat(valor1) + parseFloat(valor2));
  }
  function subtrair(){
    setResultado (parseFloat(valor1) - parseFloat(valor2));
  }
  function multiplicar(){
    setResultado (parseFloat(valor1) * parseFloat(valor2));
  }
  function dividir(){
    setResultado (parseFloat(valor1) / parseFloat(valor2));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Testes!!!</Text>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor 1</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor 2</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={somar}
          >
            <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={subtrair}
          >
            <Text style={styles.textoBotao}>Subtrair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={multiplicar}
          >
            <Text style={styles.textoBotao}>Multiplicar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={dividir}
          >
            <Text style={styles.textoBotao}>Dividir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
            <Text style={styles.textoBloco}>Resultado: {resultado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
    fontSize:30,
    color: '#39b1b8',
  },
  texto:{
    color:'#000',
    fontSize:30
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#39b1b8',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }
});
