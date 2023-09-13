import imgBanner from './images/Goddess_Morrighan.jpg';



const Home = () => {
    return(
        <main className='bg-[url("./images/Earthborn.png")] bg-fixed'>
            <section className='min-h-screen'>
                <section className='flex items-center justify-center'>
                    <div className='bg-neutral-900/[.75] flex flex-col h-full justify-between w-[1280px] max-w-screen-xl px-3 border-neutral-900 border-x-2'>
                        <img className='border-neutral-900 border-x-2 border-b-2 mb-10 max-h-60' src={imgBanner} alt="" />
                        <div className='flex flex-col items-center'>
                            <h1 className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-10 w-4/5 text-center text-neutral-200 text-5xl border-neutral-900 border-2 rounded-sm'>
                                Vindictus University</h1>
                            {/* <p className='bg-gradient-to-b from-black to-neutral-900 font-red-rose p-10 w-full text-center text-neutral-200 text-3xl  rounded-sm my-10 border-neutral-900 border-2'>
                                Welcome mercenaries, to our own little pocket of Erinn. In this place outside of time you can learn 
                                how to change your fate with the knowledge of others who have walked this path before you... 
                            </p> */}
                        </div>
                        <section className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 border-2 rounded-lg text-neutral-200  w-full mt-10 font-red-rose'>
                            <div className='px-10'>
                                <h1 className='text-neutral-200 text-4xl text-center w-full mt-10 pb-2 font-red-rose'>Current Events</h1>
                                <hr className="w-full border-2 border-neutral-800 rounded-md "/>
                            </div>
                            <div className='flex flex-col gap-x-10 gap-y-10 py-10 px-36 justify-center lg:flex-row lg:flex-wrap'>
                                <a href="https://vindictus.nexon.net/news/84995/beat-that-heat-with-water-balloons">
                                    <div className='flex flex-col justify-end bg-[url("https://nxcache.nexon.net/cms/2023/q3/2212/staem_cover_img_800x450.jpg")] bg-top bg-no-repeat bg-contain border-neutral-900 border-2 h-96 w-96'>
                                        <div className='bg-gradient-to-b from-black/[.45] to-black/[.95] text-neutral-200 pt-8 pl-1 h-1/2'>
                                            <h1 className='text-2xl px-3 pt-1 pb-1'>Water Balloon Event</h1>
                                            <p className='px-3 pb-1 pt-3'>
                                                Complete challenges to earn water balloons that you can throw at your foes. Earn great rewards
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://vindictus.nexon.net/news/84995/beat-that-heat-with-water-balloons">
                                    <div className='flex flex-col justify-end bg-[url("https://nxcache.nexon.net/cms/2023/q3/1872/staem_cover_img_800x450.jpg")] bg-top bg-no-repeat bg-contain border-neutral-900 border-2 h-96 w-96'>
                                        <div className='bg-gradient-to-b from-black/[.45] to-black/[.95] text-neutral-200 pt-8 pl-1 h-1/2'>
                                            <h1 className='text-2xl px-3 pt-1 pb-1'>August Crystal: Marine Crystal</h1>
                                            <p className='px-3 pb-1 pt-3'>
                                                Check the shop for new Marine Crystal skins
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://vindictus.nexon.net/news/84995/beat-that-heat-with-water-balloons">
                                    <div className='flex flex-col justify-end bg-[url("https://nxcache.nexon.net/cms/2023/q3/1870/staem_cover_img_800x450.jpg")] bg-top bg-no-repeat bg-contain border-neutral-900 border-2 h-96 w-96'>
                                        <div className='bg-gradient-to-b from-black/[.45] to-black/[.95] text-neutral-200 pt-8 pl-1 h-1/2'>
                                            <h1 className='text-2xl px-3 pt-1 pb-1'>August Package: Summer Sunshine Comrade Package</h1>
                                            <p className='px-3 pb-1 pt-3'>
                                                Come get your comrades plus many more rewards!
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://vindictus.nexon.net/news/84995/beat-that-heat-with-water-balloons">
                                    <div className='flex flex-col justify-end bg-[url("https://nxcache.nexon.net/cms/2023/q3/1868/staem_cover_img_800x450.jpg")] bg-top bg-no-repeat bg-contain border-neutral-900 border-2 h-96 w-96'>
                                        <div className='bg-gradient-to-b from-black/[.45] to-black/[.95] text-neutral-200 pt-8 pl-1 h-1/2'>
                                            <h1 className='text-2xl px-3 pt-1 pb-1'>Achel Avatar Shop Update</h1>
                                            <p className='px-3 pb-1 pt-3'>
                                                Fresh sales on skins for the brand new character, Achel!
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </section>
                        
                        <section className='flex flex-col items-end justify-start mt-5'>
                            <div className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-5 w-1/3 text-center text-neutral-200 text-3xl border-neutral-900 border-2 rounded-lg underline'>
                                <a href="https://vindictus.nexon.net/news/">Link to the official Event Page</a>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Home;