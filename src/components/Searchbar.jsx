import css from './styles.module.css';

export const Searchbar = () => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm}>
        <button type="submit" className={css.SearchFormbutton}>
          <span className={css.SearchFormbuttonlabel}>Search</span>
        </button>

        <input
          className={css.SearchForminput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
