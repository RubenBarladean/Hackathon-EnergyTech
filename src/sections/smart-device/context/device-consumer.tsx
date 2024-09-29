import {DeviceContext} from "./device-context";

type Props = {
    children: React.ReactNode;
};


export function DeviceConsumer({children}: Props) {
    return (
        <DeviceContext.Consumer>
            {(value) => value && children}
        </DeviceContext.Consumer>
    )
}