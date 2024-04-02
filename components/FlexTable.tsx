interface IFlexTableProps {
  heads: string[] | React.ReactNode[]
}

const FlexTable = ({ heads }: IFlexTableProps) => {
  return (
    <div className='bg-gray-950'>
      <div className='mx-auto hidden w-full justify-between p-4 font-mono text-2xl uppercase text-gray-100 md:flex md:px-8 lg:text-4xl 2xl:w-4/5 2xl:text-lg'>
        {heads.map((el, i) => (
          <div key={`tablehead-${i}`} className={`basis-1/${heads.length}`}>
            {el}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlexTable
