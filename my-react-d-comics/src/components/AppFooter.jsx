import facebookIcon from '../assets/img/footer-facebook.png';
import twitterIcon from '../assets/img/footer-twitter.png';
import youtubeIcon from '../assets/img/footer-youtube.png';
import pinterestIcon from '../assets/img/footer-pinterest.png';
import periscopeIcon from '../assets/img/footer-periscope.png';
import footerBg from '../assets/img/footer-bg.jpg';


export default function AppFooter(){
    return (
        <footer>
            <div className='bg-dark'>
                <div className='container'>
                    <div className='row'>
                        <div className='col d-flex ms-5'>
                            <button className='btn btn-outline-primary round-0 border-2'>
                                <a href="" className='fs-6 text-light'>SIGN-UP NOW</a>
                            </button>
                        </div>
                        <div className='col d-flex align-items-center ms-5'>
                            <h4 className='color-follow fs-6'>FOLLOW US</h4>
                            <a href="">
                                <img src={facebookIcon} alt="" className='footer-icon ms-5' />
                            </a>

                            <a href="">
                                <img src={twitterIcon} alt="" className='footer-icon ms-3' />
                            </a>

                            <a href="">
                                <img src={youtubeIcon} alt="" className='footer-icon ms-3' />
                            </a>

                            <a href="">
                                <img src={pinterestIcon} alt="" className='footer-icon ms-3' />
                            </a>

                            <a href="">
                                <img src={periscopeIcon} alt="" className='footer-icon ms-3' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}