import { Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const Board = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Board screenssss</Text>
    </SafeAreaView>
  )
}

export default Board

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    text: {
        color: "#fff"
    }
})
