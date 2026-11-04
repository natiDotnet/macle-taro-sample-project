import React, { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

export default function DetailPage() {
  const [likes, setLikes] = useState<number>(10)
  const [params, setParams] = useState<Record<string, string>>({})

  useEffect(() => {
    try {
      const instance = Taro.getCurrentInstance()
      const routerParams = instance?.router?.params || {}
      setParams(routerParams)
    } catch (e) {
      console.warn('Failed to load router params:', e)
    }
  }, [])

  const handleBack = () => {
    Taro.navigateBack()
  }

  const handleShowToast = () => {
    Taro.showToast({
      title: 'Toast on Detail!',
      icon: 'success',
      duration: 1500
    })
  }

  return (
    <View className="min-h-screen p-4 bg-gray-50">
      {/* Header Banner */}
      <View className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-5 mb-4 shadow-lg text-white">
        <View className="inline-block px-2.5 py-0.5 bg-white/20 rounded-full text-xs font-semibold mb-2">
          <Text>Detail View Active</Text>
        </View>
        <Text className="text-xl font-bold block">Page: pages/detail/index</Text>
        <Text className="text-xs opacity-85 block mt-1">Multi-page Routing & Tailwind CSS Verified</Text>
      </View>

      {/* Query Parameters Card */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
        <Text className="text-base font-bold text-gray-800 block mb-3 border-l-4 border-emerald-500 pl-2">
          1. Received Route Parameters
        </Text>
        <View className="flex flex-row justify-between py-2 border-b border-gray-100 text-sm">
          <Text className="text-gray-400">Item ID:</Text>
          <Text className="text-gray-800 font-semibold">{params.id || 'MACLE-2026'}</Text>
        </View>
        <View className="flex flex-row justify-between py-2 border-b border-gray-100 text-sm">
          <Text className="text-gray-400">Title:</Text>
          <Text className="text-gray-800 font-semibold">{params.title || 'Taro Detail Showcase'}</Text>
        </View>
        <View className="flex flex-row justify-between py-2 text-sm">
          <Text className="text-gray-400">Source:</Text>
          <Text className="text-gray-800 font-semibold">{params.source || 'Index Page'}</Text>
        </View>
      </View>

      {/* Detail Reactivity Card */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
        <Text className="text-base font-bold text-gray-800 block mb-1 border-l-4 border-emerald-500 pl-2">
          2. State & Virtual DOM
        </Text>
        <Text className="text-xs text-gray-500 block mb-3">
          This subpage is fully reconciled by React 18 through Taro-Macle with independent component state.
        </Text>
        
        <View className="flex flex-row items-center justify-between bg-emerald-50 p-3 rounded-lg">
          <Text className="text-base font-bold text-emerald-900">Reactivity Likes: {likes}</Text>
          <Button
            className="m-0 px-4 py-1.5 text-sm font-semibold bg-emerald-600 text-white rounded-lg active:opacity-80"
            onClick={() => setLikes((l) => l + 1)}
          >
            👍 Like (+1)
          </Button>
        </View>
      </View>

      {/* Actions & Native APIs */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
        <Text className="text-base font-bold text-gray-800 block mb-3 border-l-4 border-emerald-500 pl-2">
          3. Subpage Actions
        </Text>
        <View className="flex flex-col gap-2">
          <Button
            className="w-full m-0 py-2 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-lg active:opacity-80"
            onClick={handleShowToast}
          >
            Test Taro.showToast()
          </Button>
          <Button
            className="w-full m-0 py-2.5 text-sm font-semibold bg-slate-900 text-white rounded-lg active:opacity-80 mt-2"
            onClick={handleBack}
          >
            ← Back to Index Page
          </Button>
        </View>
      </View>
    </View>
  )
}
