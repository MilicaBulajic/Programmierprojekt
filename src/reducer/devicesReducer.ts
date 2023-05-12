export interface Device {
    deviceName: string;
    deviceType: string;
    ownerName: string;
    batteryStatus: string;
}
export interface Action {
  type: 'ADD_DEVICE'
  payload: Device;
}
export interface State {
  devices: Device[];
}


export const devicesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_DEVICE':
      return {
        ...state,
        devices: [...state.devices, action.payload]
      };
    default:
      return state;
  }
};