import './style.scss'
import Facebook from "../../asset/icons/facebookLogo.svg";
import Tweeter from "../../asset/icons/tweeterLogo.svg";
import Inst from "../../asset/icons/instLogo.svg";
import Chzh from "../../asset/icons/InhzchtoLogo.svg";

export default function SocialNetworks({socials}) {
    console.log(socials)
    return (
        <div className={'card__socialNetworks'}>
            {socials ? socials.map((soc) => {
                if (soc === 'linkedin') {
                    return <img src={Chzh} alt=""/>
                } else if (soc === 'facebook') {
                    return <img src={Facebook} alt=""/>
                } else if (soc === 'instagram') {
                    return <img src={Inst} alt=""/>
                } else if (soc === 'twitter') {
                    return <img src={Tweeter} alt=""/>
                } else {
                    return 'nothing'
                }
            }) : (
                <>
                    <img src={Facebook} alt="/"/>
                    <img src={Tweeter} alt="/"/>
                    <img src={Inst} alt="/"/>
                    <img src={Chzh} alt="/"/>
                </>
            )}

        </div>
    )
}