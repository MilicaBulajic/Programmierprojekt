import { useReducer } from 'react';
import Title from './components/Title';
import AddForm from './components/AddForm';
import { devicesReducer, State } from './reducer/devicesReducer';
import DeviceList from './components/DeviceList';

const initialState: State = {
  devices: []
};

function App() {
  const [state, dispatch] = useReducer(devicesReducer, initialState);
  console.log('state', state);
  return (
    <div>
      <Title />
      <AddForm dispatch={dispatch} />
      <hr />
      {state.devices.length > 0 && <DeviceList devices={state.devices} />}
    </div>
  );
}
export default App;