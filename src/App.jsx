

function App() {

  return (
    <div className="h-svh w-svw bg-white p-5">
      <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full bg-[url(/img/3.webp)] bg-center bg-cover">
        <div className="inv-rad-4 bg-white bg-cover rounded-br-4xl p-3 relative">
          <div className='absolute -right-[3.6rem] -top-8 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-tl-4xl before:shadow-[-12px_-12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          <div className='absolute left-0.5 -bottom-[5.5rem] h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:-top-8 before:-left-0.5 before:rounded-tl-4xl before:shadow-[-12px_-12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          1
        </div>
        <div className="col-start-6 bg-white bg-cover rounded-bl-4xl p-3 relative">
          {/* clip for top */}
          <div className='absolute -left-[5.88rem] -top-8 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-tr-4xl before:shadow-[12px_-12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          {/* clip for bottom */}
          <div className='absolute right-[2.4rem] -bottom-6 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-tr-4xl before:shadow-[12px_-12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          2
        </div>
        <div className="col-span-2 row-span-2 row-start-5 bg-white bg-cover rounded-tr-4xl pt-3 pr-3 relative">
          <div className='absolute left-0.5 -top-16 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:-top-8 before:-left-0.5 before:rounded-bl-4xl before:shadow-[-12px_10px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          <img src="/img/1.webp" className="rounded-4xl h-full w-full object-cover object-top" alt="" />
        </div>
        <div className="col-span-2 col-start-3 row-start-6 bg-white bg-cover rounded-tr-4xl pt-3 pr-3 relative">4</div>
        <div className="row-span-2 col-start-6 row-start-5 bg-white bg-cover rounded-tl-4xl p-3 relative">
          <div className='absolute right-[2.4rem] -top-32 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:top-8 before:-left-0.5 before:rounded-br-4xl before:shadow-[12px_12px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          {/* your content here :D */}
          5
        </div>
      </div>
    </div>
  )
}

export default App
