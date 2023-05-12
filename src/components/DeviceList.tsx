import { FC } from 'react';
import { Device } from '../reducer/devicesReducer';

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
                <tr key={id}>
                <td>{deviceName}</td>
                <td>{deviceType}</td>
                <td>{ownerName}</td>
                <td>{batteryStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DeviceList;