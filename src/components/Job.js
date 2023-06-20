const Job = (props) => {
  return (
    <li className='sub-list'>
    <i className='job-title'>{props.time} - {props.title}</i>
    <b className='job'> - {props.company}</b>
    <ul className='sub-sub-list'>
      {props.experience.map(exp => (
        <li className='list-item'>{exp}</li>
      ))}
    </ul>
  </li>
  );
}

export default Job;