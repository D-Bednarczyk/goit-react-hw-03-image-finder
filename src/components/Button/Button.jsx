import css from './Button.module.css';

export const Button = ({ incrementFunc }) => {
  return (
    <button className={css.Button} onClick={incrementFunc}>
      load more
    </button>
  );
};
