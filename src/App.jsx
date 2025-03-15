

function App() {
  // <div className='absolute -left-[5.8rem] bottom-[4.5rem] h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-br-4xl before:shadow-[12px_12px_0px_rgba(255,255,255,1)] before:bg-lime-400' />
  return (
    <div className="h-svh w-svw bg-white p-4 relative z-10">
      <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full bg-[url(/img/3.webp)] bg-center bg-cover">
        {/* seccion top left */}
        <div className="inv-rad-4 bg-white bg-cover rounded-br-4xl p-3 relative">
          <div className='absolute -right-[3.6rem] -top-8 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-tl-4xl before:shadow-[-12px_-12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          <div className='absolute left-0.5 -bottom-[5.5rem] h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:-top-8 before:-left-0.5 before:rounded-tl-4xl before:shadow-[-12px_-12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          <div className="flex flex-col items-center w-full h-full">
            <div className="flex justify-evenly items-center">
              <div className="flex flex-col items-center mr-1">
                <p className="text-2xl">JUN</p>
                <p className="text-zinc-400">Friday</p>
              </div>
              <p className="text-red-500 text-6xl">23</p>
            </div>
            <p className="flex justify-center items-center w-full h-full text-5xl">09:16</p>
          </div>
          {/* 1 */}
        </div>
        <div className="col-start-6 bg-white bg-cover rounded-bl-4xl p-3 relative">
          {/* clip for top */}
          <div className='absolute -left-[5.88rem] -top-8 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-tr-4xl before:shadow-[12px_-12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          {/* clip for bottom */}
          <div className='absolute right-[2.4rem] -bottom-6 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-tr-4xl before:shadow-[12px_-12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          2
        </div>
        {/* seccion boton center 4 */}
        <div className="col-span-2 row-span-2 row-start-5 bg-white bg-cover rounded-tr-4xl pt-3 pr-3 relative">
          <div className='absolute left-0.5 -top-16 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:-top-8 before:-left-0.5 before:rounded-bl-4xl before:shadow-[-12px_10px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          <img src="/img/1.webp" className="rounded-4xl h-full w-full object-cover object-top" alt="" />
        </div>
        <div className="col-span-2 col-start-3 row-start-6 bg-white bg-cover rounded-tr-4xl pt-3 pr-3 relative">
          <div className='absolute -right-[3.6rem] bottom-[4.5rem] h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-bl-4xl before:shadow-[-12px_12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          <div className='absolute left-[0.15rem] -top-32 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-bl-4xl before:shadow-[-12px_12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          <div>
            <h1>Sakura Dreams</h1>
            <h2>Hana Mitsuki</h2>
            <p>03:26</p>
          </div>
          {/* 4 */}
        </div>

        <div className="row-span-2 col-start-6 row-start-5 bg-white bg-cover rounded-tl-4xl p-3 relative">
          <div className='absolute right-[2.4rem] -top-32 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-br-4xl before:shadow-[12px_12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          <div className='absolute -left-[5.8rem] bottom-[4.5rem] h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-br-4xl before:shadow-[12px_12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          {/* your content here :D */}
          5
        </div>
      </div>
    </div>
  )
}

export default App
