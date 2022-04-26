const button = ({onClick, children,className}) => (
    <button
    type="button"
    className={className}
    onClick={onClick}
    >
        {children}
    </button>
)
export default button;