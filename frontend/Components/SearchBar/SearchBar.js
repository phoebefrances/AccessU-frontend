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


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';

// const currencies = [
//   {
//     value: 'Cinema',
//     label: 'Cinema',
//   },
//   {
//     value: '',
//     label: 'Restaurant',
//   },
//   {
//     value: '',
//     label: 'Gym',
//   },
//   {
//     value: '',
//     label: 'Shop',
//   },
//   {
//     value: '',
//     label: 'Cafe',
//   },
// ];

// export default function SelectTextFields() {
//   const [currency, setCurrency] = React.useState('EUR');

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
   
//       <div>
//         <TextField
//           id="standard-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleChange}
//           helperText="Please select your currency"
//           variant="standard"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
       
//       </div>
//     </Box>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={'Cinema'}>Cinema</MenuItem>
          <MenuItem value={'Restaurant'}>Restaurant</MenuItem>
          <MenuItem value={'Gym'}>Gym</MenuItem>
          <MenuItem value={'Shop'}>Shop</MenuItem>
          <MenuItem value={'Cafe'}>Cafe</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
