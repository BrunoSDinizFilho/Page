import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { CheckCheck, MapPin } from "lucide-react";
import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">

      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="relative">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image 
            src={about1Img}
            alt="Foto do Cachorro"
            fill
            quality={100}
            priority
              className="object-cover hover:scale-110 duration-300" data-aos="fade-down-left"
          />
        </div>
        <div className="absolute w-40 h-40 right-4 bottom-8 border-2 rounded-lg overflow-hidden">
          <Image
            src={about2Img}
            alt="Foto do Cachorro 2"
            fill
            quality={100}
            priority
            
          />
        </div>
        </div>

        <div className="space-y-6 mt-10">
          <h2 className="text-4xl font-bold" data-aos="fade-up"
            data-aos-duration="3000">Sobre</h2>

          <p data-aos="fade-up"
            data-aos-duration="3000">
            A PetCare é uma clínica veterinária que oferece serviços de qualidade e atendimento personalizado para o seu pet.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCheck className="text-red-500" />  
            Aberto desde 2024</li>
            <li className="flex items-center gap-2">
              <CheckCheck className="text-red-500" />  
            Consultas</li>
            <li className="flex items-center gap-2">
              <CheckCheck className="text-red-500" />  
            Internação</li>
            <li className="flex items-center gap-2">
              <CheckCheck className="text-red-500" />
            Cirurgias</li>
            <li className="flex items-center gap-2">
              <CheckCheck className="text-red-500" />
            Exames</li>
          </ul>
         
         <div className="flex gap-2">
         <a href="#"
              className="bg-green-500 px-5 py-2 rounded-md mt-4 font-semibold flex items-center justify-center w-fit gap-2 text-white  hover:bg-green-600">
            <WhatsappLogo className="w-5 h-5 text-white" />
            Contato via WhatsApp
          </a>

          <a href="#"
              className="bg-transparent px-5 py-2 rounded-md mt-4 font-semibold flex items-center justify-center w-fit gap-2 text-black border border-black  hover:bg-gray-200">
            <MapPin className="w-5 h-5 text-black" />
            Endereço da Loja
          </a>
         </div>
        </div>
      </div>
    </section>
  );
}