

const AboutUs = () => {
    return (
      <div className="hero h-auto lg:h-[100vh] overflow-hidden
      bg-fixed bg-cover bg-center relative" 
      style={{backgroundImage: 'url(  https://i.ibb.co/6tQXD19/fudu.jpg )'}}   >
        <div className="hero-overlay bg-opacity-50"></div>
        
        <div>

        <div className="text-center py-10 ">
             <h1 className="text-4xl md:text-5xl font-extrabold text-white">About Us</h1>
         </div>


        <div className=" mx-10 md:mx-24  lg:mx-36 my-auto " >
 
            <div className="grid mb-8 border border-black rounded-lg shadow-sm  md:mb-12 md:grid-cols-2">
                
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white bg-opacity-80 border-b border-black rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-black ">
                        <h3 className="text-xl font-semibold text-black">Our Story</h3>
                        <p className=" my-4">It all started with a shared love for exceptional food and beverages. Cibo was founded by a group of individuals who set out to redefine the culinary landscape. Our journey began with a simple idea: to bring joy to peoples lives through the magic of food and drink. That idea has since grown into a vibrant and thriving brand known for its innovation, quality, and commitment to the customer.</p>
                    </blockquote>
                </figure>
 
                <figure className="flex flex-col items-center justify-start p-8 text-center bg-white bg-opacity-80 border-b border-black rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-black">
                        <h3 className="text-xl font-semibold text-blac">Our Mission</h3>
                        <p className="my-4">At Cibo, our mission is to delight your senses and nourish your soul. We believe that food and beverages have the power to connect people, inspire creativity, and elevate everyday moments. We are on a mission to craft the finest products that make every meal a masterpiece and every sip an experience.</p>
                    </blockquote> 
                </figure>
 
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white bg-opacity-80 border-b border-black rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-black">
                        <h3 className="text-xl font-semibold text-blac">Our Values</h3>
                        <p className="my-4">Quality is at the heart of everything we do. We source the finest ingredients, employ meticulous craftsmanship, and adhere to the highest standards to bring you products that we are proud to put our name on. Our commitment to sustainability and responsible practices underscores our dedication to a better future for our planet and communities.</p>
                    </blockquote> 
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white bg-opacity-80 border-black rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-black">
                        <h3 className="text-xl font-semibold text-blac">Our Promise to You</h3>
                        <p className="my-4">Your satisfaction is our ultimate goal. We are here to create moments of joy and inspiration for you and your loved ones. We invite you to explore our products and experience the flavors, traditions, and innovation that make Cibo unique. Join us in our culinary adventure and be part of our journey. Connect with us, share your stories, and let us savor life together.</p>
                    </blockquote>  
                </figure>
            </div>
            
           </div>
        </div>
      </div>
    );
};

export default AboutUs;