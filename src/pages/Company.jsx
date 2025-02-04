const Company = () => {
  return (
    <section className="w-full flex flex-col md:flex-row md:items-center mb-12">
      <img
        src="src/assets/images/illustration-laptop-desktop.svg"
        alt="laptop"
        className="w-full md:w-[60%]"
      />
      <div className="w-full md:w-[40%] flex flex-col mt-12 md:mt-0">
        <div className="text-center md:text-left w-3/4 mx-auto">
          <h3 className="font-bold text-[var(--color-dark-blue)] text-2xl">
            Free, Open, Simple
          </h3>
          <p className="text-sm mt-8 text-[var(--color-dark-grayish-blue)]">
            Blogr is a free and open source application backed by a large community of helpful developers.
            It support features such as code syntax hilighting. Rss feeds social media integration, third
             party commenting tools and works seamlessly with Google Analytics.
          </p>
        </div>
        <div className="mt-14 text-center md:text-left w-3/4 mx-auto">
          <h3 className="font-bold text-[var(--color-dark-blue)] text-2xl">
            Powerful tooling
          </h3>
          <p className="text-sm mt-8 text-[var(--color-dark-grayish-blue)]">
             Batteries include. We built a simple and straight forward CLI tool tht makes customization and 
             deployment a breeze, but capable of producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Company;
