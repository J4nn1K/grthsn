export default function DescriptionLink(props) {
  return (
      <p className='text flex flex-col'>
        <a href={props.href} target="_blank" rel="noreferrer" className="flex justify-left items-center group ">
          <p className='group-hover:text-[#9e9e9e] transition'>{props.name}</p>
          <p className='group-hover:rotate-[-45deg] text-[#9e9e9e] group-hover:text-[#262626] dark:group-hover:text-[#e6e6e6] ml-1 transition'> → </p>
        </a> 
        <br/>
        {props.desc}
      </p>
  )
}
