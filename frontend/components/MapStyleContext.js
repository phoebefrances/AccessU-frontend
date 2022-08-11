import React , {useState, createContext} from 'react'
export  const MapStyleContext = createContext()

export  function MapStyleProvider(props) {
    const [mapStyle, SetMapStyle] = useState({
        styles: require('../libs/map-grayscale.json')
      })
  return (
    <MapStyleContext.Provider value={[mapStyle, SetMapStyle]}>
        {props.children}
    </MapStyleContext.Provider>
  )
} 

