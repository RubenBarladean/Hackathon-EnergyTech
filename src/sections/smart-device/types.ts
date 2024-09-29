export type DeviceType = {
    id: number
    image: string
    name: string
    month: number
    hour: number
    toggle: boolean
}

export type SmartDeviceContextType = {
    devices: DeviceType[]
    onToggleDevice?: (id: number) => void
}