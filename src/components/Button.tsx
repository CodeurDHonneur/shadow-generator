
type ButtonProps = {
    title: string;
    onClick: () => void;
    styles: Record<string, string>
}


export default function Button({ title, onClick,styles }: ButtonProps) {

    return (
        <button
        style={{
            cursor: 'pointer',
            ...styles
        }} 


        type='button' 
        onClick={onClick}
        >
        {title}
        </button>
    )
}
