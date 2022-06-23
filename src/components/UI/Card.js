import './Card.css';

const Card = props => {
  //classe card + qualquer outra que vier a seguir do componente
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
