import React from 'react'
import './App.css'
import ConfigurationLayout from './layout/ConfigurationLayout';
import ViewLayout from './layout/ViewLayout';
import type { Shadow } from './types/shadowType';
// import type { Shadow } from './types/shadowType';

type obj = {
  index: number
}


export default function App() {

  const [shadows, setShadows] = React.useState<string[]>([]);

  const [shadow, setShadow] = React.useState<string>("");

  const [controls, setControls] = React.useState<obj[]>([
    {
      index: 0,
    }
  ]);

  const updateShadow = (value: Shadow, index: number) => {
    const style = [...shadows];
    style[index] = `${value.x}px ${value.y}px ${value.blur}px ${value.spread}px ${value.color} ${value.inset ? 'inset' : ''}`;
    setShadows(style);

  }
  const removeShadowConfig = (index: number) => {
    if (controls.length > 1) {
      setShadows((prev) => prev.filter((_, i) => i !== index));
      setControls((prev) => prev.filter((_, i) => i !== index));
    }
  };


  React.useEffect(() => {
    setShadow(shadows.join(','));
  }, [shadows]);

  return (
    <div className='container-principal'>
      <div className='header-principal'>
        boxy generator
      </div>

      <div className='main-principal'>
        <div>
          <ConfigurationLayout
            controls={controls}
            setControls={setControls}
            updateShadow={updateShadow}
            removeShadowConfig={removeShadowConfig}
          />
        </div>
        <div>

          <ViewLayout
            shadow={shadow}
          />
        </div>
      </div>
    </div>
  )
}
