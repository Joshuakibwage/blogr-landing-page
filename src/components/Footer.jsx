

 

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-very-dark-blue)] rounded-tr-4xl flex flex-col md:flex-row 
    md:justify-around py-12 items-center space-y-8">
      <div>
        <h4 className="text-4xl text-white font-extrabold">Blogr</h4>
      </div>

      <div>
        <h4 className="font-bold text-white">Product</h4>
        <ul className="text-white">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Integrations</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold">Company</h4>
        <ul className="text-white">
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white">Connect</h4>
        <ul className="text-white">
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkedin</li>
            <li>Instagram</li>
        </ul>

      </div>
      
    </footer>
  )
}

export default Footer