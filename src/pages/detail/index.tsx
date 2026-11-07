import React, { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {
  MauiButton,
  MauiCell,
  MauiCellGroup,
  MauiTag,
  MauiIcon,
  MauiDivider,
  MauiSwitch,
  MauiModal,
  MauiList,
  MauiListItem
} from '@macle-community/taro-plugin-macle/components-react'

export default function DetailPage() {
  const [likes, setLikes] = useState<number>(42)
  const [mauiClicks, setMauiClicks] = useState<number>(0)
  const [switchChecked, setSwitchChecked] = useState<boolean>(true)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [params, setParams] = useState<Record<string, string>>({
    id: 'MACLE-2026',
    title: 'Taro Detail Showcase',
    source: 'Index Page'
  })

  useEffect(() => {
    try {
      const instance = Taro.getCurrentInstance()
      const routerParams = instance?.router?.params
      if (routerParams && Object.keys(routerParams).length > 0) {
        setParams(routerParams)
      }
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
    <View className="p-4 bg-gray-50 min-h-screen">
      {/* Header Banner Card */}
      <View className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-5 mb-4 shadow-lg text-white">
        <View className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-2">
          Detail View Active
        </View>
        <Text className="text-2xl font-black block tracking-wide">Product / Item Detail</Text>
        <Text className="text-sm opacity-90 block mt-1">Multi-Page Routing & React 18 Lifecycle Verified</Text>
      </View>

      {/* Received Route Parameters */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
        <Text className="text-base font-bold text-gray-800 block mb-2">1. Received Route Parameters</Text>
        <View className="flex flex-col divide-y divide-gray-100 text-sm">
          <View className="flex flex-row justify-between py-2">
            <Text className="text-gray-500">Item ID:</Text>
            <Text className="font-semibold text-gray-900">{params.id || 'MACLE-2026'}</Text>
          </View>
          <View className="flex flex-row justify-between py-2">
            <Text className="text-gray-500">Title:</Text>
            <Text className="font-semibold text-gray-900">{params.title || 'Taro Detail Showcase'}</Text>
          </View>
          <View className="flex flex-row justify-between py-2">
            <Text className="text-gray-500">Source Page:</Text>
            <Text className="font-semibold text-emerald-600">{params.source || 'Index Page'}</Text>
          </View>
        </View>
      </View>

      {/* Subpage Reactive State */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
        <Text className="text-base font-bold text-gray-800 block mb-1">2. Independent Component State</Text>
        <Text className="text-xs text-gray-500 block mb-3">
          React state changes on this subpage independently without affecting the parent page.
        </Text>
        <View className="flex flex-row items-center justify-between bg-emerald-50/60 p-3 rounded-lg">
          <Text className="text-lg font-bold text-emerald-800">Likes: {likes}</Text>
          <Button
            className="m-0 px-4 py-1.5 text-sm font-medium bg-emerald-600 text-white rounded-lg active:opacity-80"
            onClick={() => setLikes(c => c + 1)}
          >
            👍 Like (+1)
          </Button>
        </View>
      </View>

      {/* Actions Section */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
        <Text className="text-base font-bold text-gray-800 block mb-2">3. Subpage Actions</Text>
        <View className="flex flex-col gap-2">
          <Button
            className="w-full m-0 py-2 text-sm font-medium bg-slate-800 text-white rounded-lg active:opacity-80"
            onClick={handleShowToast}
          >
            Test Taro.showToast()
          </Button>
          <Button
            className="w-full m-0 py-2.5 text-sm font-semibold bg-gray-900 text-white rounded-lg active:opacity-80 shadow-sm mt-2"
            onClick={handleBack}
          >
            ← Back to Index Page
          </Button>
        </View>
      </View>

      {/* MAUI Component Library Showcase */}
      <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-blue-100">
        <View className="flex flex-row items-center justify-between mb-2">
          <Text className="text-base font-bold text-blue-900 block">4. Native MAUI Components</Text>
          <MauiTag type="primary">v26.6.0</MauiTag>
        </View>
        <Text className="text-xs text-gray-500 block mb-4">
          Rendered via @macle-community/taro-plugin-macle native MAUI integration with two-way bindings.
        </Text>

        {/* MAUI Tags */}
        <View className="mb-4">
          <Text className="text-xs font-semibold text-gray-700 block mb-2">Tags:</Text>
          <View className="flex flex-row flex-wrap gap-2">
            <MauiTag type="primary">Primary</MauiTag>
            <MauiTag type="success">Success</MauiTag>
            <MauiTag type="warning">Warning</MauiTag>
            <MauiTag type="danger">Danger</MauiTag>
            <MauiTag plain type="primary">Plain</MauiTag>
          </View>
        </View>

        <MauiDivider />

        {/* MAUI Buttons */}
        <View className="mb-4">
          <Text className="text-xs font-semibold text-gray-700 block mb-2">Buttons (Clicked: {mauiClicks}):</Text>
          <View className="flex flex-col gap-2">
            <MauiButton
              type="primary"
              block
              onClick={() => {
                setMauiClicks(c => c + 1)
                Taro.showToast({ title: 'MAUI Button Clicked!', icon: 'none' })
              }}
            >
              Primary MAUI Button
            </MauiButton>

            <View className="flex flex-row gap-2">
              <MauiButton
                type="info"
                size="small"
                onClick={() => setMauiClicks(c => c + 1)}
              >
                Info Small
              </MauiButton>
              <MauiButton
                type="warning"
                size="small"
                onClick={() => setMauiClicks(c => c + 1)}
              >
                Warning Small
              </MauiButton>
              <MauiButton
                type="danger"
                size="small"
                plain
                onClick={() => setMauiClicks(c => c + 1)}
              >
                Danger Plain
              </MauiButton>
            </View>
          </View>
        </View>

        <MauiDivider />

        {/* MAUI Cell Group */}
        <View className="mb-4">
          <Text className="text-xs font-semibold text-gray-700 block mb-2">Cell Group:</Text>
          <MauiCellGroup>
            <MauiCell title="MAUI Platform" value="Active" />
            <MauiCell title="Two-Way Event Binding" value="Verified" />
            <MauiCell
              title="Interactive Switch"
              onClick={() => setSwitchChecked(!switchChecked)}
            >
              <MauiSwitch
                checked={switchChecked}
                onChange={(e: any) => setSwitchChecked(e.detail)}
              />
            </MauiCell>
          </MauiCellGroup>
        </View>

        <MauiDivider />

        {/* New 26.6.0 MAUI List & ListItem */}
        <View className="mb-4">
          <Text className="text-xs font-semibold text-gray-700 block mb-2">MAUI List & ListItem (v26.6.0):</Text>
          <MauiList header="DevSuite 26.6.0 Features" footer="Synced with official LG0001" radius>
            <MauiListItem title="Runtime Sync" brief="Webpack hooks & Custom APIs" arrow="right" extra="Active" />
            <MauiListItem
              title="Modal Component"
              brief="Click to preview native modal"
              arrow="right"
              extra="Open Modal"
              onClick={() => setModalVisible(true)}
            />
          </MauiList>
        </View>

        {/* New 26.6.0 MAUI Modal */}
        <MauiModal
          visible={modalVisible}
          title="MAUI 26.6.0 Modal"
          content="This modal is rendered using the new native MAUI 26.6.0 modal component integrated into Taro platform plugin."
          primaryButtonText="Confirm"
          cancelButtonText="Close"
          onClose={() => setModalVisible(false)}
          onPrimaryButtonTap={() => {
            setModalVisible(false)
            Taro.showToast({ title: 'Modal Confirmed!', icon: 'success' })
          }}
          onCancelButtonTap={() => setModalVisible(false)}
        />
      </View>
    </View>
  )
}
