import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { TbSettingsAutomation } from "react-icons/tb";
import Testimonials from "../../components/Testimonials";
import Courses from "../../components/Courses";
import About from "../../components/About";

const Dashboard = ({ users }: any) => {
  return (
    <section style={{overflowX:"hidden"}}  className="flex flex-col w-full h-full justify-center items-center">
      <Navbar />
      <section className="w-full h-[70vh] flex  justify-center items-center">
        <Image
          src="/businessman-3213659_1280.jpg"
          alt="Abstract Image"
          width={300} // Adjust width as needed
          height={300} //
          objectFit="cover"
          className="absolute opacity-[0.75] w-full h-[70vh]"
        />
        <div className="lg-w[70%] flex flex-col items-center text-center justify-center lg:text-[45px] text-white">
          <div className="relative  font-medium inline-block w-full">
            Unlock Your Coding Potential with 30 Days Coding
          </div>
          <div className="lg:w-[60%] w-[22rem] text-center flex  flex-row items-start justify-center text-sm lg:text-lg">
            <div className="flex-1 relative leading-[160%]">{`With each day, you tackle coding tasks, honing skills, and gaining confidence.A disciplined path to unlock your coding potential and become a skilled developer. `}</div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center gap-20 relative bottom-[5rem]">

        <Card title={'Resume Builder'} width="18rem" />
        <Card title={'Job Board'} width="18rem"  />

        <Card title={'Courses'} width="18rem" />


      </section>
      <section className="flex justify-center items-center">
        <Courses />
      </section>

      <section className="flex  flex-col justify-center items-center mt-40">
      <h1 className="text-[2rem] text-bolder">Info about Resources</h1>
        <About/>
      </section>
      <section className="flex flex-col mt-40 justify-center items-center "  >
         <h1 className="text-[2rem] text-bolder">Testimonials</h1>
         <Testimonials/>
      </section>
      <section className="flex flex-col mt-40 justify-center w-full h-[30vh] border border-black vorder-2 items-center "  >
      <h1 className="text-[2rem] text-bolder">Footer</h1>

      </section>
    </section>
  );
};

export default Dashboard;
