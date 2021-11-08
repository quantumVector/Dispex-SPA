import React from 'react';
import { useDispatch } from 'react-redux';
import { getStreets } from '../redux/actions/addresses';

const Streets = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getStreets());
  }, []);

  return (
    <div>
      Streets
    </div>
  )
}

export default Streets
