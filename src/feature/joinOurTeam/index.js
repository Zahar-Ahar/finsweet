import './style.scss'
import Button from "../../components/button";

export default function JoinOurTeam() {
    return (
        <div className={'container'}>
            <div className={'joinOurTeam'}>
                <div className={'joinOurTeam__info'}>
                    <div className={'title'}>
                        Join our team to be a part of our story
                    </div>
                    <div className={'description'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </div>
                </div>
                <Button>
                    Join Now
                </Button>
            </div>
        </div>
    )
}