"use client";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import tutor from '../../../public/tutor.png';
import tutor2 from '../../../public/tutor2.jpg';
import Boy12 from '../../..//public/Boy 12.png';
import Boy20 from '../../..//public/Boy 20.png';
import Girl13 from '../../..//public/Girl 13.png';
import Girl17 from '../../..//public/Girl 17.png';


const testimonials = [
    {
        content:
            "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
        author: "Mariana Souza",
        role: "Tutora da Luna (Golden Retriever)",
        image: Girl13,
    },
    {
        content:
            "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
        author: "Rafael",
        role: "Tutor do Thor (Bulldog Francês)",
        image: Boy12,
    },
    {
        content:
            "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
        author: "Camila Fernandes",
        role: "Tutora da Mel e do Max",
        image: Girl17,
    },
{
    content:
    "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Lucas Rafael",
    role: "Tutora da Mel e do Max",
    image: Boy20,
    },
];

export function TestimonialsComponent() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }
    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-yellow-300 text-gray-800 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Depoimentos</h2>
                <p className="text-center mt-4 mb-12">Veja o que nossos clientes dizem sobre nossos serviços.</p>
                <div className="relative max-w-4xl mx-auto">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <div className="bg-gray-800 shadow-lg rounded-lg p-4">
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24 rounded-full overflow-hidden'>
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <blockquote className="text-white italic">"{item.content}"</blockquote>
                                            <p className="text-white font-bold">{item.author}</p>
                                            <p className="text-white text-sm">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={scrollPrev} className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full flex items-center justify-center shadow-lg">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={scrollNext} className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full flex items-center justify-center shadow-lg">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}