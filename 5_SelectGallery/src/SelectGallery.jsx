import React, { useState } from 'react'
import Data from './Data'

const SelectGallery = () => {
    const [active, setActive] = useState(0);

    const handleClick = (index) => {
        setActive(index)
    }

  return (
    <main className='main'>
        <div className='grid'>
            {/* active image */}
            <div className='red'>
                <img src={Data[active].img} alt="" className='activeImg' />
            </div>
            {/* thumbnails */}
            <div className='blue'>
                {
                    Data.map((item, index) => {
                        return (
                            <div 
                            onClick={() => handleClick(index)}
                            key={index}>
                                <div className='centered'>
                                    <img src={item.img} alt="image" className='image'/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </main>
  )
}

export default SelectGallery