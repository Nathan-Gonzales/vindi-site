import imgBanner from './images/BrynnBrynn.JPG';



const Guides = () => {
    return(
        <main className='bg-[url("./images/MagicShop.png")] bg-fixed'>
            <section className='min-h-screen'>
                <section className='flex items-center justify-center'>
                    <div className='bg-neutral-900/[.75] flex flex-col h-full items-center justify-between max-w-screen-xl px-3 border-neutral-900 border-x-2'>
                        <img className='border-neutral-900 border-x-2 border-b-2 mb-10 w-[1280px] max-h-60' src={imgBanner} alt="" />
                        <div className='flex flex-row justify-between w-4/5'>
                            <h1 className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-10 w-full text-center text-neutral-200 text-5xl border-neutral-900 border-2 rounded-sm'>
                                Guides
                            </h1>
                            {/* <p className='bg-gradient-to-b from-black to-neutral-900 font-red-rose p-10 w-full text-center text-neutral-200 text-3xl  rounded-sm my-10 border-neutral-900 border-2'>
                                DISCLAIMER: Much of the information in these guides is out of date due to the game's
                                low population and lack of content creators for it.
                                Here is a compiled list of various types of guides from youtube tutorials to written guides.
                                If anyone has a guide they would like to be added here feel free to message me or any mods in our 
                                <span> Discord </span> server.
                            </p> */}
                        </div>
                        <section className='flex flex-col w-full gap-y-10 py-10 lg:flex-row lg:flex-wrap'>
                            <div className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 p-10 border-2 rounded-lg lg:basis-1/4 lg:flex-1 h-96'>
                                <h1 className='text-neutral-200 text-4xl text-center w-full pb-2 font-red-rose'>Content Creators</h1>
                                <hr className='w-full border-2 border-neutral-800 rounded-md '/>
                                <ul className='text-lg text-left text-neutral-200 underline pt-8 font-red-rose'>
                                    <li className='p-1'>
                                        <a className='flex flex-row justify-between' href="https://www.youtube.com/@LegendarmaTV">
                                            <div>LegendarmaTV Youtube</div>
                                            <div>Guides</div>
                                        </a>
                                    </li>
                                    <li className='p-1'>
                                        <a className='flex flex-row justify-between' href="https://www.youtube.com/@Tilli4">
                                            <div>Tilli4 Youtube</div>
                                            <div>Guides</div>
                                        </a>
                                    </li>
                                    <li className='p-1'>
                                        <a className='flex flex-row justify-between' href="https://www.youtube.com/@smary9591">
                                            <div>Smary Youtube</div>
                                            <div>Gameplay/Showcase</div>
                                        </a>
                                    </li>
                                    <li className='p-1'>
                                        <a className='flex flex-row justify-between' href="https://www.youtube.com/@BTANK">
                                            <div>B TANK Youtube</div>
                                            <div>Gameplay/Showcase</div>
                                        </a>
                                    </li>
                                    <li className='p-1'>
                                        <a className='flex flex-row justify-between' href="https://www.youtube.com/@jessgame2243">
                                            <div>Jess Game Youtube</div>
                                            <div>Gameplay/Showcase</div>
                                        </a>
                                    </li>
                                    <li className='p-1'>
                                        <a className='flex flex-row justify-between' href="https://www.youtube.com/@blacktornado2445">
                                            <div>BlackTornado Youtube</div>
                                            <div>Guides</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 p-10 border-2 rounded-lg lg:basis-1/4 lg:flex-1 h-96'>
                                <h1 className='text-neutral-200 text-4xl text-center w-full pb-2 font-red-rose'>Everything You Need to Know</h1>
                                <hr className='w-full border-2 border-neutral-800 rounded-md '/>
                                <ul className='text-2xl text-center text-neutral-200 underline pt-8 font-red-rose'>
                                    <li className='p-1'>
                                        <a href="https://www.youtube.com/@LegendarmaTV/playlists">
                                            LegendarmaTV Playlists
                                        </a>
                                    </li>
                                    <li className='pt-10'>
                                        <a href="https://www.youtube.com/@Tilli4/playlists">
                                            Tilli4 Playlists
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </main>
    );


}

export default Guides;