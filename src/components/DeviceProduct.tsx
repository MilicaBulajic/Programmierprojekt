import { FC } from 'react';
import { Device } from '../reducer/devicesReducer';

const DeviceProduct: FC<Device> = ({ deviceName, deviceType, ownerName, batteryStatus }) => {
  return (
    <tr>
      <td>{deviceName}</td>
      <td>{deviceType}</td>
      <td>{ownerName}</td>
      <td>{batteryStatus}</td>
      
    </tr>
  );
};
export default DeviceProduct;