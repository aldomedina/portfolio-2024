import React from 'react'
import Pill from './Pill'

const SimpleTable = ({ title, rows }) => {
  return (
    <div className='mb-4 flex w-full flex-col border-t border-gray-500 first:border-none lg:flex-row'>
      <div className='mb-8 mt-2 basis-1/4 border-b border-dashed border-gray-700 pb-8 font-mono lg:mb-0 lg:border-none lg:pb-0'>
        {title}
      </div>
      <div className='basis-3/4'>
        {rows.map((el, index) => (
          <div
            key={el.subtitle}
            className={`flex gap-4 lg:flex-row ${index < rows.length - 1 && 'border-b  border-dashed border-gray-600'} py-2`}
          >
            <div className='mb-4 basis-1/3  font-mono text-xl font-light lg:mb-0'>{el.subtitle}</div>
            <div className='flex basis-2/3 flex-wrap gap-2 py-1'>
              {el.items.map((item, i) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Toolbox = () => {
  return (
    <div className='flex w-full flex-col items-end'>
      <SimpleTable
        title={
          <div className='flex flex-col'>
            <span>[2.1]</span> <span className='text-2xl'> WEB DEV</span>
          </div>
        }
        rows={[
          { subtitle: 'CREATIVE CODING', items: ['THREE.JS', 'R3F', 'GLSL', 'P5.JS'] },
          { subtitle: 'FRAMEWORKS', items: ['REACT.JS', 'NEXT.JS', 'VUE.JS', 'NUXT.JS'] },
          { subtitle: 'STYLING', items: ['SASS', 'STYLED-COMPONENTS', 'TAILWIND CSS', 'CSS MODULES'] },
          {
            subtitle: 'OTHERS',
            items: [
              'TYPESCRIPT',
              'JEST',
              'CYPRESS',
              'GRAPHQL',
              'REDUX',
              'ZUSTAND',
              'EXPRESS.JS',
              'SOCKETS.IO',
              'NODE.JS',
            ],
          },
        ]}
      />
      <SimpleTable
        title={
          <div className='flex flex-col'>
            <span>[2.2]</span> <span className='text-2xl'> DESIGN</span>
          </div>
        }
        rows={[
          { subtitle: '3D', items: ['BLENDER', 'RHINO'] },
          { subtitle: 'UX/UI', items: ['FIGMA', 'ADOBE XD'] },
          { subtitle: 'PRINT', items: ['ADOBE INDESIGN'] },
        ]}
      />
      {/* <SimpleTable
        title={
          <div className='flex flex-col'>
            <span>[2.3]</span> <span className='text-2xl'> DATA</span>
          </div>
        }
        rows={[
          { subtitle: 'DATA MANAGEMENT', items: ['NODE.JS'] },
          { subtitle: 'DATA ANALYSIS *', items: ['NUMPY', 'SPSS'] },
        ]}
      />
      <div className='my-20 flex w-56 justify-end border-t border-gray-600 pt-4 text-gray-400 '>
        *No professional experience
      </div> */}
    </div>
  )
}

export default Toolbox
