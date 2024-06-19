

const Footerbottom = () => {
  const today = new Date();
  return (
    <div className="w-full py-10">
    <p className="text-center text-gray-500 text-base">
      © {today.getFullYear()} All rights reserved by Jay Pandey
    </p>
  </div>
  )
}

export default Footerbottom