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
            <div className="bg-dark">
                <div className="container text-white mt-4 p-5"><h1 style={{textAlign: 'center'}}>{title}</h1></div>
            </div>
        </main>
    )
}