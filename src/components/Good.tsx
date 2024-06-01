import bg3 from "/image/bg-3.webp";

const Good = () => {
  return (
    <main className="p-4 md:p-10 lg:p-16 xl:p-36 2xl:p-44 flex justify-center items-center min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg3})` }}>
      <div className="p-6 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 max-w-[35rem]  animate-fade-up animate-once animate-ease-linear">
        <h1 className="text-4xl text-slate-100 font-semibold">The Champion of Change</h1>
        <p className="Inter mt-4 text-white">
          Your choice is a powerful step towards creating a fairer, more educated, and prosperous future for India. Your actions inspire us all to build a society where every marriage is based on love and respect, not financial transactions. Thank you for being a champion of change.
        </p>
      </div>
    </main>
  )
}

export default Good