import React, { useState } from 'react'
import { View, Text, Button, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

export default function IndexPage() {
  const [count, setCount] = useState<number>(0)
  const [inputText, setInputText] = useState<string>('Hello Macle')
  const [systemInfo, setSystemInfo] = useState<string>('')

  // Toast test
  const handleShowToast = () => {
    Taro.showToast({
      title: 'Taro on Macle!',
      icon: 'success',
      duration: 2000
    })
  }

  // System info test
  const handleGetSystemInfo = async () => {
    try {
      console.log('[DEBUG] calling Taro.getSystemInfo()...')
      const res = await Taro.getSystemInfo()
      console.log('[DEBUG] getSystemInfo result:', res)
      const infoStr = `${res.brand || 'Device'} (${res.system || 'Macle OS'}) - ${res.screenWidth}x${res.screenHeight}`
      setSystemInfo(infoStr)
      Taro.showToast({ title: 'Info: ' + res.screenWidth + 'x' + res.screenHeight, icon: 'success' })
    } catch (err: any) {
      console.error('[DEBUG] getSystemInfo error:', err)
      Taro.showToast({ title: 'Failed to get info: ' + (err?.message || err), icon: 'none' })
    }
  }

  // Macle TradePay test
  const handleTradePay = () => {
    if (typeof (Taro as any).tradePay === 'function') {
      (Taro as any).tradePay({
        tradeNO: '20261104SAMPLE001',
        orderStr: 'tradeNo=20261104SAMPLE001',
        sign: 'DEMO_SIGN_HASH',
        success: (res: any) => {
          Taro.showToast({ title: 'Pay Success: ' + JSON.stringify(res), icon: 'success' })
        },
        fail: (err: any) => {
          Taro.showToast({ title: 'Pay Fail: ' + (err.errMsg || JSON.stringify(err)), icon: 'none' })
        }
      })
    } else {
      Taro.showToast({ title: 'tradePay not available', icon: 'none' })
    }
  }

  // Navigation test
  const handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/detail/index'
    })
  }

  return (
    <View className="index-container">
      <View className="header-card">
        <Text className="title">Macle × Taro 4</Text>
        <Text className="subtitle">React Reconciler + Macle Native Runtime</Text>
      </View>

      {/* Counter Section (Demonstrates React Virtual DOM -> setData Bridge) */}
      <View className="card">
        <Text className="card-title">1. Reactive State & Virtual DOM</Text>
        <Text className="card-desc">Clicking modifies React state, Taro diffs the tree, and calls Macle's setData.</Text>
        <View className="counter-row">
          <Text className="counter-text">Counter: {count}</Text>
          <Button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>
            Increment (+1)
          </Button>
        </View>
      </View>

      {/* Input Binding Section */}
      <View className="card">
        <Text className="card-title">2. Input Two-Way Binding</Text>
        <Input
          className="text-input"
          value={inputText}
          onInput={(e) => setInputText(e.detail.value)}
          placeholder="Type something..."
        />
        <Text className="input-preview">Live Value: {inputText}</Text>
      </View>

      {/* Native APIs Section */}
      <View className="card">
        <Text className="card-title">3. Native Macle APIs (ma.* Bridge)</Text>
        <Button className="btn btn-action" onClick={handleShowToast}>
          Test Taro.showToast()
        </Button>
        <Button className="btn btn-action" onClick={handleGetSystemInfo}>
          Test Taro.getSystemInfo()
        </Button>
        <Text className="sys-info">{systemInfo || 'System Info: Not fetched yet'}</Text>
        <Button className="btn btn-warning" onClick={handleTradePay}>
          Test Macle ma.tradePay()
        </Button>
      </View>

      {/* Navigation Section */}
      <View className="card">
        <Text className="card-title">4. Mini Program Navigation</Text>
        <Button className="btn btn-primary" onClick={handleNavigate}>
          Navigate to Detail Page
        </Button>
      </View>
    </View>
  )
}
