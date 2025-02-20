import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import dogImg from '../../../public/hero-dog.webp';
import Image from 'next/image';

export function Page() {
  return (
    <section className="bg-red-500 text-white relative overflow-hidden">
        <div>
            <Image
            src={dogImg}
            alt='Foto do Cachorro'
            fill
            sizes='100vw' priority
            className='object-cover opacity-60 lg:hidden'/>
        <div className='absolute inset-0 bg-black opacity-35 md:hidden'>

        </div>
        </div>
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" 
            data-aos="zoom-out-left">
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg mt-4">
              A PetCare é uma clínica veterinária que oferece serviços de qualidade e atendimento personalizado para o seu pet.
            </p>
            <div>
              <a
                href="#"
                className="bg-green-500 px-5 py-2 rounded-md mt-4 font-semibold flex items-center justify-center w-fit gap-2 hover:bg-green-600"
              >
                <WhatsappLogo className="w-5 h-5" />
                Contato via WhatsApp
              </a>
            </div>
            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
              </p>
            </div>
          </div>
          <div className="hidden md:block h-full relative">
            <Image src={dogImg} alt="Foto do Doguinho" className="object-contain"
             fill sizes="(max-width: 768px) 0vw, 50vw" quality={100} priority />
          </div>
        </article>
      </div>
    </section>
  );
}