import { FC } from 'react';
import * as React from 'react';
import { Action, Device } from '../reducer/devicesReducer';
import AddForm from './AddForm';
import Dialog from '@mui/material/Dialog';


interface UpdateProps {
    openUpdate: boolean;
    updateData: Device | undefined;
    toggleUpdate: () => void;
    dispatch: React.Dispatch<Action>;
}
const Update: FC<UpdateProps> = ({
    toggleUpdate,
    updateData,
    openUpdate,
    dispatch
}) => {



    return (
        <Dialog open={openUpdate} onClose={toggleUpdate}>

            <AddForm
                dispatch={dispatch}
                updateData={updateData}
                toggleUpdate={toggleUpdate}
            />

        </Dialog>
    );
};
export default Update;