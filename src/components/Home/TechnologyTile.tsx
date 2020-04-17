import React, { useEffect } from 'react';
import './style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  data: {
    logo: string;
    title: string;
    description: string;
  };
}
const rootAssetsPath = 'images';

const TechnologyTile = (props: Props) => {
  return (
    <div className="technology">
      {/* <div className="logo">
        <img
          className="logo"
          src={`${rootAssetsPath}/${props.data.logo}`}
          alt="logo"
        />
      </div> */}
      <div className="title">{props.data.title}</div>
      <div className="description">{props.data.description}</div>
    </div>
  );
};

export default TechnologyTile;
