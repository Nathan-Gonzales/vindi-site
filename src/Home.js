import imgBanner from './images/Goddess_Morrighan.jpg';



const Home = () => {
    return(
        <main className='bg-[url("./images/Earthborn.png")] bg-fixed'>
            <section className='min-h-screen'>
                <section className='flex items-center justify-center'>
                    <div className='bg-neutral-900/[.75] flex flex-col h-screen justify-start max-w-screen-xl px-3 border-neutral-900 border-2'>
                        <img className='border-neutral-900 border-2 mb-5' src={imgBanner} alt="" />
                        <div className='flex flex-col items-center'>
                            <h1 className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-10 w-4/5 text-center text-neutral-200 text-5xl border-neutral-900 border-2 rounded-sm'>
                                Vindictus University</h1>
                            <p className='bg-gradient-to-b from-black to-neutral-900 font-red-rose p-10 w-full text-center text-neutral-200 text-3xl  rounded-sm my-5 border-neutral-900 border-2'>
                                Welcome mercenaries, to our own little pocket of Erinn. In this place outside of time you can learn 
                                how to change your fate with the knowledge of others who have walked this path before you. 
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Home;