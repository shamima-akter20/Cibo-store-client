

const Banner = () => {
    return (
        <div>
            <div className="hero h-[30vh] md:h-[80vh] overflow-hidden
           bg-fixed bg-cover bg-center  relative
            " style={{backgroundImage: 'url(  https://i.ibb.co/8cCtykK/burger3.jpg  )'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md px-8 md:px-0">
      <h1 className="text-white text-xl md:text-4xl font-extrabold ">Delight Your Senses</h1>
      <p className="mt-2 md:mt-6 text-[10px] md:text-sm mb-5"> 
      Welcome to our world of culinary excellence where every dish is a masterpiece 
      waiting to be savored. Discover the art of gastronomy, where each ingredient is carefully 
      selected to create unforgettable taste experiences. Join us in this delightful 
      journey, and let the aroma and taste of our creations transport you to a world of 
      culinary bliss. Savor every bite, and relish the joy of culinary discovery.
      </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
// bg-fixed bg-cover bg-center  relative