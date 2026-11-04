import React from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

export default function DetailPage() {
  const handleBack = () => {
    Taro.navigateBack()
  }

  return (
    <View className="detail-container">
      <View className="card">
        <Text className="title">Subpage Loaded!</Text>
        <Text className="desc">
          This proves that multi-page routing and lifecycle management work smoothly on Macle Mini Program framework.
        </Text>
        <Button className="btn btn-primary" onClick={handleBack}>
          Back to Index
        </Button>
      </View>
    </View>
  )
}
