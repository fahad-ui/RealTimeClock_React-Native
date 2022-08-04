import  React, { useState , useEffect } from 'react'
import { View,Text,StyleSheet } from "react-native";

  const dateTime = props => {

    const[date,setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
        clearInterval(timer)
        }
    });
    return (
            <View>
            <Text> Current Time : {date.toLocaleTimeString()}</Text>
            </View>
            )
            }

            
export default dateTime