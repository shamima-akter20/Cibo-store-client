

const Footer = () => {
    return (
        <div>
          <footer className="footer p-10 bg-[#C4A484]  text-base-content">
  <aside>
         <div className="flex ">
           <img className="h-8 md:h-10" src="https://i.ibb.co/c2mFvV2/fast-food-5766043.png" alt="" />
           <a className="normal-case text-2xl md:text-4xl text-black font-bold ">
            Ci<span className="text-[#8A3324]">b</span>o</a>
      </div>
    <p>CIBO Industries Ltd.<br/>Since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>  
        </div>
    );
};

export default Footer;