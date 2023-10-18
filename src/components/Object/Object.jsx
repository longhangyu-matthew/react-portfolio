import React, { useState, useEffect } from 'react'; 
import Spline from '@splinetool/react-spline';

 
const Object = () => { 
  const [showComponent, setShowComponent] = useState(false); 
 
  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setShowComponent(true); 
    }, 1000); 
 
    return () => clearTimeout(timeout); 
  }, []); 
 
  return ( 
    <div> 
      {showComponent && <DelayedComponent />} 
    </div> 
  ); 
}; 
 
const DelayedComponent = () => { 
  // Component to be rendered after the delay 
  return <div><Spline scene="https://prod.spline.design/GZMAhX5pd2WnPTid/scene.splinecode" /></div>; 
}; 
 
export default Object; 