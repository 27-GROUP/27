import M_section from "./m_section";
import V_section from "./v_section";
import NextLink from 'next/link'
export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            27~GROUP, the new era of technology and innovation.
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            The holding company of RITech and Genesis Investment.
          </p>
          <div className="flex justify-center">
            <NextLink href="/contact">
              <a
                className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              >
                <span className="justify-center">Contact Us</span>
              </a>
            </NextLink>
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <img
            className="w-1000 md:ml-1 ml-24"
            src="/images/header.png"
          ></img>
        </div>
      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-10 text-left lg:text-center">
            <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
              Join Us in Our Quest.
            </h1>
          </div>
          <M_section />
          <V_section />
        </div>
      </section>

    </section>
  );
}
