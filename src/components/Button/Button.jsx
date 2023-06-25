import css from './Button.module.css';

export const Button = props => {
  return (
    <button className={css.Button} onClick={props.incrementFunc}>
      load more
    </button>
  );
};
