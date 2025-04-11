import './style.scss'
import AboutUsBanner from '../../asset/image/AboutUsBanner.png'

export default function Overview() {
    return (
        <div className={'container'}>
            <div className={'overview'}>
                <div className={'action'}>
                    <div className={'action__el'}>
                        <div className={'total'}>
                            12+
                        </div>
                        <div className={'service'}>
                            Blogs Published
                        </div>
                    </div>
                    <div className={'action__el'}>
                        <div className={'total'}>
                            18K+
                        </div>
                        <div className={'service'}>
                            Views on Finsweet
                        </div>
                    </div>
                    <div className={'action__el'}>
                        <div className={'total'}>
                            30K+
                        </div>
                        <div className={'service'}>
                            Total active Users
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}