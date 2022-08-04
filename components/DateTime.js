import  React, { useState , useEffect } from 'react'
import { View,Text,StyleSheet } from "react-native";

export const DateTime = (props) => {

    const [time,updateTime] = useState(new Date());
    useEffect(() => {
            const timer = setInterval(()=>updateTime(new Date()), 1000 )
            return function cleanup() {
            clearInterval(timer)
            }
    });
    return(
            <View style={styles.design}>
               <Text style={styles.numbers}>  {time.toLocaleTimeString()}  </Text>
            </View>
            )
            }
const styles = StyleSheet.create({
    design:{
        borderColor:'black'   
       },
    numbers:{
        fontSize:30,
        color:'white',
        fontWeight:'800'
      }
    })

export default DateTime