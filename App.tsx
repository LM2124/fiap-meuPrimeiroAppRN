import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';


const frases = [
  "Recombobulando o Turbo-Encabulador...",
  "Deletando system32...",
  "Deletando node_modules...",
  "Falando mal do Angular...",
  "Inventando polêmica no Reddit...",
  "Liderando uma guerra contra o Electron...",
  "Considerando trocar pra backend...",
  "Ajustando coeficiente de Squimble...",
  "Desafiando Deus...",
  "Pedindo ideias pro ChatGPT...",
]

function fraseAleatoria() {
  return frases[Math.floor(Math.random() * frases.length)];
}

const Frase = () => {
  // https://legacy.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often
  const [frase, setFrase] = useState("");

  useEffect(() => {
    setFrase(_ => fraseAleatoria())

    const interval = setInterval(() => {
      setFrase(_ => fraseAleatoria())
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return <Text>{frase}</Text>
};

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
      <Frase />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
