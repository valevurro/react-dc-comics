import dcLogo from '../assets/img/dc-logo.png'

export default function AppHeader() {
    return (
        <header>
            <div className='container'>
                <img src={dcLogo} alt="" />
                <nav className='mt-10'>
                    <a href="">Characters</a>
                    <a href="">Comics</a>
                    <a href="">Movies</a>
                    <a href="">TV</a>
                    <a href="">Games</a>
                    <a href="">Collectibles</a>
                    <a href="">Videos</a>
                    <a href="">Fans</a>
                    <a href="">News</a>
                    <a href="">Shop</a>
                </nav>
            </div>
        </header>
    )
}

