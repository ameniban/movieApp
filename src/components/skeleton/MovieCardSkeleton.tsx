import React from 'react'

function MovieCardSkeleton() {
  return (
    <div className="col" >
<div className={`my-3 border-1 border-zinc-800 rounded-lg overflow-hidden duration-200`}>
              <div className="relative overflow-hidden ">
<div className="aspect-[3/4] w-full placeholder"></div>
<div className="absolute -bottom-0 h-28 w-full _crouselGradient"></div>

              </div>
              <div className="bg-[#222] p-2">
                <h1 className ='md:text-[17px] text-sm w-[70%] placeholder'> </h1>
                <div className="md:text-[15px] text-[13px] mt-2">
                  <h1 className="w-[90%] placeholder"></h1>
                  <h1 className='w-[80%] placeholder'></h1>
                  <h1 className='w-[40%] placeholder'></h1>
                </div>
              </div>
            </div>

    </div>
  )
}

export default MovieCardSkeleton