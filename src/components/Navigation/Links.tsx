import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './style.scss';
import { NavLink } from 'react-router-dom';
import { Authorization, Profile } from '../Types/GeneralTypes';
import OakButton from '../../oakui/OakButton';
import { sendMessage } from '../../events/MessageService';

interface Props {
  authorization: Authorization;
  profile: Profile;
}

const Links = (props: Props) => {
  const navigate = section => {
    sendMessage('navigate', true, section);
  };
  return (
    <div className="links">
      {/* <Link smooth to="/home#technologies">
        Technologies
      </Link> */}
      <NavLink to="/home#intro" className="navitem" id="link_intro">
        Home
      </NavLink>
      <NavLink
        to="/home#projects_completed"
        className="navitem"
        id="link_projects_completed"
      >
        Projects
      </NavLink>
      <NavLink
        to="/home#technologies"
        className="navitem"
        id="link_technologies"
      >
        Programming Languages
      </NavLink>
    </div>
  );
};

export default Links;
