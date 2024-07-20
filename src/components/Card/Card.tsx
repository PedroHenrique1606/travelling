import Image from "next/image";
import FloresRoad from "@/assets/floresroad.png";

export default function Card() {
    return (
        <div className="bg-slate-100/50 w-auto">
            <Image src={FloresRoad} alt="flores" />
        </div>
    );
}
