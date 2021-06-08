import searchbarStyle from './SearchBarStyle';

function SearchBar() {
  const classes = searchbarStyle();
  return (
    <div className={classes.root}>
      <div className={classes.blockSearch}>
        <div className={classes.pinCodeBlock}>
          <button type="button" className={classes.getLocation}>
            L
          </button>
          <span className={classes.dToSpan}>
            {' '}
            Delivering to
            <br />
            <input
              type="text"
              maxLength="6"
              value="110001"
              className={classes.pinTextField}
            />
          </span>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type="button" className={classes.edit} title="deliever-to" />
        </div>
        <div className={classes.autoSearch}>
          <form className={classes.searchForm}>
            <div className={classes.searchSection}>
              <div className={classes.autoComp}>
                <input
                  className={classes.searchInputText}
                  type="text"
                  placeholder="search for medicine & wellness products..."
                />
                <pre className={classes.pre} />
              </div>
            </div>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="submit" className={classes.iconSearch} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
