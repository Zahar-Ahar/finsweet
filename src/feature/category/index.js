import Houses from '../../asset/icons/homes.svg'
import Rocket from '../../asset/icons/rocket.svg'
import Economy from '../../asset/icons/activies.svg'
import Head from '../../asset/icons/head.svg'
import './style.scss'

export default function Category() {
    return (
        <div className={'category'}>
            <div className={'container'}>
                <div className={'category__headline'}>
                    Choose A Category
                </div>
                <div className={'category__items'}>
                    <div className={'item'}>
                        <div className={'icon'}>
                            <img src={Houses} alt=""/>
                        </div>
                        <div className={'title'}>
                            Business
                        </div>
                        <div className={'description'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                    </div>
                    <div className={'item'}>
                        <div className={'icon'}>
                            <img src={Rocket} alt=""/>
                        </div>
                        <div className={'title'}>
                            Startup
                        </div>
                        <div className={'description'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                    </div>
                    <div className={'item'}>
                        <div className={'icon'}>
                            <img src={Economy} alt=""/>
                        </div>
                        <div className={'title'}>
                            Economy
                        </div>
                        <div className={'description'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                    </div>
                    <div className={'item'}>
                        <div className={'icon'}>
                            <img src={Head} alt=""/>
                        </div>
                        <div className={'title'}>
                            Technology
                        </div>
                        <div className={'description'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}