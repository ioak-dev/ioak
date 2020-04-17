import React, { useEffect, useState } from 'react';

import './style.scss';
import ioakWhite from '../../images/ioak_white.svg';
import ioakBlack from '../../images/ioak_black.svg';
import Links from './Links';
import { Authorization, Profile } from '../Types/GeneralTypes';
import { receiveMessage } from '../../events/MessageService';
import SearchBar from '../../oakui/SearchBar';

interface Props {
  sendEvent: Function;
  getAuth: Function;
  addAuth: Function;
  removeAuth: Function;
  authorization: Authorization;
  getProfile: Function;
  toggleDarkMode: Function;
  profile: Profile;
  transparent: boolean;
  toggleSettings: any;
}

const Desktop = (props: Props) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    props.getProfile();
  }, []);

  useEffect(() => {
    receiveMessage().subscribe(message => {
      if (message.name === 'show-navbar-element') {
        setShowSearchBar(message.signal);
      }
    });
  }, []);

  return (
    <div
      className={
        props.transparent ? 'navbar desktop transparent' : 'navbar desktop'
      }
    >
      <div className="left">
        {!props.transparent && props.profile.theme === 'theme_light' && (
          <img className="logo" src={ioakBlack} alt="IOAK logo" />
        )}
        {(props.transparent || props.profile.theme === 'theme_dark') && (
          <img className="logo" src={ioakWhite} alt="IOAK logo" />
        )}
        <Links authorization={props.authorization} profile={props.profile} />
        {showSearchBar && <SearchBar alt />}
      </div>
      <div className="right">
        <div className="dark-mode">
          <i className="material-icons" onClick={() => props.toggleDarkMode()}>
            brightness_6
          </i>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
