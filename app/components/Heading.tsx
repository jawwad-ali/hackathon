import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

interface HeadingProps {
    subtitle:string
    mainHeading:string
}

const Heading:React.FC<HeadingProps> = ({subtitle,mainHeading}) => {
  return (
    <div className="text-center w-full">
      <span
        className={`${sora.className} font-bold uppercase text-center text-xs text-[#0062f5] tracking-wider`}
      >
        {subtitle}
      </span>
      <h2
        className={`${sora.className} font-bold text-[32px] pt-5 tracking-wider text-[#212121]`}
      >
        {mainHeading}
      </h2>{" "}
    </div>
  );
};

export default Heading;
