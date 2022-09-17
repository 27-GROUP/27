export default function V_section() {
    return (
      <div className="flex flex-col w-full lg:flex-row">
        <div className="lg:flex-grow md:w-1/2 md:ml-15 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
        <img  className="w-1000 md:ml-1 ml-24 rounded-xl" 
          src="/images/vision.jpeg"
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
        <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
          Our Vision
        </h1>
        <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
          Spread new technologies and innovations in Africa.
          Impact positively on African communities.
        </p>
      </div>
      
      </div>
      
      );
    }
    