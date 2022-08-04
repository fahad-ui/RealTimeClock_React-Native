import React from "react";
import { View,Text,StyleSheet } from "react-native";
import DateTime from "./components/DateTime";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tempp}>
      <Text>
       <DateTime title={'Time'} />
      </Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center'
    
    
  },
  tempp:{
    backgroundColor:'black',
    height:100,
    marginTop:60,
    justifyContent:"center",
    borderRadius:7
  }
});
