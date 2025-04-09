import './style.scss'
import ProfilePicture from '../../asset/image/Profile picture.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={'container'}>
            <div className={'testimonials'}>
                <div className={'testimonials__info'}>
                    <div className={'title'}>
                        TESTIMONIALS
                    </div>
                    <div className={'headline'}>
                        What people say about our blog
                    </div>
                    <div className={'description'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </div>
                </div>
                <div className={'testimonials__post'}>
                        <Slider {...settings} >
                            <div>
                                <div className={'info'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </div>
                                <div className={'profile'}>
                                    <div className={'profile__picture'}>
                                        <img src={ProfilePicture} alt=""/>
                                    </div>
                                    <div className={'profile__info'}>
                                        <div className={'name'}>
                                            Jonathan Vallem
                                        </div>
                                        <div className={'location'}>
                                            New york, USA
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={'info'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </div>
                                <div className={'profile'}>
                                    <div className={'profile__picture'}>
                                        <img src={ProfilePicture} alt=""/>
                                    </div>
                                    <div className={'profile__info'}>
                                        <div className={'name'}>
                                            Jonathan Vallem
                                        </div>
                                        <div className={'location'}>
                                            New york, USA
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={'info'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </div>
                                <div className={'profile'}>
                                    <div className={'profile__picture'}>
                                        <img src={ProfilePicture} alt=""/>
                                    </div>
                                    <div className={'profile__info'}>
                                        <div className={'name'}>
                                            Jonathan Vallem
                                        </div>
                                        <div className={'location'}>
                                            New york, USA
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                </div>
            </div>
        </div>
    )
}