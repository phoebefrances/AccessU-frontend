import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import styles from "./SearchBarStyles.module.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Custom Component containing category drop down menu, location search input field and search button 

export default function BasicSelect() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className={styles.global}>

      {/* Category drop down menu */}
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

      {/* Search Location input field  */}
      <TextField id="standard-basic" label="Standard" variant="standard" />

       {/* Search button  */}
      <Stack direction="row" spacing={4}>
      <Button variant="contained">Search</Button>
    </Stack>
    </Box>
  );
}

