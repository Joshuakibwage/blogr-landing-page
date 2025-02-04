 

const Connect = () => {
  return (
    <section className="w-full bg-[var(--color-dark-blue)] mt-18 rounded-tr-4xl rounded-bl-4xl">
      <div className="w-3/4 mx-auto flex flex-col md:flex-row mb-10">
            <div className="w-full md:w-1/2">
                <img 
                    src="src/assets/images/illustration-phones.svg" 
                    alt="phones"
                    className=" w-full" 
                />
            </div>
            <div className="w-full md:w-1/2 md:text-left text-center my-10 md:place-content-center md:ml-18">
                <h3 className="text-[var(--color-neutral-white)] font-bold text-3xl">State of the Art Infrastructure</h3>
                <p className="text-[var(--color-grayish-blue)] mt-8">With reliability and speed in mind, world wide
                    data centers provide the back-bone for ultra-fast connectivity. This ensures your site will
                    load instantly, no matter where your readers are keeping your site competitive. 
                </p>
            </div>
      </div>
        
    </section>
  )
}

export default Connect