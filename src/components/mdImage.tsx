import Image from "next/image"

const MdImage = (props: { src?: string, alt?: string }) => (
    <span className='w-full h-auto flex justify-center'>
        <Image
            src={props.src || ""}
            alt={props.alt || ""}
            width={500}
            height={200}
            className="animate-fade-in h-auto" />
    </span>
)

export default MdImage