import Image from 'next/image';
import golden from '../../../public/golden.png';
import royal from '../../../public/royal.png';
import primier from '../../../public/primier.png';
import whiskas from '../../../public/whiskas.png';
import natural from '../../../public/natural.png';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden }
];

export function Footer() {
    return (
        <section className="bg-red-600 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-2xl font-bold mb-8 text-center'>Nossos Parceiros</h4>
                    <div className="flex flex-wrap justify-center gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>PetShopDev</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold mb-2'>Links Úteis</h4>
                        <ul className='space-y-2'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold mb-2'>Contato</h4>
                        <p>Rua dos Bobos, nº 0</p>
                        <p>Bairro: Jardim dos Palhaços</p>
                        <p>Cidade: São Paulo - SP</p>
                        <p>CEP: 00000-000</p>
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold mb-2'>Redes Sociais</h4>
                        <ul className='space-y-2'>
                            <li>
                                <a href="#" target='_blank' className='flex items-center gap-2'>
                                    <Instagram className='w-6 h-6' /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank' className='flex items-center gap-2'>
                                    <Linkedin className='w-6 h-6' /> Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank' className='flex items-center gap-2'>
                                    <Youtube className='w-6 h-6' /> Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
}