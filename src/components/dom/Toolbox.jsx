import React from 'react'
import Pill from './Pill'

const SimpleTable = ({ title, rows }) => {
  return (
    <div className='mb-4 flex w-full flex-col border-t border-gray-600 lg:flex-row'>
      <div className='mb-8 mt-2 basis-1/4 font-mono text-5xl font-light lg:mb-0 lg:text-2xl lg:font-medium'>
        <span>{title}</span>
      </div>
      <div className='basis-3/4'>
        {rows.map((el, index) => (
          <div
            key={el.subtitle}
            className={`flex flex-col lg:flex-row ${index < rows.length - 1 && 'border-b border-gray-600'} py-2`}
          >
            <div className='mb-4 basis-1/3 font-mono text-2xl font-medium lg:mb-0'>{el.subtitle}</div>
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
        title={'WEB DEV'}
        rows={[
          { subtitle: 'CREATIVE CODING', items: ['THREE.JS  ❤️', 'R3F', 'GLSL', 'P5.JS'] },
          { subtitle: 'FRAMEWORKS', items: ['REACT.JS', 'NEXT.JS', 'VUE.JS', 'NUXT.JS'] },
          { subtitle: 'STYLING', items: ['SASS', 'STYLED-COMPONENTS', 'TAILWIND CSS', 'CSS MODULES'] },
          {
            subtitle: 'OTHERS',
            items: ['TYPESCRIPT', 'JEST', 'CYPRESS', 'GRAPHQL', 'REDUX', 'ZUSTAND', 'EXPRESS.JS', 'SOCKETS.IO'],
          },
        ]}
      />
      <SimpleTable
        title={'DESIGN'}
        rows={[
          { subtitle: '3D', items: ['BLENDER', 'RHINO'] },
          { subtitle: 'UX/UI', items: ['FIGMA', 'ADOBE XD'] },
          { subtitle: 'PRINT', items: ['ADOBE INDESIGN'] },
        ]}
      />
      <SimpleTable
        title={'DATA'}
        rows={[
          { subtitle: 'DATA MANAGEMENT', items: ['NODE.JS'] },
          { subtitle: 'DATA ANALYSIS *', items: ['NUMPY', 'SPSS'] },
        ]}
      />
      <div className='my-20 flex w-56 justify-end border-t border-gray-600 pt-4 text-gray-400 '>
        *No professional experience
      </div>
    </div>
  )
}

export default Toolbox
