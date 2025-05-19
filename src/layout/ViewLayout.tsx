import React from 'react'
import Button from '../components/Button'



type ViewLayoutProps = {
  shadow: string;
  setShowCode: React.Dispatch<React.SetStateAction<boolean>>;
  setGetCode: React.Dispatch<React.SetStateAction<string>>;
};

export default function ViewLayout({ shadow,setShowCode, setGetCode }: ViewLayoutProps) {
    
    const styleCircle = React.useRef(null)
   
    const styleButtonAdd = {
        paddingInline: '15px',
        paddingBlock: '10px',
        backgroundColor: '#2b62e4',
        border: '1px solid rgb(255, 255, 255)',
        color: 'white',
        borderRadius: '10px',
        position: 'relative',
        zIndex:'2'
    }

    React.useEffect(() => {
        if (styleCircle.current) {
        const computedStyles = window.getComputedStyle(styleCircle.current);
        const bgColor = computedStyles.backgroundColor;
        const boxShadow = computedStyles.boxShadow;
        setGetCode(`
background-color : ${bgColor};
box-shadow : ${boxShadow};
            `);
        }
    }, [shadow])

    

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '5px'
        }}>
            <Button
                title="Get the code"
                onClick={() => setShowCode(true)}
                styles={styleButtonAdd}
            />
            <div
                ref={styleCircle}
                style={{
                    width: "500px",
                    height: "500px",
                    borderRadius: "500px",
                    backgroundColor: "white",
                    boxShadow: `${shadow}`
                }}
                >
            </div>

         
        </div>
    )
}
