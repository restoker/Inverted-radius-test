

function App() {

  return (
    <div className="h-svh w-svw bg-white p-5">
      <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full bg-[url(/img/3.webp)] bg-center bg-cover">
        <div className="inv-rad-4 bg-white bg-cover rounded-br-4xl p-3 relative">1</div>
        <div className="col-start-6 bg-white bg-cover rounded-bl-4xl p-3 relative">2</div>
        <div className="col-span-2 row-span-2 row-start-5 bg-white bg-cover rounded-tr-4xl pt-3 pr-3 relative">
          <div className='absolute left-0.5 -top-16 h-14 w-14 flex items-center justify-center before:content-[""] before:absolute before:w-24 before:h-24 before:-top-8 before:-left-0.5 before:rounded-bl-4xl before:shadow-[-12px_10px_0px_rgba(255,255,255,1)] before:bg-transparent' />
          <img src="/img/1.webp" className="rounded-4xl h-full w-full object-cover object-top" alt="" />
          {/* bg-[url(/img/1.webp)] */}
        </div>
        <div className="col-span-2 col-start-3 row-start-6 bg-white bg-cover rounded-tr-4xl pt-3 pr-3 relative">4</div>
        <div className="row-span-2 col-start-6 row-start-5 bg-white bg-cover rounded-tl-4xl p-3 relative">5</div>
      </div>

      {/* <div className="relative isolate overflow-hidden">

        <div className='absolute bottom-0 h-64 w-64 flex items-center bg-red-400 justify-center border-8 before:content-[""] before:absolute before:w-4 before:h-4 before:bg-transparent before:top-0 before:left-0 before:rounded-2xl before:shadow-[-5px_-5px_0px_rgba(255,255,255)] rounded-xl border-white'>
          <div className="flex lg:flex-1 justify-center">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-12 w-auto animate-bounce"
              />
            </a>
          </div>
        </div>

        <div className='absolute right-0 top-0 h-32 w-64 flex items-center bg-white justify-center border-8 rounded-bl-xl before:content-[""] before:absolute before:w-5 before:h-5 before:bg-transparent before:-top-2 before:-left-7 before:rotate-90 before:rounded-2xl before:shadow-[-5px_-5px_0px_rgba(255,255,255)] border-white after:content-[""] after:absolute after:w-5 after:h-5 after:bg-transparent after:-bottom-7 after:-right-2 after:shadow-[6px_-6px_0px_rgba(255,255,255)] after:rounded-2xl'>
          <div className="flex lg:flex-1 justify-center">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-12 w-auto animate-bounce"
              />
            </a>
          </div>
        </div>

        <div className='absolute inset-0 -z-10 h-full w-full object-cover'>
          <div className="relative bg-[url(/img/3.webp)] w-svw h-svh before:content-[''] before:absolute before:w-5 before:h-5 before:bg-transparent before:bottom-0 before:left-64 before:rounded-full before:shadow-[-10px_10px_0px_rgba(255,255,255)] after:content-[''] after:absolute after:w-5 after:h-5 after:bg-transparent after:bottom-32 after:rounded-full after:shadow-[-10px_10px_0px_rgba(255,255,255)] after:left-0 bg-cover" />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center bg-black/5 backdrop-blur-sm px-2 rounded-2xl ring-1 ring-zinc-400/30 opacity-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 py-2">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

      </div> */}
    </div>
  )
}

export default App
