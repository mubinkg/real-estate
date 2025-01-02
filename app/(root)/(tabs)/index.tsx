import { View, Text, Button } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View
        style={{
            flex: 1,
            justifyContent:"center",
            alignItems:"center"
        }}
    >
      <Button title='Click Me' onPress={()=>alert('I hate fatema')}/>
    </View>
  )
}

export default Index