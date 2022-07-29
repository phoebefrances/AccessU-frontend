### :hatching_chick: Gallery and Logo Team Day 1 - Shabana and Kendall 



Added in the logo.png to /public folder. 
Added in wheelchair.png to /public folder. 
Added in pub.jpeg to /public folder. 
Added in Braille.jpeg to /public folder.

:incoming_envelope: Imported into /Components/Logo/index.js:

````
import Image from 'next/image'
````


 :incoming_envelope: Imported into /Components/Gallery/index.js : 

````

import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

````


:white_check_mark: Found documentation on Material UI on Cards, used examples to help create cards in /Components/Gallery/index.js. 

:white_check_mark: Created Cards using Card examples on Material UI website. 

:white_check_mark: Hardcoded in data for pub in /Components/Gallery/index.js

:white_check_mark: Used images from above in /Components/Gallery/index.js

:white_check_mark: Rendered Logo in /pages/index.js

:white_check_mark: Rendered Gallery in pages/index.js

</br></br>
----------------------------------------------------------

</br></br>

### :hatching_chick: Gallery and Logo Team Day 2 - Shabana and Kendall 

</br>

:white_check_mark: Moved everything from Gallery Component(/Components/Gallery/index.js) into Small Card Component(/Components/SmallCard/index.js)
</br>

:white_check_mark: Imported Small Card Component into Gallery

</br>

:white_check_mark: Set props in return for each of the SmallCard components rendered in return of Gallery Component(/Components/Gallery/index.js). 

</br>

:white_check_mark: Passed those props into the SmallCard Component(/Components/SmallCard/index.js)

