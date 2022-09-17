import Image from "next/image";
export default function T_section() {
  const team_list=[
        {
            name: "Mamadou K",
            image: "/images/vision.jpeg",
            role:
              "Board",
          },

          {
            name: "Mamadou",
            image: "/assets/people-3.png",
            role:
              "Board",
          },
    ];

    return(
        <section className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-10">
        <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-4xl Avenir font-semibold text-black">
              Meet our Expert Team
            </h1>
          </div>
          <div className="flex items-center justify-center">
          {team_list.map((team_list, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1 ">
                  <Image
                    src={team_list.image}
                    height={50}
                    width={50}
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <h1 className="text-2x1 text-black font-semibold capitalize">
                      {team_list.name}
                    </h1>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-left">{team_list.role}.</p>
            </div>
          </div>
         ))}
         </div>
        </div>
      </section>
        </section>
    );

}