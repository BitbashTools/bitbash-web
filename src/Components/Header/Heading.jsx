import React from "react";
function BannerTitle() {
  return (
    <div className="mt-0 mb-5 animate__animated animate__fadeInUp">
      <h1 className=" text-[#241f21] mt-2.5 font-bold text-[3rem] leading-[1.2em] text-34px mr-7 lg:text-[4.2rem] md:text-[3.3rem] ">
        Transforming Ideas Into Software.
      </h1>
    </div>
  );
}

export default React.memo(BannerTitle);
