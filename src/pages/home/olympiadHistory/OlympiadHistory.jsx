import React from 'react'
import { useInView } from 'react-intersection-observer';

const OlympiadHistory = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });

  return (
    <div className='flex flex-col items-center justify-center bg-olymp-bg bg-cover bg-center h-[500px] text-white'>
        <div ref={ref} className={`flex flex-col items-center 
        transition-opacity duration-700 ease-in-out 
        transform ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
            <h2 className='font-unbounded font-medium text-5xl'>Олимпиадная История</h2>
            <p className='mt-2 font-sf font-bold text-base'>Lorem ipsum dolor sit amet consectetur. Convallis in eros enim proin lacus <br/> euismod. Cursus rhoncus turpis id aliquet massa at lobortis posuere enim.</p>
            <button className="mt-10 font-sf w-[200px] md:w-[234px] font-medium md:text-xl text-white px-[15px] py-[8px] border-white border-2 rounded-[24px]">Все статьи</button>
        </div>
    </div>
  )
}

export default OlympiadHistory
