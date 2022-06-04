import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

const Step7 = ({ prevStep,handleImgUpload, nextStep, handlePropImg, handleChange, values }) => {
  const router = useRouter();
  const goToStep6 = () => {
    prevStep();
  };
  const goToStep8 = () => {
    nextStep();
  };
  return (
    <div className="flex h-screen">
      <div className=" opacity-55 relative hidden h-full w-0  flex-1 justify-center bg-gradient-to-br from-primary to-[#FFB4A2] lg:block ">
        <div className=" items-start pl-8 pt-4 ">
          <Image
            src="/logo.png"
            alt="logo"
            height="50px"
            width="50px"
            className="absolute object-contain"
          />
        </div>
        <div className="w-500 grid place-items-center space-x-10 pt-48 font-[Poppins] text-3xl font-bold text-white ">
          Next, lets add some<br></br> photos of your place
        </div>
      </div>

      <div className="justify center flex w-[50%]  flex-1 flex-col space-y-6 bg-white py-12 px-4 font-[Poppins] sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="h-96 space-y-3 overflow-y-scroll rounded-md border border-gray-500">
          <h2 className=" pt-3 text-center font-semibold opacity-80">
            Add at least 3 photos
          </h2>
          <div className=" pl-2 ">
            <Image
              src="/image.png"
              alt="upload image"
              height="120px"
              width="130px"
              className="opacity-30"
            />
            <div className=" space-y-2 pt-2 pb-7 text-secondary">
              <input
               type="file"
               className=" outline-none"
               onChange={handlePropImg}
               /> <br></br>
              <button
              onClick={handleImgUpload}
              className="underline">
                Upload your Cover photo here
              </button>
            </div>
          </div>
          <div className="pl-2">
            <Image
              src="/image.png"
              alt="upload image"
              height="120px"
              width="130px"
              className="opacity-30"
            />
            <div className=" space-y-2 pt-2 pb-7 text-secondary">
              <input 
              type="file" 
              className=" outline-none" 
              onChange={handlePropImg} 
              /> <br></br>
              <button
              onClick={handleImgUpload}
              className="underline"> Upload photo </button>
            </div>
          </div>
          <div className="pl-2">
            <Image
              src="/image.png"
              alt="upload image"
              height="120px"
              width="130px"
              className="opacity-30"
            />
            <div className=" space-y-2 pt-2 pb-7 text-secondary">
              <input 
              type="file" 
              className=" outline-none" 
              onChange={handlePropImg} 
              /> <br></br>
              <button 
              onClick={handleImgUpload}
              className="underline"> Upload photo </button>
            </div>
          </div>
          <div className="pl-2">
            <Image
              src="/image.png"
              alt="upload image"
              height="120px"
              width="130px"
              className="opacity-30"
            />
            <div className=" space-y-2 pt-2 pb-7 text-secondary">
              <input 
              type="file" 
              className=" outline-none" 
              onChange={handlePropImg} 
              /> <br></br>
              <button 
              onClick={handleImgUpload}
              className="underline"> Upload photo </button>
            </div>
          </div>
          <div className="pl-2">
            <Image
              src="/image.png"
              alt="upload image"
              height="120px"
              width="130px"
              className="opacity-30"
            />
            <div className=" space-y-2 pt-2 pb-7 text-secondary">
              <input
               type="file"
                className=" outline-none"
                 onChange={handlePropImg} 
                 /> <br></br>
              <button 
              onClick={handleImgUpload}
              className="underline"> Upload photo </button>
            </div>
          </div>
        </div>
        <div className="mr-5 flex justify-between pt-20">
          <button
            onClick={goToStep6}
            className="text-md left-4 inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white  shadow-md "
          >
            Back
          </button>
          <button
            onClick={goToStep8}
            className="text-md inline-block rounded-full bg-[#b5838d] px-6 py-2 font-[Poppins] font-bold text-white shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step7;