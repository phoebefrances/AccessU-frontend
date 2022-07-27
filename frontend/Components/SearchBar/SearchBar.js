import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import styles from "./SearchBarStyles.module.css";

export default function BasicSelect() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className={styles.global}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"Cinema"}>Cinema</MenuItem>
          <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
          <MenuItem value={"Gym"}>Gym</MenuItem>
          <MenuItem value={"Shop"}>Shop</MenuItem>
          <MenuItem value={"Cafe"}>Cafe</MenuItem>
        </Select>
      </FormControl>
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}

// export default function BasicTextFields() {
//     return (
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//         <TextField id="filled-basic" label="Filled" variant="filled" />
//         <TextField id="standard-basic" label="Standard" variant="standard" />
//       </Box>
//     );
//   }
