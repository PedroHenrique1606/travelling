import Image from "next/image";
import { FaMapMarkerAlt } from 'react-icons/fa';

interface CardProps {
    title: string;
    duration: string;
    price: number;
    location: string;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
}

const formatRupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(value);
};

export default function Card({ title, duration, price, location, imageUrl, imageWidth, imageHeight }: CardProps) {
    return (
        <div className="max-w-xs bg-slate-300/20 border border-white rounded-lg backdrop-blur-lg p-3 fade-in-up">
            <div className="flex flex-col items-start">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={imageWidth}
                    height={imageHeight}
                    className="w-full h-auto"
                />
                <div className="flex items-center mt-2 self-start">
                    <FaMapMarkerAlt size={10} color="#42A8C3" />
                    <p className="text-slate-400 ml-2 text-sm">{location}</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm md:text-lg font-semibold text-slate-700 mb-2">{title}</p>
                <p className="text-xs md:text-sm text-slate-600 mb-2">{duration}</p>
                <p className="text-xs md:text-sm font-bold text-cyan-600">{formatRupiah(price)} <sub>/orang</sub></p>
            </div>
        </div>
    );
}
