import React, { ReactNode, useState, useEffect } from 'react';
import './styles/oak-card-flip.scss';

interface Props {
  children?: ReactNode;
}
function OakCardFlip(props: Props) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  useEffect(() => {
    initializeViews();
  }, [props.children]);

  const initializeViews = () => {
    React.Children.toArray(props.children).forEach((node: any) => {
      if (node.props.className === 'front') {
        setFront(node);
      } else if (node.props.className === 'back') {
        setBack(node);
      }
    });
  };
  return (
    <div className="oak-flip-card">
      <div className="flip-card">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
}

export default OakCardFlip;
