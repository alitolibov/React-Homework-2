import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {
  const [age, setAge] = React.useState('10');

  const handleChange = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 86, background: '#00AC73', borderRadius: 15, display: 'flex', alignItems: 'center', outline: 'none', overflow: 'hidden' }}>
      <FormControl fullWidth sx={{outline: 'none', overflow: 'hidden'}}>
        <Select sx={{outline: "none", overflow: 'hidden'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}><img className='w-[24px] h-[24px]' src='../../public/rus.png' alt="" /></MenuItem>
          <MenuItem value={20}><img className='w-[24px] h-[24px]' src="https://cdn1.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_United_Kingdom_-_Circle-1024.png" alt="" /></MenuItem>
          <MenuItem value={30}><img className='w-[24px] h-[24px]' src="https://cdn0.iconfinder.com/data/icons/world-flags-1/100/uzbekistan-2-1024.png" alt="" /></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}