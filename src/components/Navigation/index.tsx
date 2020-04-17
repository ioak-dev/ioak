import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withCookies } from 'react-cookie';
import { getProfile, setProfile } from '../../actions/ProfileActions';

import './style.scss';
import Desktop from './Desktop';
import Mobile from './Mobile';

import { Authorization, Profile } from '../Types/GeneralTypes';
import { receiveMessage } from '../../events/MessageService';

interface Props {
  sendEvent: Function;
  getAuth: Function;
  addAuth: Function;
  removeAuth: Function;
  authorization: Authorization;
  getProfile: Function;
  setProfile: Function;
  profile: Profile;
  transparent: boolean;
  toggleSettings: any;
  history: any;
  cookies: any;
  location: any;
  match: any;
}

const Navigation = (props: Props) => {
  const [data, setData] = useState({
    visible: false,
    mobilemenu: 'hide',
    chooseTheme: false,
    showSettings: false,
    transparentNavBar: false,
    firstLoad: true,
  });

  useEffect(() => {
    props.getProfile();
  }, []);

  useEffect(() => {
    receiveMessage().subscribe(message => {
      if (message.name === 'navbar-transparency') {
        setData({ ...data, transparentNavBar: message.signal });
      }
      if (message.name === 'loggedin') {
        // props.reloadProfile(nextProps.authorization);
        setData({ ...data, firstLoad: false });
      }
    });
  }, []);

  useEffect(() => {
    if (data.firstLoad && props.authorization && props.authorization.isAuth) {
      setData({ ...data, firstLoad: false });
    }
  }, [props.authorization.isAuth]);

  const toggleDarkMode = () => {
    if (props.profile.theme === 'theme_dark') {
      props.setProfile({
        ...props.profile,
        theme: 'theme_light',
      });
    } else {
      props.setProfile({
        ...props.profile,
        theme: 'theme_dark',
      });
    }
  };

  const toggleSettings = () => {
    setData({ ...data, showSettings: !data.showSettings });
  };

  return (
    <div className="nav">
      <Desktop
        {...props}
        toggleSettings={toggleSettings}
        transparent={data.transparentNavBar}
        toggleDarkMode={toggleDarkMode}
      />
      <Mobile
        {...props}
        toggleSettings={toggleSettings}
        transparent={data.transparentNavBar}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfile, setProfile })(
  withCookies(withRouter(Navigation))
);
