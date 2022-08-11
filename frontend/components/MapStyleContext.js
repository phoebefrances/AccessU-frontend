import React , {useState, createContext} from 'react'
export  const MapStyleContext = createContext()


// This allows us to pass props from the header to the map component
export  function MapStyleProvider(props) {
    const [mapStyle, SetMapStyle] = useState({
        styles: require("../libs/map-default.json")
      })
      // we are passing the provider to _app.js to make sure all the components have access to the props
  return (
    <MapStyleContext.Provider value={[mapStyle, SetMapStyle]}>
        {props.children}
    </MapStyleContext.Provider>
  )
} 

