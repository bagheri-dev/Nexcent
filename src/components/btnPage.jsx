export default function BtnPage({children }) {
    return (
        <button className='flex items-center gap-3 bg-[#28CB8B] text-white text-xl py-4 px-16 rounded-md'>
        {children} <img src="/public/images/svgs/Down.svg" alt="" />
        </button>
    )
  }