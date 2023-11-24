import React from "react";
import { useSpring, animated } from "@react-spring/web";

function Number({ n, title, checkmark }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 30, friction: 20 },
  });

  return (

     <div class="flex justify-center py-0 z-20">
       <div class="flex flex-col items-center justify-center ml-4">
      
        <div class="flex text-base md:text-3xl items-center space-x-1 justify-center dark:text-gray-100 z-10">
          <animated.div class="text-5xl md:text-5xl font-bold">{number.to((n) => n.toFixed(0))}</animated.div>
          <p class="text-lg">+</p>
        </div>
        <p className="text-xl text-white font-bold">{title}</p>
         </div>
    </div>
  );
}

export default Number;
