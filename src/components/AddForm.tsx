import { FC, useState } from 'react';
import { Action, Device } from '../reducer/devicesReducer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface AddFormProps {
  dispatch: React.Dispatch<Action>;
  updateData: Device | undefined;
  toggleUpdate: () => void;
}

const AddForm: FC<AddFormProps> = ({ dispatch, updateData, toggleUpdate }) => {
  const [device, setDevice] = useState({
    deviceName: updateData?.deviceName ? updateData.deviceName : '',
    deviceType: updateData?.deviceType ? updateData.deviceType : '',
    ownerName: updateData?.ownerName ? updateData.ownerName : '',
    batteryStatus: updateData?.batteryStatus ? updateData.batteryStatus : ''
  });
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDevice((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!updateData) {
      dispatch({
        type: 'ADD_DEVICE',
        payload: {
          id: Date.now(),
          ...device
        }
      })
      setDevice({
        deviceName: '',
        deviceType: '',
        ownerName: '',
        batteryStatus: ''
      });
    } else {
      dispatch({
        type: 'UPDATE_DEVICE',
        payload: {
          id: updateData.id,
          updates: {
            id: Date.now(),
            ...device
          }
        }
      });
      toggleUpdate();
    }
  };
  return (
    <Box
      onSubmit={handleOnSubmit}
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-basic"
          label="Device Name"
          variant="outlined"
          name='deviceName'
          value={device.deviceName}
          type='text'
          onChange={handleOnChange}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Device Type"
          variant="outlined"
          className='deviceType'
          name='deviceType'
          value={device.deviceType}
          type='text'
          onChange={handleOnChange}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Owner Name"
          variant="outlined"
          className='ownerName'
          name='ownerName'
          value={device.ownerName}
          type='text'
          onChange={handleOnChange}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Battery Status"
          variant="outlined"
          className='batteryStatus'
          name='batteryStatus'
          value={device.batteryStatus}
          type='number'
          onChange={handleOnChange}
        />
      </div>
      <div>
        <Button variant="contained" style={{ width: 198 }} type='submit' className='submit-btn'>{updateData ? 'Update device' : 'Add device'}</Button>
      </div>
    </Box>
  );
};
export default AddForm;
