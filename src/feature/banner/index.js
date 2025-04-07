import './style.scss'
import Button from "../../components/button";

export default function Banner() {
    return (
        <div className={'banner'}>
            <div className={'container'}>
                <div className={'banner__info'}>
                    <div className={'banner__posted'}>
                        Posted on startup
                    </div>
                    <div className={'banner__step'}>
                        Step-by-step guide to choosing great font pairs
                    </div>
                    <div className={'banner__james'}>
                        By James West | May 23, 2022
                    </div>
                    <div className={'banner__duis'}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident.
                    </div>
                    <Button>
                        Read more >
                    </Button>
                </div>
            </div>
        </div>
    )
}