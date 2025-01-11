import Card from "./components/Card";

export const Cards = () => {
  return (
    <section className=" bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 ">
      <div className="container mx-auto">
         <h2
            className="text-4xl md:text-5xl font-bold tracking-tighter 
            bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text 
            mt-5 py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center"
        >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.?{" "}
        </h2>
        <p className="text-xl text-[#010D3E] tracking-tight px-4 sm:px-6 lg:px-8 pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <div className="flex md:flex-row flex-col gap-10 items-center justify-center">
          <Card
            title="Perguntas Frequentes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque tempus suscipit. Curabitur cursus tempus lacinia. Cras posuere auctor dolor, id congue eros commodo in. Donec consectetur pellentesque consectetur. Donec iaculis aliquam ultrices. Quisque a gravida purus, eget mollis nulla."
          />
          <Card
            title="Perguntas Frequentes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque tempus suscipit. Curabitur cursus tempus lacinia. Cras posuere auctor dolor, id congue eros commodo in. Donec consectetur pellentesque consectetur. Donec iaculis aliquam ultrices. Quisque a gravida purus, eget mollis nulla."
          />
          <Card
            title="Perguntas Frequentes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque tempus suscipit. Curabitur cursus tempus lacinia. Cras posuere auctor dolor, id congue eros commodo in. Donec consectetur pellentesque consectetur. Donec iaculis aliquam ultrices. Quisque a gravida purus, eget mollis nulla."
          />
        </div>
      </div>
    </section>
  );
};
