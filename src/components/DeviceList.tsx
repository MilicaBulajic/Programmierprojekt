import { FC } from 'react';
import { Device } from '../reducer/devicesReducer';
import DeviceProduct from './DeviceProduct';

interface DeviceListProps {
  devices: Device[];
}
const DeviceList: FC<DeviceListProps> = ({ devices }) => {
  return (
    <div>
      <span>All Devices</span>
      <div>
        <table>
          <thead>
            <tr>
              <th>Device Name</th>
              <th>Device Type</th>
              <th>Owner Name</th>
              <th>Battery status</th>
            </tr>
          </thead>
          <tbody>
            {devices.map(({ id, deviceName, deviceType, ownerName, batteryStatus }) => (
              <DeviceProduct
                key={id}
                deviceName={deviceName}
                deviceType={deviceType}
                ownerName={ownerName}
                batteryStatus={batteryStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DeviceList;