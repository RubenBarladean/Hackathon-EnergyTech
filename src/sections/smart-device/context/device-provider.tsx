import {DeviceContext} from "./device-context";
import {SmartDeviceContextType} from "../types";
import {useCallback, useEffect, useMemo, useReducer} from "react";
import {initialState} from "./initial-state";

type Props = {
    children: React.ReactNode;
};

enum Types {
    INITIAL = 'INITIAL',
    ALL_OFF = 'ALL_OFF',
    ALL_ON = 'ALL_ON',
    TOGGLE = 'TOGGLE'
}

type Payload = {
    [Types.INITIAL]: undefined,
    [Types.ALL_ON]: undefined,
    [Types.ALL_OFF]: undefined,
    [Types.TOGGLE]: {
        id: number
    };
};

type ActionMapType<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type: Key;
            payload: M[Key];
        };
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const reducer = (state: SmartDeviceContextType, action: ActionsType) => {
    if (action.type === Types.INITIAL) {
        return {
            ...initialState
        }
    }

    if (action.type === Types.TOGGLE) {
        return {
            devices: state.devices.map((device) => {
                if (device.id === action.payload.id) {
                    return {...device, toggle: !device.toggle}
                } else {
                    return device
                }
            })
        };
    }

    if (action.type === Types.ALL_ON) {
        return {
            devices: state.devices.map((device) => {
                return {...device, toggle: true}
            })
        }
    }

    if (action.type === Types.ALL_OFF) {
        return {
            devices: state.devices.map((device) => {
                return {...device, toggle: false}
            })
        }
    }

    return state;
};

export function DeviceProvider({children}: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const initialize = useCallback(() => {
        dispatch({
            type: Types.INITIAL,
        });
    }, []);

    useEffect(() => {
        initialize();
    }, []);

    const onToggleDevice = useCallback((id: number) => {
        dispatch({
            type: Types.TOGGLE,
            payload: {
                id,
            }
        });
    }, [])

    const onAllOnDevice = useCallback(() => {
        dispatch({
            type: Types.ALL_ON
        });
    }, [])


    const onAllOffDevice = useCallback(() => {
        dispatch({
            type: Types.ALL_OFF
        });
    }, [])

    const memoizedValue = useMemo(() => ({
        ...state,
        onToggleDevice,
        onAllOnDevice,
        onAllOffDevice
    }), [onToggleDevice, onAllOnDevice, onAllOffDevice, state])

    return <DeviceContext.Provider value={memoizedValue}>{children}</DeviceContext.Provider>
}