import './style.scss'
import Facebook from '../../asset/icons/facebookLogo.svg'
import Tweeter from '../../asset/icons/tweeterLogo.svg'
import Inst from '../../asset/icons/instLogo.svg'
import Chzh from '../../asset/icons/InhzchtoLogo.svg'

export default function PrivacyPolicy() {
    return (
            <div className={'privacyPolicy'}>
                <div className={'privacyPolicy__info'}>
                    <div className={'privacyPolicy__contacts'}>
                        Finstreet 118 2561 Fintown <br/> Hello@finsweet.com 020 7993 2905
                    </div>
                    <div className={'privacyPolicy__socialNetworks'}>
                        <img src={Facebook} alt="/"/>
                        <img src={Tweeter} alt="/"/>
                        <img src={Inst} alt="/"/>
                        <img src={Chzh} alt="/"/>
                    </div>
                </div>
        </div>
    )
}