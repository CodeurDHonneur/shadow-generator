import React from 'react'
import './App.css'
import ConfigurationLayout from './layout/ConfigurationLayout';
import ViewLayout from './layout/ViewLayout';
import type { Shadow } from './types/shadowType';
import Button from './components/Button';
// import type { Shadow } from './types/shadowType';

type obj = {
  index: number
}


export default function App() {
  const [showCode, setShowCode] = React.useState(false);
  const [getCode, setGetCode] = React.useState("");
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

  const copieCode = async () => {
    await navigator.clipboard.writeText(getCode)
  };

  React.useEffect(() => {
    setShadow(shadows.join(','));
  }, [shadows]);

  return (
    <>
      {showCode
        && (
          <div style={{
            position: 'fixed',
            backgroundColor: 'black',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            opacity: '0.8',
            zIndex: '5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>

              <div style={{
                width: '500px',
                height: '300px',
                padding: '15px',
                backgroundColor: 'white',
                 opacity: 'none',
                position: 'relative',
              
              }}>
                <div
                  onClick={() => setShowCode(false)}
                  style={{
                    position: 'absolute',
                    right: '-15px',
                    top: '-15px',
                    width: '30px',
                    height: '30px',
                    backgroundColor: 'red',
                    borderRadius: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer'
                  }}>X</div>
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '100%',
                    backgroundColor: '#919a9f',
                   
                    height: '100px',
                    fontSize: '1.2em'
                  }}>
                    <pre>{getCode}</pre>
                  </div>
                </div>
                <Button
                  title="Copie code"
                  onClick={() => copieCode()}
                  styles={{
                    paddingInline: '15px',
                    paddingBlock: '10px',
                    backgroundColor: '#2b62e4',
                    color: 'white',
                    border: '1px solid white',
                    position: 'absolute',
                    bottom: '10px',
                    right: '40%'
                  }}
                />
              </div>
            </div>
        
        )}
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
              setShowCode={setShowCode}
              setGetCode={setGetCode}

            />
          </div>
        </div>
      </div>
    </>

  )
}
