import imgBanner from './images/Only_Heroes.jpg';
import Angelz from './images/Angelz.webp';

const Community = () => {
    return(
        <main className='bg-[url("./images/Colhen.png")] bg-fixed'>
            <section className='min-h-screen'>
                <section className='flex items-center justify-center'>
                    <div className='bg-neutral-900/[.75] flex flex-col h-full justify-between max-w-screen-xl md:px-3 lg:px-3 border-neutral-900 border-x-2'>
                        <img className='border-neutral-900 border-x-2 border-b-2 w-[1280px] mb-10 max-h-60' src={imgBanner} alt="" />
                        <div className='flex flex-col items-center'>
                            <h1 className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-10 w-full lg:w-4/5 text-center text-neutral-200 text-5xl border-neutral-900 border-2 rounded-sm'>
                                Community
                            </h1>
                            {/* <p className='bg-gradient-to-b from-black to-neutral-900 font-red-rose p-10 w-full text-center text-neutral-200 text-3xl  rounded-sm my-10 border-neutral-900 border-2'>
                                Since Vindi has a small player base here in NA, we need to stick together. 
                                This will serve as a place for the existing players to meet each other and also
                                for new players to find us.
                            </p> */}
                        </div>
                        <section className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 border-2 rounded-lg text-neutral-200  w-full mt-10 font-red-rose'>
                            <div className='px-10 pt-10'>
                                <h1 className='text-neutral-200 mb-2 text-2xl lg:text-4xl text-center w-full font-red-rose'>
                                    Most Active Guilds in Game <br />
                                    in no particular order:
                                </h1>
                                <hr className="w-full border-2 border-neutral-800 rounded-md "/>
                                <ul className='grid grid-cols-2 lg:text-2xl  pt-4'>
                                    <li className='text-left'>I Lift Heavy</li>
                                    <li className='text-right'>Cool Beanz</li>
                                    <li className='text-left'>No Fun Allowed</li>
                                    <li className='text-right'>Nightcap</li>
                                    <li className='text-left'>GhostKnights</li>
                                    <li className='text-right'>AngelParty</li>
                                    <li className='text-left'>aLaMuze</li>
                                    <li className='text-right'>Insight</li>
                                    <li className='text-left'>AssassinPie</li>
                                    <li className='text-right'>Empyrean</li>
                                    <li className='text-left'>BeautyBlades</li>
                                    <li className='text-right'>Irregular</li>
                                    <li className='text-left'>KawaiiLollis</li>
                                    <li className='text-right'>LoveClub</li>
                                    <li className='text-left'>LastSeraphim</li>
                                </ul>
                                <hr className="w-full border-2 border-neutral-800 rounded-md mt-4"/>
                            </div>
                            <div>
                                <div className='text-center text-4xl px-10 pt-5 underline'>Angelz
                                    <img className=' border-neutral-900 border-2 mt-3 w-full' src={Angelz} alt="" />
                                    <h1 className='text-left text-2xl pt-5'>Angelz Discord</h1>
                                    <h1 className='text-left text-2xl py-5'><a href="https://angelzcommunity.org/"> Angelz Official Website - (angelzcommunity.org)</a></h1>
                                </div>
                                <p className='text-center lg:text-2xl px-10 mb-5 '>
                                    This is my main guild. It's ran by the wonderful miss Aqua. 
                                    5 star guild house and allows multiple alt characters.
                                    Redeemers every week. Feel free to join our Discord
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Community;