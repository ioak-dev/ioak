import React, { ReactNode, useState, useEffect } from 'react';
import './styles/oak-card-wide.scss';

const rootAssetsPath = 'images';

interface Props {
  image: any;
  children?: ReactNode;
  reverse?: boolean;
}
function OakCardWide(props: Props) {
  return (
    <div className={props.reverse ? 'oak-wide-card reverse' : 'oak-wide-card'}>
      <div className="content">{props.children}</div>
      <div className="preview">
        <img
          className="photo"
          src={`${rootAssetsPath}/${props.image}`}
          alt="tile"
        />
      </div>
    </div>
  );
}

export default OakCardWide;
