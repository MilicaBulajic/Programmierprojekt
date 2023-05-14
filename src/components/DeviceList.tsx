import { FC } from 'react';
import { Device, Action } from '../reducer/devicesReducer';
import DeviceProduct from './DeviceProduct';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface DeviceListProps {
  devices: Device[];
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}

const DeviceList: FC<DeviceListProps> = ({ devices, handleEdit, dispatch }) => {
  return (
    <div>
      <span>All Devices</span>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Device Name</TableCell>
              <TableCell>Device Type</TableCell>
              <TableCell>Owner Name</TableCell>
              <TableCell>Battery status</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices.map((device) => (
              <DeviceProduct
                key={device.id}
                {...device}
                handleEdit={handleEdit}
                dispatch={dispatch}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default DeviceList;