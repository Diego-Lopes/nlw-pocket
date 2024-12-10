import { Text, View } from "react-native";
import { Step } from "../step";
import { s } from "./styles";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>

      <Step title="Crie um cupom" description="Crie um cupom com o valor desejado e escolha um estabelecimento." />
    </View>
  )
}