import React from 'react';
import style from './tags.module.less';

const CreaCards = (props) => {
  const {
    name, technology, color, url,
  } = props;
  return (
    <a href={url}>
      <div className={style.tagCard}>
        <div
          className={style.tagImg}
        />
        <div className={style.pd20px}>
          <div className="textCenter">
            <h4 style={{ color: `${color}` }}>
              #
              {name}
            </h4>
          </div>
          <p>
            {technology}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CreaCards;
