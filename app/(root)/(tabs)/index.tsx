import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View
        style={{
            flex: 1,
            justifyContent:"center",
            alignItems:"center"
        }}
    >
      <Text className='text-red-600'>Wellcome to restate</Text>
      <Link href="/sign-in">Sign In</Link>
    </View>
  )
}

export default Index