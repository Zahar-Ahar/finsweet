import './style.scss'


export default function Button({ children, className, type='main'}) {
    return (
        <button className={
            'button '
            + className + ' '
            + type
        }>
            {children}
        </button>
    )
}