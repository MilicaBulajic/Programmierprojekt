import { FC } from 'react';
import { Device, Action } from '../reducer/devicesReducer';
import { GrEdit } from 'react-icons/gr';

interface ExtraProps {
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}

const DeviceProduct: FC<Device & ExtraProps> = ({ id, deviceName, deviceType, ownerName, batteryStatus, handleEdit }) => {
  return (
    <tr>
      <td>{deviceName}</td>
      <td>{deviceType}</td>
      <td>{ownerName}</td>
      <td>{batteryStatus}</td>
      <td>
        <GrEdit size={20} onClick={() => handleEdit(id)} className='icon' />
      </td>
    </tr>
  );
};
export default DeviceProduct;