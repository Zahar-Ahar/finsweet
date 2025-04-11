import './style.scss'
import {NavLink} from "react-router";

export default function Menu({menuElements}) {
    return (
        <div className={'menu'}>
            {menuElements.map(item => {
                return (
                    <NavLink to={item.link} className={'menu__el'}>
                        {item.text}
                    </NavLink>
                )
            })}
        </div>
    )
}