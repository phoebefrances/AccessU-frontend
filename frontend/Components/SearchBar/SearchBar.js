// import React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// export default function BasicTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" /> */}
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'Cinema',
    label: 'Cinema',
  },
  {
    value: '',
    label: 'Restaurant',
  },
  {
    value: '',
    label: 'Gym',
  },
  {
    value: '',
    label: 'Shop',
  },
  {
    value: '',
    label: 'Cafe',
  },
];

export default function SelectTextFields() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
   
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
      </div>
    </Box>
  );
}
