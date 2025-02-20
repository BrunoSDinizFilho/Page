"use client";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel } from 'lucide-react';
import { WhatsappLogo } from "@phosphor-icons/react";

const services = [
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
        duration: "1h",
        price: "$50",
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },
    {
        title: "Consulta Veterinária",
        description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
        duration: "1h",
        price: "$45",
        icon: <Syringe />,
        linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
    },
    {
        title: "Táxi Pet",
        description: "Transporte de animais de estimação para consultas veterinárias, banho e tosa, viagens e outros locais. Inclui cinto de segurança e caixa de transporte.",
        duration: "1h",
        price: "$30",
        icon: <CarTaxiFront />,
        linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
    },
    {
        title: "Hotel para Pets",
        description: "Hospedagem de animais de estimação em ambiente seguro e confortável. Inclui alimentação balanceada, atividades recreativas e acompanhamento veterinário.",
        duration: "1h",
        price: "$60",
        icon: <Hotel />,
        linkText: 'Olá, vi no site sobre Hotel para Pets e gostaria de mais informações.'
    }
];

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 2 },
            "(min-width: 1024px)": { slidesToScroll: 3 }
        }
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }
    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white text-gray-800 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Nossos Serviços</h2>
                <p className="text-center mt-4 mb-12">Conheça os serviços que oferecemos para o seu pet.</p>
                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <div className="bg-gray-800 shadow-lg rounded-lg p-4">
                                        <div className="flex items-center justify-center mb-4">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-white text-xl font-bold mb-2 select-none">{item.title}</h3>
                                        <p className="text-white mb-4 select-none">{item.description}</p>
                                        
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