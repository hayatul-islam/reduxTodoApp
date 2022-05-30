import React, { useState } from 'react';
import { Box } from "@mui/system";
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addTodo, deleteTodo, removeTodo } from '../../store/todoAction';
import { useDispatch } from 'react-redux';

const Todos = () => {

    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();

    return (
        <Box sx={{
            py: 5,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ pb: 2 }} variant='h5'>Add Your List Here</Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Add Items..."
                        value={inputData}
                        onChange={e => setInputData(e.target.value)}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                        <AddCircleIcon onClick={() => dispatch(addTodo(inputData))} />
                    </IconButton>
                </Paper>
            </Box>
        </Box>
    );
};

export default Todos;