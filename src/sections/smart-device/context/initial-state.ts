import {SmartDeviceContextType} from "../types";
import {devicesData} from "../smart-devices.data";

export const initialState: SmartDeviceContextType = {
    devices: devicesData,
}