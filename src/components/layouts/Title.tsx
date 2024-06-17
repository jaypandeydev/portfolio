
const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-serif mb-14">
    <h3 className="text-sm uppercase font-light  text-rose-700 -tracking-wide">
      {title}
    </h3>
    <h1 className="text-5xl text-gray-300 font-bold capitalize">
      {des}
    </h1>
    </div>
  )
}

export default Title
