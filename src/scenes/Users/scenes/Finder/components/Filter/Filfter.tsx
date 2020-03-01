import React, { useEffect, useState, FC } from 'react';
import PropTypes from 'prop-types';

import { useDebounce } from 'utils/hooks';

import { Input, Label } from './Filter.style';

interface Props {
  onChange: Function;
}

const INPUT_DEBOUNCE_TIME = 500;

const Filter: FC<Props> = ({ onChange }) => {
  const [filter, setFilter] = useState('');
  const debouncedFilter = useDebounce(filter, INPUT_DEBOUNCE_TIME);

  useEffect(() => {
    onChange(debouncedFilter);
  }, [debouncedFilter, onChange]);

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.trim());
  };

  return (
    <form>
      <Label htmlFor="filter">
        Type username: &nbsp;
        <Input
          placeholder="Seach by username..."
          name="filter"
          id="filter"
          value={filter}
          onChange={onFilterChange}
        />
      </Label>
    </form>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
