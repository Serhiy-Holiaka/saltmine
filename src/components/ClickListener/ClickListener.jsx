import { useState, useEffect } from 'react';

const ClickListener = ({ children }) => {
  const [clickable, setClickable] = useState();
  const useDebounce = (func, milliseconds) => {
    const time = milliseconds || 400;
    let timer;

    return (event) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(func, time, event);
    };
  };

  const hide = useDebounce(() => {
    clickable.map((block) => {
      block.className = block.className.replace(' active-clickable', '');
    });
  }, 1000);

  useEffect(() => {
    const allWithClass = Array.from(
      document.getElementsByClassName('is-clickable')
    );
    setClickable(allWithClass);
  }, []);

  const isClickable = (e) => {
    const allWithClass = Array.from(
      document.getElementsByClassName('is-clickable')
    );
    setClickable(allWithClass);

    if (e.target.className.includes('is-clickable')) {
      return;
    } else {
      clickable.map((block) => {
        !block.className.includes('active-clickable') === true
          ? (block.className += ' active-clickable')
          : (block.className += '');
      });
    }
    hide();
  };
  return (<div onClick={isClickable}>{children}</div>);
};

export default ClickListener;
