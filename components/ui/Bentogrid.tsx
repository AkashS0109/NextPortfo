import { cn } from "@/lib/utils";

import MagicButton from "./MagicButton";

import { FaFileAlt, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto  ",
        className
      )}
    >
    
      {children}
     
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?:string,
  imgClassName?:string,
  titleClassName?: string,
}) => {
  const leftLists = ["ReactJS","NodeJs","Express","MongoDb"];
  const rightLists = ["NextJs"];

  return (
    <div className={cn(
      "overflow-hidden relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-none dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border  border-transparent justify-between flex flex-col  space-y-4  border-red-500 ",
      className
    )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,46,57,1) 25%, rgba(0,212,255,1) 100%)'
      }}
    >
    
      <div className="h-full">
        <div className="w-full h-full absolute ">
          {
            img &&(<img src={img} alt={img} className={cn(imgClassName,'object-cover , object-center')}/>)
          }
        </div>

        { id===4 &&(
          <div>
          </div>
        )}
        
        
        {/* //revert from here */}

        

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
            <div className={`font-sans shadow-xl  md:max-w-45 md:text-md lg:text-lg text-md  z-10 ${id===1 ? "font-bold shadow-lg":"font-extralight"} `}>
            { description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10"
          >
            {title}
          </div>
          {id === 2 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-1 md:gap-3 lg:gap-4">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 4 && (
            <div className="p-3 flex  flex-row lg:gap-4 gap-3  mt-3   items-center justify-center  ">
             <a href="https://drive.google.com/file/d/1mUTaTFCGdyjBYkJxvXPvbDDgb7a8zc-E/view?usp=drive_link"  target="_blank"> <MagicButton title='Resume'  icon={<FaFileAlt />}  // Example icon
  position="right"  otherClasses=""/></a>
           <a href="https://github.com/AkashS0109" target="_blank" > <MagicButton title='Github'  icon={<FaGithub />}  // Example icon
  position="right"  otherClasses=""/></a>
               <a href="https://www.linkedin.com/in/akash-singh-47b38215b/" target="_blank"> <MagicButton title='LinkedIn'  icon={<FaLinkedin />}  // Example icon
  position="right"  otherClasses=""/></a>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};
















   