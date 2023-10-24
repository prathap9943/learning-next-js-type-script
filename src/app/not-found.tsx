'use client'


import Image from "next/image";
import NotFoundImage from "../../public/assets/pages/not-found.png"
import "../scss/pages/page-not-found.scss";
import Button from "@/components/button";
import { useRouter } from "next/navigation";



const NotFound = () => {
    const router = useRouter()
    return (
        <div className="not-found" >
            <Image
                src={NotFoundImage}
                alt="Not Found Image"
                className="not-found-image"
                priority
            />
            <p>Hey dude! Looks like the page you are requesting is not found</p>
            <Button className='btn btn-primary' onClick={() => router.push("/" ,{scroll:false}) } > Click Me to go Home! </Button>
        </div>
    )
}

export default NotFound;