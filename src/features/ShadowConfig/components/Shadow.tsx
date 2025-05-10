import React from 'react'
import RangeComponent from '../../../components/RangeComponent'
import styles from "../styles/Shadow.module.css";
import type { ShadowPropsType } from '../../../core/types/ensembleTypes';

type ShadowProps = ShadowPropsType;

export default function Shadow({configShadow, setConfigShadow}: ShadowProps ) {
  const [valueInputColor, setValueInputColor] = React.useState("#000000");

  const handleChange = (code: string, value: string) => {
    const newConfigShadow = {
      ...configShadow,
      [code]: value
    }
    setConfigShadow(newConfigShadow);
  };
 
  const values = [
    {id: 1, title: "Horizontal offset", code: 'horizontalOffset'},
    {id: 2, title: "Vertical offset", code: 'verticalOffset'},
    {id: 3, title: "Blur radius", code: 'blurRadius'},
    {id: 4, title: "Spread offset", code: 'spreadOffset'},
  ]

  React.useEffect(() => {
    const newConfigShadow = {
      ...configShadow,
      color: valueInputColor
    };

     setConfigShadow(newConfigShadow);

  }, [valueInputColor]);


  return (
    <div className={styles.container}>
      <div className={styles.containerShadow}>
        {values.map((value) => (
            <RangeComponent 
            title={value.title}
            code={value.code}
            onChange={handleChange}
            key={value.id}
            max={200}
            min={-200}
            />
        ))}
      </div>
        <label htmlFor="">
          <div>Color</div>
          <div className={styles.containerColorConfig}>
            <div className={styles.colorValue}>{valueInputColor}</div>
            <input 
            type="color" 
            className={styles.inputColor}
            value={valueInputColor}
            onChange={(e) => setValueInputColor(e.target.value)}/>
          </div>
        </label>
    </div>
  )
}
