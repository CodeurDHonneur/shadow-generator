import React from 'react'
import Button from '../components/Button'
import styles from "./styles/ConfigurationLayout.module.css";
import ShadowConfig from '../features/ShadowConfig';
import type { Shadow } from '../types/shadowType';

type obj = {
  index: number
}

type ConfigurationLayoutProps = {
  controls: obj[];
  setControls: React.Dispatch<React.SetStateAction<obj[]>>;
  updateShadow: (value: Shadow, index: number) => void;
  removeShadowConfig: (index: number) => void;
  // shadow: string;
};

export default function ConfigurationLayout({
  removeShadowConfig,
  updateShadow,
  controls,
  setControls }
  : ConfigurationLayoutProps
) {


  const buttonsValues = [
    { id: 0, title: "Shadow", onClick: () => console.log("Salut le monde 0") },
    { id: 1, title: "BoxPanel", onClick: () => console.log("Salut le monde 1") },
  ];

  const styleButtonPanel = {
    paddingInline: '20px',
    paddingBlock: '15px',
    backgroundColor: 'white',
    borderInline: '1px solid #c8d1d5',
    borderTop: '1px solid #c8d1d5',
    borderBottom: '3px solid white',
    borderRadius: '10px 10px 0px 0px',
  };

  const styleButtonAdd = {
    paddingInline: '15px',
    paddingBlock: '10px',
    backgroundColor: '#2b62e4',
    border: '1px solid rgb(255, 255, 255)',
    color: 'white'
  }

  const defaultStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }


  const addShadow = () => {
    const value = [
      ...controls,
      { index: controls.length },
    ]
    setControls(value);
  }


  return (
    <div className={styles.container}>

      <div className={styles.containerButton}>
        {buttonsValues.map(button => (
          <Button
            key={button.id}
            title={button.title}
            onClick={button.onClick}
            styles={styleButtonPanel}
          />
        ))}
      </div>

      <div style={{
        backgroundColor: 'white',
        height: '100%',
        border: '1px solid #c8d1d5',
        boxShadow: '5px 5px 10px rgb(178, 173, 173)',
        // padding: '15px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '15px',
          borderBottom: '3px solid #c8d1d5',
          padding: '20px'
        }}>
          <h4>Customize Shadows</h4>
          <Button
            title="Add a shadow"
            onClick={addShadow}
            styles={styleButtonAdd}
          />
        </div>
        <div style={{
            overflowY: 'auto',
            height: '500px',
            width: '100%',
            paddingInline: '20px'

        }}>
          {controls.map((_, index) => (
            <div 
            key={index}
            style={{
              borderBottom: '5px solid rgb(142, 167, 180)',
              paddingBlock: '20px'
            }}>
              <div style={{ ...defaultStyle, paddingBlock: '5px' }}>
                <h4>Shadow {index + 1}</h4>
                <span>icone</span>
              </div>
              <ShadowConfig
                index={index}
                // controls={controls}
                removeShadowConfig={removeShadowConfig}
                updateShadow={updateShadow}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
