/// <reference types="@tarojs/taro" />

/**
 * Macle Native Bridge API global object
 */
declare const ma: any

declare namespace Taro {
  interface TaroStatic {
    tradePay?: (options: any) => Promise<any>
    startPay?: (options: any) => Promise<any>
    gotoBrowser?: (options: any) => Promise<any>
    getKbzBackendServerUrl?: (options?: any) => Promise<any>
    capsuleStyle?: (options: any) => Promise<any>
    setCapsuleShow?: (options: any) => Promise<any>
    setSwipeBack?: (options: any) => Promise<any>
    getsmallappinfo?: (options?: any) => Promise<any>
    getStatusBarHeight?: (options?: any) => Promise<any>
    setCustomEvent?: (options: any) => Promise<any>
    removeCustomEvent?: (options: any) => Promise<any>
    createTimer?: (options: any) => Promise<any>
    cancelTimer?: (options: any) => Promise<any>
  }
}

