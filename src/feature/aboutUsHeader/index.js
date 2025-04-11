import './style.scss'
import Overview from "../overview";

export default function AboutUsHeader() {
    return (
        <div className={'container'}>
            <div className={'aboutUsHeader'}>
                <div className={'aboutUsHeader__left'}>
                    <div className={'title'}>
                        ABOUT US
                    </div>
                    <div className={'headline'}>
                        We are a team of content writers who share their learnings
                    </div>
                </div>
                <div className={'aboutUsHeader__right'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, nulla, ut. Ad asperiores
                    consequuntur dignissimos doloribus fuga fugiat harum id illo impedit ipsum iure laboriosam minus,
                    molestiae nam, nisi odit rem sequi sit tenetur veniam voluptate.
                </div>
            </div>
        </div>
    )
}