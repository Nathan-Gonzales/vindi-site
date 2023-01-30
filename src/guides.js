import imgBanner from './images/BrynnBrynn.JPG';



const Guides = () => {
    return(
        <main className='bg-[url("./images/MagicShop.png")] bg-fixed'>
            <section className='min-h-screen'>
                <section className='flex items-center justify-center'>
                    <div className='bg-neutral-900/[.75] flex flex-col h-full items-center justify-between max-w-screen-xl px-3 border-neutral-900 border-x-2'>
                        <img className='border-neutral-900 border-x-2 border-b-2 mb-10 w-full max-h-60' src={imgBanner} alt="" />
                        <div className='flex flex-col items-center'>
                            <h1 className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-10 w-4/5 text-center text-neutral-200 text-5xl border-neutral-900 border-2 rounded-sm'>
                                Guides
                            </h1>
                            <p className='bg-gradient-to-b from-black to-neutral-900 font-red-rose p-10 w-full text-center text-neutral-200 text-3xl  rounded-sm my-10 border-neutral-900 border-2'>
                                DISCLAIMER: Much of the information in these guides is out of date due to the game's
                                low population and lack of content creators for it.
                                Here is a compiled list of various types of guides from youtube tutorials to written guides.
                                If anyone has a guide they would like to be added here feel free to message me or any mods in our 
                                <span> Discord </span> server.
                            </p>
                        </div>
                        <section className='flex flex-col w-full gap-y-10 py-10 lg:flex-row lg:flex-wrap'>
                            <div className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 border-2 lg:basis-1/4 lg:flex-1 h-96'>
                                <h1 className='text-neutral-200 text-4xl text-center w-full font-red-rose'>Raid Guides</h1>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            <div className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 border-2 lg:basis-1/4 lg:flex-1 h-96'>
                                <h1 className='text-neutral-200 text-4xl text-center w-full font-red-rose'>Character Guides</h1>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            <div className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 border-2 lg:basis-1/4 lg:flex-1 h-96'>
                                <h1 className='text-neutral-200 text-4xl text-center w-full font-red-rose'>Misc. Guides</h1>
                                <ul>
                                    <li></li>
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