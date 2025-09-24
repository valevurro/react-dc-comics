import { useState } from "react";
import dcIcon from "../assets/img/buy-comics-digital-comics.png"
import merchandiseIcon from "../assets/img/buy-comics-merchandise.png"
import subscriptionIcon from "../assets/img/buy-comics-subscriptions.png"
import shopLocatorIcon from "../assets/img/buy-comics-shop-locator.png"
import dcPowerVisaIcon from "../assets/img/buy-dc-power-visa.svg"
import jumbotronIcon from "../assets/img/jumbotron.jpg"

export default function AppMain() {
    const [showImg, setShowImg] = useState(false);
    const title = "Welcome to the DC Comics FanPage!"

    return (
        <main>
            <div className="title-section">
                <div className="container"><h1>{title}</h1></div>
            </div>

            <div className='main-bg'>

                <div className="container">

                    <div className="row">
                        <div>
                            <img src={dcIcon} alt="" className='main-icon' />
                            <div>
                                <a href="">DIGITAL COMICS</a>
                            </div>
                        </div>
                        <div>
                            <img src={merchandiseIcon} alt="" className='main-icon' />
                            <div>
                                <a href="">DC MERCHANDISE</a>
                            </div>
                        </div>
                        <div>
                            <img src={subscriptionIcon} alt="" className='main-icon' />
                            <div>
                                <a href="">SUBSCRIPTION</a>
                            </div>
                        </div>
                        <div>
                            <img src={shopLocatorIcon} alt="" className='main-icon' />
                            <div>
                                <a href="">COMIC SHOP LOCATOR</a>
                            </div>
                        </div>
                        <div>
                            <img src={dcPowerVisaIcon} alt="" className='main-icon' />
                            <div>
                                <a href="">DC POWER VISA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}