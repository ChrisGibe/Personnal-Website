import React from 'react';
import style from './crea.module.less';

const CreaCards = (props) => {
  const {
    name, technology, color, url, img,
  } = props;
  return (
    <a href={url}>
      <div className={style.tagCard}>
        <div
          className={style.tagImg}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <div className={style.pd20px}>
          <div className="textCenter">
            <h4 style={{ color: `${color}` }}>
              #
              {name}
            </h4>
          </div>
          <p className="textCenter">
            {technology}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CreaCards;
