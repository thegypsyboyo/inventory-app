import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';



const NoResults = ({ title, description, link, linkTitle }) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      {/* light mode Illustration */}
      <Image
        src="/light-illustration.png"
        alt="No result illustration"
        width={470}
        height={400}
        className="block object-contain dark:hidden"
      />

      <h2 className="text-[20px] max-w-[40%] text-center font-extrabold mt-8 ">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link href={link}>
        <Button className="bg-[#4f46e5] rounded-[3px] border-none font-semibold text-white !py-[16px] px-[36px] mt-3">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResults;
