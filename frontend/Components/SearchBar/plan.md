### Material UI

- researching search bar component in material UI DONE

0. Instal necessary dependencies:

- Roboto font (recommended for MUI) DONE
- Font icons
- SVG icons DONE

### Select menu 

- imported code block from https://mui.com/material-ui/react-select/ 
- refactored the categories from age to represent cinema, restaurant etc
- refactored the code such as the state from setAge etc to setCategory
- created a stylesheet for the search bar component so they now render beside each other

created stylesheet file and styled the global class

```
SearchBarStyles.module.css

```

Imported styles into our component

```
import styles from "./SearchBarStyles.module.css";
```
Passed global class styling to our box component 

``` 
<Box className={styles.global}>
```


1. Create a drop-down via MUI
2. Create a text input field via MUI
3. Create a button via MUI
4. Put those 3 in a div
5. Style the drop-down
6. Style the text input
7. Style the button
8. Style the global div
