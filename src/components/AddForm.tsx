import { FC, useState } from 'react';

const AddForm: FC = () => {
  const [device, setDevice] = useState({
    deviceName: '',
    deviceType: '',
    ownerName: '',
    batteryStatus: ''
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
  const handleOnSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
        console.log(device);
  };
  return (
      <form onSubmit={handleOnSubmit} className='contact-form'>
        <div>
            <label>Device Name</label>
            <input
            className='deviceName'
            name='deviceName'
            value={device.deviceName}
            type='text'
            onChange = {handleOnChange}
            />
        </div>
        <div>
            <label>Device Type</label>
            <input
            className='deviceType'
            name='deviceType'
            value={device.deviceType}
            type='text'
            onChange = {handleOnChange}
            />
        </div>
        <div>
            <label>Owner Name</label>
            <input
            className='ownerName'
            name='ownerName'
            value={device.ownerName}
            type='text'
            onChange = {handleOnChange}
            />
        </div>
         <div>
            <label>Battery Status</label>
            <input
            className='batteryStatus'
            name='batteryStatus'
            value={device.batteryStatus}
            type='number'
            onChange = {handleOnChange}
            />
        </div>
        <div>
            <button>Add device</button>
        </div>
    </form>
  );
};
export default AddForm;
