import {useContext} from "react";
import {DeviceContext} from "../context";

export const useDevicesContext = () => {
    return useContext(DeviceContext);
}