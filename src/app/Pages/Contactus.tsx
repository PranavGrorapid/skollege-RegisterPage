"use client";

import React, { useState } from "react";

const Contactus = () => {
  const dummyCountryData = [
    {
      code: "+91",
      flagUrl:
        "https://img.freepik.com/free-vector/round-flag-india_23-2147813736.jpg?w=740&t=st=1691137494~exp=1691138094~hmac=f5c75e6c0d40ff5170c4289b32894bf8db3a8e0927d2bf198ba33393a2edb3ef",
    },
    {
      code: "+1",
      flagUrl:
        "https://static.vecteezy.com/system/resources/previews/008/470/078/original/american-wavy-flag-clipart-free-png.png",
    },
    {
      code: "+44",
      flagUrl:
        "https://e7.pngegg.com/pngimages/116/89/png-clipart-flag-of-germany-flag-miscellaneous-english.png",
    },
    // Add more country codes and their corresponding flag URLs here
  ];

  const [countryCode, setCountrycode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const [selectedCountryCode, setSelectedCountryCode] = useState(
    dummyCountryData[0].code
  );
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleCountryCodeChange = (code: any) => {
    setSelectedCountryCode(code);
    setDropdownOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(userName,  countryCode, mobileNumber,message);
  };

  const selectedCountryFlag = dummyCountryData.find(
    (data) => data.code === selectedCountryCode
  )?.flagUrl;

  return (
    <div className="bg-baseWhites pb-10 md:pb-20">
      <div className="container flex flex-col py-5 space-y-3 ">
        <div className="text-zinc-800 text-lg font-semibold">Contact Us</div>

        <div className="w-80 text-zinc-800 text-sm font-normal leading-[21px]">
          Unsure about deciding your future? <br />{" "}
        </div>
        <div className="text-sm">
          {" "}
          Have questions? Need help? Or just want to say a hi?
          <br />{" "}
        </div>
        <div className="text-sm">
          Hit us up! We're all ears and ready to connect with you.
        </div>
      </div>

      <div className="flex justify-between md:my-10">

      <div className=" container">
        {/* contact us form starts */}

        <form action=""  onSubmit={handleSubmit}>
          <div className="space-y-6 flex flex-col justify-center items-center xl:space-y-12 xl:items-start">
            {/* contact us form ends */}

            <div className="  h-[45px] relative">
              <div className=" h-[37px] -left-[135px] top-[8px] absolute xl:h-[40px] xl:-left-[0]">
                {/* Input field for Name  */}
                <input
                  type="text"
                  className=" px-6  h-[47px] left-0 top-0 absolute bg-stone-50 rounded-[5px] border border-orange-400 xl:w-[500px] xl:h-[57px] "
                  placeholder="Enter your name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="w-11 h-[15px] -left-28 top-0 absolute xl:left-0">
                <div className="w-11 h-[0px] left-0 top-[9px] absolute border border-white "></div>
                <div className="left-[2px] top-0 absolute text-orange-400 text-xs font-normal xl:left-6 xl:text-sm">
                  Name
                </div>
              </div>
            </div>

            {/* Email input field starts */}
            <div className=" rounded-[5px] border justify-start items-start gap-2.5 inline-flex xl:h-[40px]">
              <input
                type="text"
                className="text-zinc-800 text-sm font-normal  px-[38px] py-3 xl:w-[500px] xl:h-[57px]  "
                placeholder="Email ID"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Email input field ends */}
            {/* country selecting , mobile selecting field starts */}
            <div className="w-[270px] justify-start items-center gap-1 inline-flex ">
              {/* country flag and dropdown showing field starts */}

              <div className="w-[102.03px] h-[40px] justify-start items-center flex xl:h-[50px] xl:mt-3">
                <div className="w-8 self-stretch relative">
                  {/* country flag  showing field starts */}

                  <div className="w-8 h-[40px] left-0 top-0 absolute rounded-tl-[5px] rounded-bl-[5px] border border-neutral-300 xl:h-[50px]" />
                  {selectedCountryFlag && (
                    <img
                      src={selectedCountryFlag}
                      alt="Selected Country Flag"
                      className="w-[15px] h-[13.12px] left-[9px] top-[15.50px] absolute"
                    />
                  )}
                </div>

                {/* country flag  showing field ends */}

                {/* dropdown showing field starts  */}

                <div className="self-stretch p-[5px] rounded-tr-[5px] rounded-br-[5px] border border-neutral-300 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="relative">
                    <button
                      className="w-[37px] text-zinc-600 text-sm font-normal"
                      onClick={() => setDropdownOpen(!isDropdownOpen)}
                      onChange={() => setCountrycode(selectedCountryCode)}
                    >
                      {selectedCountryCode}
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-[100%] left-0 mt-[5px] w-[37px] bg-white rounded border border-neutral-200">
                        {dummyCountryData.map((data) => (
                          <button
                            key={data.code}
                            className="w-full py-[5px] text-zinc-600 text-sm font-normal hover:bg-neutral-100"
                            onClick={() => handleCountryCodeChange(data.code)}
                          >
                            {data.code}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* dropdown showing field ends  */}
              </div>

              {/* country flag and dropdown  showing field ends */}

              {/* input field for entering mobile number starts */}

              <div className="grow shrink basis-0 h-[40px] relative">
                <div className="w-[163.97px] h-[40px] left-0 top-0 absolute rounded-[5px] border border-neutral-300 xl:w-[400px]  xl:h-[50px]" />
                <input
                  type="text"
                  className="w-[133.23px] left-[15.37px] top-[9px] absolute text-zinc-600 text-sm font-normal border-none bg-transparent focus:outline-none placeholder:text-xs xl:placeholder:text-m xl:placeholder:pt-4 xl:w-full"
                  placeholder="Enter mobile number"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>
            {/* input field for entering mobile number ends */}
            {/* country selecting , mobile selecting field ends */}

            {/* Text Area for typing messsage  starts*/}

            <div className="mx-auto xl:mx-0 xl:h-[40px] ">
              <input
                type="text"
                className=" h-[87px] px-[26px] py-2.5 rounded-[5px] border border-neutral-200 placeholder:text-slate-400 xl:w-[500px] xl:h-[100px]  "
                placeholder="Type your message.."
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Text Area for typing messsage  ends*/}

            {/* submit button starts */}

          <div className="hidden xl:block"></div>
            <div className="w-[118px] h-[47px] px-8 py-3.5 bg-orange-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex mx-auto xl:flex xl:mt-5 ">
              <button
                className="text-white text-base font-medium "
                type="submit"
              >
                Submit
              </button>
            </div>

            {/* submit button ends */}  
          </div>
        </form>

        </div>

        <div className="hidden md:block  rounded-[10px] me-3 container">

         <img src="./images/registerpage/contactdeks.png" alt="contact us" className="w-full"/>

        </div>

       

        </div>

     {/* contact us form ends */}


     {/* Talk to experts section starts */}

<div className="flex flex-col py-10 space-y-6 container lg:hidden">

     <div className="text-zinc-800 text-xl font-semibold">Talk to our experts</div>

     <div className="  justify-start items-start gap-[15px] inline-flex pb-3">

      <ul className="flex  space-x-5">

        <li><a href=""> <div className="text-orange-400 text-xs font-medium underline">New Student</div></a></li>
        <li><a href="">  <div className="text-orange-400 text-xs font-medium">Existing Student</div></a></li>
        <li><a href="">  <div className="text-orange-400 text-xs font-medium">Additional queries</div></a></li>

      </ul>
     
    </div>

    {/* experts contact details box starts */}


    <div className=" bg-stone-50 rounded-[5px] md:py-5">


   <div className="flex flex-col p-6 space-y-6">

    {/* info detail starts */}

   <div className="flex items-center space-x-5">
   <div className="">

<img src="./images/registerpage/at.svg" alt="" className="w-6 h-6" />

</div>

   <div className="text-zinc-600 text-lg font-normal tracking-widest">
    info@learningshala.in
   </div>

    

    </div>

      {/* info detail ends */}


 {/* phone detail starts */}

 <div className="flex items-center space-x-5">
   <div className=" relative">

     <img src="./images/registerpage/phone.svg" alt="" className="w-6 h-6" />

   </div>

   <div className="text-zinc-600 text-lg font-normal tracking-widest">
   +91 83698 14295
   </div>

    

    </div>

      {/* phone detail ends */}


       {/* map details starts */}

       <div className="flex items-start space-x-5">
   <div className=" relative">

     <img src="./images/registerpage/map-marker-radius.svg" alt="" className="w-7 h-7" />

   </div>

   <div className="text-zinc-600 text-sm font-normal tracking-widest">Office address, XYZ Street,<br/>Suite Chambers,<br/>Houston, Texas<br/>1100123</div>

    

    </div>

   {/* map details ends */}

   </div>

    
    </div>
  
     </div>

{/* This section is visible in  above medium devices only */}

<div className="hidden md:block container">
<div className="w-[350px]"><span className="text-zinc-600 text-lg font-medium leading-loose">Not a member yet? </span><span className="text-orange-400 text-lg font-medium leading-loose">Join us</span><span className="text-zinc-600 text-lg font-medium leading-loose"> it's free.</span></div>
</div>

     <div>

     </div>

  {/* Talk to experts section ends */}

  {/* From This section . it will be visible only in mobile devices */}


  {/* social media links section starts */}

  <div className=" w-full px-6 py-[18px]  bg-orange-400 flex-col justify-center items-start gap-2.5 inline-flex md:hidden">
    <div className="self-stretch py-20 h-[123px] flex-col justify-center items-start gap-[18px] flex">
        <div className="self-stretch h-[87px] flex-col justify-center items-start gap-[18px] flex">
            <div className="self-stretch"><span className="text-white text-sm font-normal">Follow our </span><span className="text-white text-sm font-normal underline">Blo</span><span className="text-white text-sm font-normal">g</span></div>
            <div className="self-stretch text-white text-sm font-normal">Copyright © 2023 PlatformX. All rights reserved.</div>
            
            <div className="flex   ">

               <ul className="flex gap-[18px]">
               <div className="text-right text-white text-xs font-normal"><li><a href="">Privacy Policy</a></li></div>
               <div className="text-right text-white text-xs font-normal"> <li><a href="">Terms of Use</a></li></div>
               <div className="text-right text-white text-xs font-normal"> <li><a href="">Legal</a></li></div>
               <div className="text-right text-white text-xs font-normal"> <li><a href=""></a>Site Map</li></div>
               </ul>   

            </div>

            <div className="flex mx-auto gap-[18px] ">
              <div><img src="./images/registerpage/twitter.svg" alt="twitter" /></div>
              <div><img src="./images/registerpage/fb.svg" alt="fb" /></div>
              <div><img src="./images/registerpage/insta.svg" alt="insta" /></div>
              <div><img src="./images/registerpage/linkedin.svg" alt="linkedin" /></div>
            </div>

        </div>
        <div className="h-[18px] relative">
            <div className="w-[18px] h-[18px] left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
            <div className="w-[18px] h-[18px] left-[58.50px] top-0 absolute flex-col justify-start items-start inline-flex">
                <div className="w-[18px] h-[18px] relative">
                </div>
            </div>
            <div className="w-[18px] h-[18px] left-[117px] top-0 absolute flex-col justify-start items-start inline-flex" />
            <div className="w-[18px] h-[18px] left-[175.50px] top-0 absolute flex-col justify-start items-start inline-flex" />
        </div>
    </div>
</div>

  {/* social media links section starts */}

  {/* footer Links starts */}

  <div className="container py-10 flex flex-col  md:hidden">

    <ul className="flex flex-col space-y-2">

    <div><li  className="text-orange-400 text-sm font-bold">Platform X</li></div>
  <div> <li className="text-orange-400 text-sm font-normal">Platform X Office address</li></div>


  <div className="text-neutral-900 text-sm font-normal py-2">More to Explore</div>

  <li className="text-neutral-400 text-sm font-normal">Online & Distance MBA</li>
  <li className="text-neutral-400 text-sm font-normal">Online & Distance UG Courses</li>
  <li className="text-neutral-400 text-sm font-normal">Online & Distance UG Courses</li>
  <li className="w-[233px] text-neutral-400 text-sm font-normal">Online & Distance Best colleges</li>


  <div className="text-neutral-900 text-sm font-normal py-3">Tools and Research</div>

   <div className="flex items-center justify-between">

    <div>
    <li className="text-neutral-400 text-sm font-normal">Career Compass</li>
    </div>

    <div>
    <li className="text-neutral-400 text-sm font-normal">Write a review</li>
    </div>

    <div>
    <li className="text-neutral-400 text-sm font-normal">Qna Forum</li>
    </div>

   </div>

    </ul>

   






  </div>


  {/* footer Links ends */}


      </div>
    
  )
}

export default Contactus;
