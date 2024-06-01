import bg2 from '/image/bg-2.webp'

const Warning = () => {
  return (
    <main className="h-screen overflow-hidden bg-black">
      <div className='-z-10 ml-auto h-screen w-full lg:w-2/5 bg-cover' style={{ backgroundImage: `url(${bg2})` }}>
      </div>
      <div className='absolute inset-0 max-w-[40rem] h-fit z-20 mx-4 md:mx-10 lg:mx-16 xl:mx-36 2xl:mx-44 my-auto p-6 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 lg:bg-opacity-0 animate-fade-up'>
        <h1 className='RobotoMono text-4xl lg:text-4xl text-white'>Think twice before you calculate someones life with money</h1>
        <h4 className='Inter text-xl text-slate-50 mt-4'>
          Let&apos;s change our mentality, Be a part of better
          <br />
          <span className='RobotoSlab text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-green-500 uppercase'>India</span>
        </h4>
      </div>
    </main>
  )
}

export default Warning