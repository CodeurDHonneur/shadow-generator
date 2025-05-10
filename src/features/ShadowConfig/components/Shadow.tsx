import React from 'react'
import RangeComponent from '../../../components/RangeComponent'
import styles from "../styles/Shadow.module.css";


export default function Shadow() {
  const [valueInputColor, setValueInputColor] = React.useState("#000000");

  const [configShadow, setConfigShadow] = React.useState({
    horizontalOffset: 0,
    verticalOffset: 0,
    blurRadius: 0,
    spreadOffset: 0,
    color: "#000000",
  });


  const handleChange = (code: string, value: string) => {
    // console.log(code, value);
    const newConfigShadow = {
      ...configShadow,
      [code]: value
    }
    setConfigShadow(newConfigShadow);
    console.log(configShadow);
  };


  const values = [
    {id: 1, title: "Horizontal offset", code: 'horizontalOffset'},
    {id: 2, title: "Vertical offset", code: 'verticalOffset'},
    {id: 3, title: "Blur radius", code: 'blurRadius'},
    {id: 4, title: "Spread offset", code: 'spreadOffset'},
  ]


  return (
    <div className={styles.container}>
      <div className={styles.containerShadow}>
        {values.map((value) => (
            <RangeComponent 
            title={value.title}
            code={value.code}
            onChange={handleChange}
            key={value.id}
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
