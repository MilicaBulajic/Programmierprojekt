export interface Device {
    id: number;
    deviceName: string;
    deviceType: string;
    ownerName: string;
    batteryStatus: string;
}
export interface Update {
  id: number;
  updates: Device;
}
export interface Action {
  type: 'ADD_DEVICE'| 'UPDATE_DEVICE'
  payload: Device | Update;
}
export interface State {
  devices: Device[];
}


export const devicesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_DEVICE':
      return {
        ...state,
        devices: [...state.devices, action.payload as Device]
      };
    case 'UPDATE_DEVICE':
      const { id, updates } = action.payload as Update;
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.id === id) {
            return {
              ...device,
              ...updates
            };
          }
          return device;
        })
      };
    default:
      return state;
  }
};