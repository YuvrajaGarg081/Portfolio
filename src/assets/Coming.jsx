const Comimg = ()=>{

  return(
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <section className="content w-full max-w-3xl text-center">
        <a href="#" className="brand inline-flex items-center gap-2 mb-12">
          {/* <span className="brand-icon"></span> */}
          <span className="text-xl font-bold tracking-wide">
            NEXORA
          </span>
        </a>
        <div className="mb-8">
          <span className="status-badge">
            <span className="status-dot"></span>
            Something exciting is on the way
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tightmb-6">
          We're
          <span className="gradient-text">Coming Soon</span>
        </h1>

        
      </section>
    </div>
  )
}

export default Comimg