import { useEffect, useReducer, useState } from 'react';
import Title from './components/Title';
import AddForm from './components/AddForm';
import { devicesReducer, State, Device } from './reducer/devicesReducer';
import DeviceList from './components/DeviceList';
import Update from './components/Update';

const initialState: State = {
  devices: []
};

function App() {
  const [state, dispatch] = useReducer(devicesReducer, initialState);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [updateData, setUpdateData] = useState<Device | undefined>(undefined);
  useEffect(() => {
    if (!openUpdate) {
      setUpdateData(undefined);
    }
  }, [openUpdate]);
  const toggleUpdate = () => {
    setOpenUpdate((show) => !show);
  };
  const handleEdit = (id: number) => {
    setUpdateData(state.devices.find((device) => device.id === id));
    toggleUpdate();
  };
  return (
    <div>
      <Title />
      <AddForm
        dispatch={dispatch}
        updateData={updateData}
        toggleUpdate={toggleUpdate}
      />
      <hr />
      {state.devices.length > 0 && (
        <DeviceList
          devices={state.devices}
          handleEdit={handleEdit}
          dispatch={dispatch}
        />
      )}
      <Update
        openUpdate={openUpdate}
        updateData={updateData}
        toggleUpdate={toggleUpdate}
        dispatch={dispatch}
      />
    </div>
  );
}
export default App;