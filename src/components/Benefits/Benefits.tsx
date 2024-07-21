import Image from "next/image";

interface BenefitsProps {
    icon: string;
    title: string;
    description: string;
    imageWidth: number;
    imageHeight: number;
}

export default function Benefits({icon, title, description, imageWidth, imageHeight}: BenefitsProps) {
    return (
        <div className="w-auto h-auto mt-1 pr-5 hover:bg-white hover:cursor-pointer rounded-lg shadow-bottom transition-colors duration-300">
            <div className="m-4 flex flex-start gap-6">
                <Image src={icon} alt="" className="bg-white rounded-lg p-2" width={imageWidth} height={imageHeight} />
                <div>
                    <p className="text-gray-900 mb-1">{title}</p>
                    <p className="text-gray-600 text-sm">{description}</p>
                </div>
            </div>
        </div>
    )
}
