import WhiteBuilding from "../../asset/image/White-buillding.png";
import Button from "../button";
import './style.scss'

export default function Post({isBig}) {
    return (
        <div className={'post ' + (isBig && 'border')}>
            {isBig &&
                <img className={'image'} src={WhiteBuilding} alt=""/>
            }
            <div className={'info'}>
                <div className={'date'}>
                    By John Doe | May 23, 2022
                </div>
                <div className={'title ' + (isBig ? 'big' : 'small')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </div>
                {isBig &&
                    <div className={'description'}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident.
                    </div>
                }
            </div>

            {isBig &&
                <Button className={'button'}>
                    Read more >
                </Button>
            }
        </div>
    )
}