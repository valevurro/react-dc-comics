import dcLogo from '../assets/img/dc-logo.png'

export default function AppHeader() {
    return (
        <header>
            <div className='container d-flex align-items-center p-2'>
                <img src={dcLogo} alt="" />
                <nav className='ms-auto ms-5'>
                    <a href="">Characters</a>
                    <a href="">Characters</a>
                    <a href="">Characters</a>
                    <a href="">Characters</a>
                    <a href="">Characters</a>
                    <a href="">Characters</a>
                    <a href="">Characters</a>
                    <a href="">Characters</a>
                    <a href="">Characters</a>
                    <a href="">Characters</a>
                </nav>
            </div>
        </header>
    )
}