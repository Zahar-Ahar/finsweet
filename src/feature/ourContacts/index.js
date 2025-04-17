import './style.scss'
import {Component} from "react";
import SocialNetworks from "../../components/socialNetworks";

class Socials extends Component {
    render(color) {
        return null;
    }
}

export default function OurContacts() {
    return (
        <div className={'ourContacts'}>
            <div className={'ourContacts__el'}>
                <div className={'title'}>
                    Working hours
                </div>
                <div className={'headline'}>
                    Monday To Friday <br/> 9:00 AM to 8:00 PM
                </div>
                <div className={'description'}>
                    Our Support Team is available 24/7
                </div>
            </div>
            <div className={'ourContacts__el'}>
                <div className={'title'}>
                    Contact Us
                </div>
                <div className={'headline'}>
                    020 7993 2905
                </div>
                <div className={'description'}>
                    hello@finsweet.com
                </div>
                <div className={'socials'}>
                    <SocialNetworks/>
                </div>
            </div>
        </div>
    )
}