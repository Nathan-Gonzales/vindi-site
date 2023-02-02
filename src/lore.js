import imgBanner from './images/Jarlath.JPG';


const Lore = () => {
    return(
        <main className='bg-[url("./images/Magicians_Guild.png")] bg-fixed'>
            <section className='min-h-screen'>
                <section className='flex items-center justify-center'>
                    <div className='bg-neutral-900/[.65] flex flex-col h-full justify-between max-w-screen-xl px-3 border-neutral-900 border-x-2'>
                        <img className='border-neutral-900 border-x-2 border-b-2 mb-10 max-h-60' src={imgBanner} alt="" />
                        <div className='flex flex-col items-center'>
                            <h1 className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-10 w-4/5 text-center text-neutral-200 text-5xl border-neutral-900 border-2 rounded-sm'>
                                Lore</h1>
                            <p className='bg-gradient-to-b from-black to-neutral-900 font-red-rose p-10 w-full text-center text-neutral-200 text-3xl  rounded-sm mt-10 border-neutral-900 border-2'>
                                Our beloved story of the hero who can't catch a break from all the meddling gods.
                                Also, was Ellis always part of the Silent Brotherhood???
                            </p>
                        </div>
                        <section className='flex flex-col gap-x-10 gap-y-10 py-10 px-36 lg:flex-row lg:flex-wrap'>
                            <div className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 border-2 basis-1/3 flex-1 h-96'>Test</div>
                            <div className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 border-2 basis-1/3 flex-1 h-96'>Test</div>
                            <div className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 border-2 basis-1/3 flex-1 h-96'>Test</div>
                            <div className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 border-2 basis-1/3 flex-1 h-96'>Test</div>
                        </section>
                        <section className='flex flex-col items-end justify-start mt-5'>
                            <div className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-5 w-1/3 text-center text-neutral-200 text-3xl border-neutral-900 border-2 rounded-sm'>
                                <a href="https://forums.vindictus.nexon.net/categories/story">Link to the official Forum</a>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Lore;