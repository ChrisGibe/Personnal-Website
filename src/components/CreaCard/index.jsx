import React from 'react';
import { Link } from 'gatsby';
import style from './crea.module.less';

const CreaCard = (props) => {
  const {
    name, technlogy, color, url,
  } = props;
  return (
    <Link className={style.tagCard} to={}>
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
          <p>
            {technlogy}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CreaCard