import './style.scss'
import Logo from '../../asset/icons/Logo.svg'
import Menu from "../menu";
import Button from "../button";

export default function Header() {
    return (
        <div className={'header'}>
            <div className={'container'}>
                <div className="header__info">
                    <img src={Logo} alt="/"/>
                    <div className={'header__actions'}>
                        {/*<Menu menuElements={[ 'Home', 'Blog', 'About us', 'Contact us' ]}/>*/}
                        <Menu menuElements={[
                            {
                                link: '/',
                                text: 'Home'
                            },
                            {
                                link: '/blog',
                                text: 'Blog'
                            },
                            {
                                link: '/about',
                                text: 'About us'
                            },
                            {
                                link: '/contact',
                                text: 'Contact us'
                            },
                        ]}/>
                        <Button type={'white'}>
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}