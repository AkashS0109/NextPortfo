import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bentogrid'
import { gridItems } from '@/data'


function Grid() {
  return (
    <section id="about">
      <BentoGrid className='w-full py-20'>{
          gridItems.map(({id,title,description,className,
            img,imgClassName,titleClassName
          })=>(
            
            <BentoGridItem
            id={id}
             key={id}
             title={title}
             description={description}
             className={className}
             img={img}
             imgClassName={imgClassName}
             titleClassName={titleClassName}
            
            />
      

          ))
        
        }
       
       
      </BentoGrid>
    </section>
  )
}

export default Grid
