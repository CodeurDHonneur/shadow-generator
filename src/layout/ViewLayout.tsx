import React from 'react'
import Button from '../components/Button'



type ViewLayoutProps = {
  shadow: string;
};

export default function ViewLayout({ shadow }: ViewLayoutProps) {
  
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
    const copieCode = async () => {
        await navigator.clipboard.writeText(`
            shadow: ${shadow}
            `)
    };


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '5px'
        }}>
            <Button
                title="Get the code"
                onClick={copieCode}
                styles={styleButtonAdd}
            />
            <div
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
