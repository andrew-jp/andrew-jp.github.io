const Li = (props) => {
  return (
    <li className='list-item'>
      {props.value}
    </li>
  )
}

const Job = (props) => {

  return (
    <li className='sub-list'>
    <i className='job-title'>{props.time} - {props.title}</i>
    <b className='job'> - {props.company}</b>
    <ul className='sub-sub-list'>
      {props.experience.map(exp => (
        <Li value={exp}/>
      ))}
    </ul>
  </li>
  );
}

export default Job;