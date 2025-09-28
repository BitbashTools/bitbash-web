import React, { useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className=" border-black border-t-2">
      {items.map((item, index) => (
        <div key={item.title} className="w-100% border-b-2 border-black">
          <button
            className="flex justify-between align-middle w-[100%] pt-8 pb-5 text-2xl"
            onClick={() => handleClick(index)}
          >
            {item.title}
            <img src="https://raw.githubusercontent.com/JUPITER512/BitbashAssets/main/Plus.svg" alt="" />
          </button>
          {index === activeIndex && (
            <p className="pb-4 text-sm">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default React.memo(Accordion);
