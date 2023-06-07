
const Button = (props) => {

  const handleClick = () => {
    const element = props.ref.current;
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <button className="button">
        {props.text}
    </button>
  );
}

export default Button;