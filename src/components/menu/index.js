import './style.scss'

export default function Menu({menuElements}) {
    return (
        <div className={'menu'}>
            {menuElements.map(item => {
                return (
                    <div className={'menu__el'}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}