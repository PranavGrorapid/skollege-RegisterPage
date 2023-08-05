"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";

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

const SignupPage = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    dummyCountryData[0].code
  );
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // form state values

  const [userName, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [countryCode, setCountrycode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleCountryCodeChange = (code: any) => {
    setSelectedCountryCode(code);
    setDropdownOpen(false);
  };

  const selectedCountryFlag = dummyCountryData.find(
    (data) => data.code === selectedCountryCode
  )?.flagUrl;

  const handleSubmit = (e :any) => {
    e.preventDefault();
    console.log(userName, email, dob, countryCode, mobileNumber, degree);
  };

  return (
    <div className="bg-baseWhites">
      {/* <Navbar/> */}

      <div className=" hidden  h-[75px]  bg-orange-400 bg-opacity-25 md:block  md:flex md:items-center ps-10">

      <div className="text-zinc-800 text-2xl font-semibold "> ----- Ongoing news alerts ongoing here ----- </div>
      </div>



      <div className="md:container md:mx-auto  md:space-x-5 bg-baseWhites md:flex md:justify-center xl:py-10 xl:items-center   xl:mx-auto xl:justify-center  xl:space-x-5 ">

      {/* This code will only be shown in  tablet and dekstop view  */}

      <section className="registerLargeScreenOnly  hidden md:block">
        <div className="py-10">
          <div className="">
            {/* why sign up section */}

           

            <div className="flex flex-col justify-center space-y-5 ">


              <div className=" xl:flex xl:flex-row xl:items-center  xl:justify-center  xl:space-x-5 ">

                <div className="xl:flex xl:flex-col xl:space-y-4">
               {/* card 1  starts*/}

              <div className="text-zinc-600 text-2xl font-bold md:pb-5 xl:pb-5">
                Why Sign up?
              </div>

              <div className="w-[425px] h-[258px] bg-stone-50 rounded-[10px] p-4" >
              <div className="w-[380px] text-neutral-900 text-sm font-medium tracking-widest py-1">
                Zero-cost expert counsel wth a wide industry experience to help
                you select the right fit
              </div>

              <div>
                <img
                  src="./images/registerpage/advertisemnt.png"
                  alt="advertisement"
                />
              </div>
              </div>


         {/* card 1  ends*/}


         

          {/* sponsored advertisement section */}

           {/* card 2  starts*/}

          <div className="w-[425px] h-[218px] bg-stone-50 rounded-[10px] p-5" >

           <div className="w-[344px] text-neutral-900 text-m font-medium tracking-widest">
            Get sponsored up to 100% to pursue your dream career
            </div>

             <div className="py-1">
               <img className="w-[344px] h-[107px]" src="./images/registerpage/scholoarshipAd.png" />
             </div>

           </div>

          
           
         {/* card 2  ends*/}
         </div>

           {/* this section will be vertical only in medium devices and horizontal in large devices */}


   <div className="xl:flex xl:flex-col-reverse  xl:text-center ">
          {/* card 3 starts */}


          <div className="w-[425px] h-[218px] bg-stone-50 rounded-[10px] p-5 xl:pb-2 xl:mt-6 " >

          <div className="text-center py-3 text-neutral-900 text-xl font-medium tracking-widest ">
            Authentic degrees online
            </div>

             <div className="py-1">
              <div className="flex items-center justify-center my-3 space-x-3">
                <div>
                <img className="" src="./images/registerpage/amityyyadd.png" />
                </div>
                <div>
                <img className="" src="./images/registerpage/amityyyadd.png" />
                </div>
                <div>
                <img className="" src="./images/registerpage/amityyyadd.png" />
                </div>

              </div>
               
             </div>

           </div>

           
         {/* card 3  ends*/}

         
         {/* card 4 starts */}


         <div className="w-[425px] h-[218px] bg-stone-50 rounded-[10px] p-5  xl:h-[250px] xl:mt-20" >

         <div className="text-neutral-900 text-xl font-medium tracking-widest">Only approved universities</div>

   <div className="py-5 md:block xl:hidden">
    <div className="flex items-center justify-between my-3">
       
      <div>
      <img className="" src="./images/registerpage/aicte.png" />
      </div>

      <div>
      <img className="" src="./images/registerpage/image 13.png" />
      </div>

      <div>
      <img className="" src="./images/registerpage/image 15.png" />
      </div>

      <div>
      <img className="" src="./images/registerpage/image16.png" />
      </div>

    </div>
     
   </div>



   <div className="py-5 hidden xl:block">
    <div className="flex justify-center space-x-10    my-3">
       
       <div className="flex flex-col space-y-5">

      <div>
      <img className="w-[75px] h-[72.79px]" src="./images/registerpage/aicte.png" />
      </div>

      <div>
      <img className="w-[75px] h-[72.79px]" src="./images/registerpage/image 13.png" />
      </div>

      </div>

      <div className="flex flex-col space-y-5">

      <div>
      <img className="w-[75px] h-[72.79px]" src="./images/registerpage/image 15.png" />
      </div>

      <div>
      <img className="w-[75px] h-[72.79px]" src="./images/registerpage/image16.png" />
      </div>

      </div>

    </div>
     
   </div>





 </div>



        {/* card 4  ends*/}
        </div>


            </div>


            </div>



<div className=" hidden  md:block p-4"><span className="text-zinc-600 text-xl font-medium leading-loose">Not a member yet? </span><span className="text-orange-400 text-xl font-medium leading-loose">Join us</span><span className="text-zinc-600 text-xl font-medium leading-loose"> it's free.</span></div>
          </div>


        </div>
      </section>

      {/* This is the register form code  */}

      <section
        id="signuppage"
        className=" bg-stone-50 rounded-[10px] p-4 container mx-auto flex flex-col items-center h-[900px]  py-10  md md:mt-20 md:h-[600px] md:px-5  xl:px-6   "
      >
        <div className="flex flex-col">
          <div className="text-zinc-800 text-xl font-semibold">
            Register to dive in
          </div>

          <div className="flex items-center justify-start">
            <div className="text-zinc-600 text-base font-medium leading-loose me-2">
              Already a user?
            </div>

            <div className="text-orange-400 text-base font-medium leading-loose">
              Log in
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="w-[270px] h-[251px] flex-col justify-start items-start  inline-flex   space-y-5 mb-32 ">
            {/* username field starts */}

            <div className="w-[270px] h-[45px] relative">
              <div className="w-[270px] h-[37px] left-0 top-[8px] absolute">
                <input
                  className="w-[270px] h-[37px] left-0 top-0 absolute bg-stone-50 rounded-[5px] border border-orange-400"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="w-11 h-[15px] left-[13px] top-0 absolute mb-2">
                <div className="w-11 h-[0px] left-0 top-[9px] absolute border border-white"></div>
                <div className="left-[2px]  absolute text-orange-400 text-xs font-normal ">
                  Name
                </div>
              </div>
            </div>

            {/* username field ends */}

            {/* Date of birth field starts */}

            <div className="">
              <input
                type="text"
                onChange={(e) => setDob(e.target.value)}
                name=""
                id=""
                placeholder="Date of birth"
                className='placeholder:text-zinc-600 placeholder:text-sm placeholder:font-normal  className="w-[270px] px-[26px] py-2 rounded-[5px] border border-neutral-300 mt-12 '
              />
            </div>

            {/* Date of birth field ends */}

            {/* email starts */}

            <div>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                placeholder="email"
                className='placeholder:text-zinc-600 placeholder:text-sm placeholder:font-normal className="w-[270px] px-[26px] py-2 rounded-[5px] border border-neutral-300 '
              />
            </div>

            {/* email ends */}

            {/* country selecting , mobile selecting field starts */}

            <div className="w-[270px] justify-start items-center gap-1 inline-flex">
              {/* country flag and dropdown showing field starts */}

              <div className="w-[102.03px] h-[35px] justify-start items-center flex">
                <div className="w-8 self-stretch relative">
                  {/* country flag  showing field starts */}

                  <div className="w-8 h-[35px] left-0 top-0 absolute rounded-tl-[5px] rounded-bl-[5px] border border-neutral-300" />
                  {selectedCountryFlag && (
                    <img
                      src={selectedCountryFlag}
                      alt="Selected Country Flag"
                      className="w-[15px] h-[13.12px] left-[9px] top-[10.50px] absolute"
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

              <div className="grow shrink basis-0 h-[35px] relative">
                <div className="w-[163.97px] h-[35px] left-0 top-0 absolute rounded-[5px] border border-neutral-300" />
                <input
                  type="text"
                  className="w-[133.23px] left-[15.37px] top-[9px] absolute text-zinc-600 text-sm font-normal border-none bg-transparent focus:outline-none placeholder:text-xs"
                  placeholder="Enter mobile number"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>

            {/* input field for entering mobile number ends */}

            {/* country selecting , mobile selecting field ends */}

            {/* preffered degree selecting field starts */}

            <div>
              <input
                type="text"
                onChange={(e) => setDegree(e.target.value)}
                className="w-[270px] px-[15px] py-2.5 rounded-[5px] border border-neutral-300 text-zinc-600 text-sm font-normal"
                placeholder="Enter your preferred degree"
              />
            </div>

            {/* preffered degree selecting field ends */}

            {/* your data is secure with us field starts */}

            <div className="flex justify-center mx-auto">
              <div className="w-6 h-6 rounded-full bg-baseOrange">
                <img
                  src="./images/registerpage/shield-lock.svg"
                  alt="shieldLock"
                />
              </div>

              <div className="w-[155px] text-zinc-800 text-xs font-normal">
                Your data is secure with us
              </div>
            </div>

            {/* your data is secure with us field ends */}

            {/* send otp button starts */}

            <div className="w-[140px] h-[47px] px-8 py-3.5 bg-orange-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex mx-auto">
              <button
                type="submit"
                className="text-white text-base font-medium"
              >
                Send OTP
              </button>
            </div>

            {/* send otp button ends */}

            {/*privacy texts starts */}

            <div className=" w-[300px] bg-baseWhites text-start text-xs">
              <span className="text-zinc-800 text-xs font-normal">
                By proceeding you expressly agree to Platform X’s{" "}
              </span>
              <span className="text-orange-400 text-xs font-normal">
                Terms & Conditions
              </span>
              <span className="text-zinc-800 text-xs font-normal"> and </span>
              <span className="text-orange-400 text-xs font-normal">
                Privacy Policy
              </span>
            </div>

            {/*privacy texts ends */}
         
           {/* This section will be visible only in mobile devices */}
    
            {/* Advertisement section starts */}

            <div className="flex flex-col items-center space-y-5 pt-10 md:hidden">
              <div className="w-[290px] text-neutral-900 text-xs font-medium tracking-wider text-center">
                Zero-cost expert counsel with wide industry experience to help
                you select the right fit
              </div>

              <div>
                <img
                  src="./images/registerpage/advertisemnt.png"
                  alt="advertisement"
                />
              </div>
            </div>



          </div>
        </form>
      </section>


      </div>
    </div>
  );
};

export default SignupPage;
