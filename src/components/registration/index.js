import './style.scss'
import Button from "../button";

export default function Registration() {
    return (
        <div className={'registration'}>
            <div className={'registration__info'}>
                <div className={'registration__ContentText'}>
                    Subscribe to our news letter to get latest updates and news
                </div>
                <div className={'registration__ContentForms'}>
                    <form className={'registration__form'}>
                        <input type="email" className={'registration__User'} placeholder={'Enter Your Email'}/>
                        <Button className={'registration__button'}>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}