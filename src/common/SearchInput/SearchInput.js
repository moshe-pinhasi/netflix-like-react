import {InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import './SearchInput.scss'

function SearchInput(){
  return (
    <div className="search-input">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: 'input-root',
          input: 'input-input',
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

export default SearchInput;