 

const Design = () => {
  return (
    <section className="w-3/4 mx-auto">
        <div>
            <h2 className="text-[var(--color-dark-blue)] font-bold text-3xl text-center mt-18"
            >
                Designed for the future
            </h2>
        </div>

        <div className="w-full mt-12 flex flex-col-reverse md:flex-row md:items-center">
            <div className="w-full md:w-1/2 flex flex-col">
                <div className="text-center md:text-left">
                    <h3 className="font-bold text-[var(--color-dark-blue)] text-2xl"
                    >
                        Introducing an extensible editor
                    </h3>
                    <p className="text-sm mt-8 text-[var(--color-dark-grayish-blue)]"
                    >
                        Blogr features an exceedingly intuitive interface which lets you focus on one thing 
                        :Create Content. The editor supports management of multiple blogs and allows easy
                        manipulation of embeds such as images, videos and markdown. Extensibility with plugins 
                        and themes provide easy ways to add functionality or change the looks of a blog. 
                     </p>
                </div>
                <div className="mt-14 text-center md:text-left">
                    <h3 className="font-bold text-[var(--color-dark-blue)] text-2xl"
                    >
                        Robust content management
                    </h3>
                    <p className="text-sm mt-8 text-[var(--color-dark-grayish-blue)]"> 
                        Flexible content management enables  users to easily move through posts. Increase the
                         usability of yur blog by adding customized categories, sections, formats or flow. With this 
                         functionality you are in full control.
                     </p>
                </div>
            </div>
            <div className="w-full md:ml md:w-1/2 ">
         
                <img 
                    src="src/assets/images/illustration-editor-desktop.svg" 
                    alt="illustration" 
                    className=" left-40 w-full"
                />
            </div>
        </div>
    </section>
  )
}

export default Design