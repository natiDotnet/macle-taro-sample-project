import React, { useState } from 'react'
import { View, Text, Button, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

declare const ma: any

export default function IndexPage() {
  const [count, setCount] = useState<number>(0)
  const [inputText, setInputText] = useState<string>('Hello Macle with Tailwind!')
  const [systemInfo, setSystemInfo] = useState<string>('')
  const [selectedTag, setSelectedTag] = useState<string>('Tailwind')

  // Toast test (via Taro)
  const handleShowToast = () => {
    Taro.showToast({
      title: 'Taro.showToast() Works!',
      icon: 'success',
      duration: 2000
    })
  }

  // System info test (via Taro)
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

  // Macle TradePay test (via Taro)
  const handleTaroTradePay = () => {
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

  // Direct native ma.showToast test
  const handleNativeShowToast = () => {
    try {
      if (typeof ma !== 'undefined' && typeof ma.showToast === 'function') {
        ma.showToast({
          title: 'Direct ma.showToast() Works!',
          icon: 'success',
          duration: 2000
        })
      } else {
        Taro.showToast({ title: 'ma object not found', icon: 'none' })
      }
    } catch (e: any) {
      console.error('[DEBUG] ma.showToast error:', e)
      Taro.showToast({ title: 'ma.showToast error: ' + (e?.message || e), icon: 'none' })
    }
  }

  // Direct native ma.tradePay test
  const handleNativeTradePay = () => {
    try {
      if (typeof ma !== 'undefined' && typeof ma.tradePay === 'function') {
        ma.tradePay({
          tradeNO: '20261105NATIVE001',
          orderStr: 'tradeNo=20261105NATIVE001',
          sign: 'DEMO_NATIVE_SIGN',
          success: (res: any) => {
            Taro.showToast({ title: 'ma.tradePay Success: ' + JSON.stringify(res), icon: 'success' })
          },
          fail: (err: any) => {
            Taro.showToast({ title: 'ma.tradePay Fail: ' + (err?.errMsg || JSON.stringify(err)), icon: 'none' })
          }
        })
      } else {
        Taro.showToast({ title: 'native ma.tradePay not available', icon: 'none' })
      }
    } catch (e: any) {
      console.error('[DEBUG] native ma.tradePay error:', e)
      Taro.showToast({ title: 'ma.tradePay error: ' + (e?.message || e), icon: 'none' })
    }
  }

  // Navigation test
  const handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/detail/index?id=MACLE-2026&title=Taro%20Detail%20Showcase&source=IndexPage'
    })
  }

  const tags = ['Tailwind', 'React 18', 'Taro 4', 'Macle Engine', 'TypeScript']

  return (
    <View className="p-4 bg-gray-50 min-h-screen">
      {/* Tailwind Banner Card */}
      <View className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-5 mb-4 shadow-lg text-white">
        <Text className="text-2xl font-black block tracking-wide">Macle × Tailwind CSS</Text>
        <Text className="text-sm opacity-90 block mt-1">Utility-First CSS compiled seamlessly for Macle Mini Programs</Text>
        <View className="flex flex-row flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <View
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                selectedTag === tag ? 'bg-white text-blue-700 shadow-sm' : 'bg-white/20 text-white'
              }`}
            >
              <Text>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Reactive State & Counter */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
        <Text className="text-base font-bold text-gray-800 block mb-1">1. Reactive State & Virtual DOM</Text>
        <Text className="text-xs text-gray-500 block mb-3">State mutations trigger Taro diffing & Macle setData.</Text>
        <View className="flex flex-row items-center justify-between bg-blue-50/60 p-3 rounded-lg">
          <Text className="text-lg font-bold text-blue-800">Count: {count}</Text>
          <Button
            className="m-0 px-4 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-lg active:opacity-80"
            onClick={() => setCount((c) => c + 1)}
          >
            Increment (+1)
          </Button>
        </View>
      </View>

      {/* Two-Way Binding */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
        <Text className="text-base font-bold text-gray-800 block mb-1">2. Two-Way Input Binding</Text>
        <Input
          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 mb-2 focus:border-blue-500"
          value={inputText}
          onInput={(e) => setInputText(e.detail.value)}
          placeholder="Type here..."
        />
        <View className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg">
          <Text className="text-xs text-emerald-800 font-mono">Live Value: {inputText}</Text>
        </View>
      </View>

      {/* Taro & Native Macle APIs */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
        <Text className="text-base font-bold text-gray-800 block mb-2">3. Taro & Native Macle APIs (ma.* Bridge)</Text>
        <View className="flex flex-col gap-2">
          {/* Taro API Tests */}
          <Button
            className="w-full m-0 py-2 text-sm font-medium bg-slate-800 text-white rounded-lg active:opacity-80"
            onClick={handleShowToast}
          >
            Test Taro.showToast()
          </Button>
          <Button
            className="w-full m-0 py-2 text-sm font-medium bg-slate-800 text-white rounded-lg active:opacity-80"
            onClick={handleGetSystemInfo}
          >
            Test Taro.getSystemInfo()
          </Button>
          {systemInfo ? (
            <View className="p-2.5 bg-gray-100 rounded text-xs text-gray-700">
              <Text>{systemInfo}</Text>
            </View>
          ) : null}
          <Button
            className="w-full m-0 py-2 text-sm font-medium bg-blue-700 text-white rounded-lg active:opacity-80"
            onClick={handleTaroTradePay}
          >
            Test Taro.tradePay()
          </Button>

          {/* Direct Native ma.* Tests */}
          <Button
            className="w-full m-0 py-2 text-sm font-medium bg-emerald-600 text-white rounded-lg active:opacity-80"
            onClick={handleNativeShowToast}
          >
            Test Native ma.showToast()
          </Button>
          <Button
            className="w-full m-0 py-2 text-sm font-medium bg-amber-600 text-white rounded-lg active:opacity-80"
            onClick={handleNativeTradePay}
          >
            Test Native ma.tradePay()
          </Button>
        </View>
      </View>

      {/* Navigation */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
        <Text className="text-base font-bold text-gray-800 block mb-2">4. Mini Program Navigation</Text>
        <Button
          className="w-full m-0 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-lg active:opacity-80 shadow-sm"
          onClick={handleNavigate}
        >
          Navigate to Detail Page →
        </Button>
      </View>
    </View>
  )
}
