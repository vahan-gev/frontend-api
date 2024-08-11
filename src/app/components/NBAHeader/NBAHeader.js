export default function NBAHeader() {
    return (
        <nav className="bg-white z-50 nba-header">
            <div className="flex items-center justify-between mx-auto max-w-screen-xxl px-4 py-2">
                <a href="/" className="mr-2.5">
                    <img src="/assets/img/logo-nba.svg" alt="NBA Logo" className="w-14" />
                </a>
                <ul className='flex'>
                    <li className='ml-2 sm:ml-3 md:ml-5 relative hidden lg:block'>
                        <a href="/"
                           className="text-black block text-xs sm:text-sm">Teams</a>
                    </li>
                    <li className='ml-2 sm:ml-3 md:ml-5 relative hidden lg:block'>
                        <a href="https://gleague.nba.com/"
                           className="text-black block text-xs sm:text-sm">G League</a>
                    </li>
                    <li className='ml-2 sm:ml-3 md:ml-5 relative hidden lg:block'>
                        <a href="https://www.wnba.com/"
                           className="text-black block text-xs sm:text-sm">WNBA</a>
                    </li>
                    <li className='ml-2 sm:ml-3 md:ml-5 relative hidden lg:block'>
                        <a href="https://www.thebal.com/"
                           className="text-black block text-xs sm:text-sm">BAL</a>
                    </li>
                    <li className='ml-2 sm:ml-3 md:ml-5 relative hidden lg:block'>
                        <a href="https://2kleague.nba.com/"
                           className="text-black block text-xs sm:text-sm">NBA 2K</a>
                    </li>
                    <li className='ml-2 sm:ml-3 md:ml-5 relative hidden lg:block'>
                        <a href="/"
                           className="text-black block text-xs sm:text-sm">NBA Initiatives</a>
                    </li>
                    <li className='ml-2 sm:ml-3 md:ml-5 relative hidden lg:block'>
                        <a href="https://store.nba.com/"
                           className="text-black block text-xs sm:text-sm">NBA Store</a>
                    </li>
                    <li className='ml-2 sm:ml-3 md:ml-5 relative hidden lg:block'>
                        <a
                           href="https://watch.nba.com/streaming-subscriptions"
                           className="text-black block text-xs sm:text-sm">NBA League Pass</a>
                    </li>
                    <li className='ml-2 sm:ml-3 md:ml-5 relative hidden lg:block'>
                        <a href="/"
                           className="text-black block text-xs sm:text-sm">NBA ID</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
