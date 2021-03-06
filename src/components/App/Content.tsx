import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './style.scss';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from '../Home';
import Landing from '../Landing';
import PrivateRoute from '../Auth/PrivateRoute';
import AuthInit from '../Auth/AuthInit';
import { getAuth, addAuth, removeAuth } from '../../actions/AuthActions';
import { getProfile, setProfile } from '../../actions/ProfileActions';

import Backdrop from './Backdrop';
import Notification from '../Notification';
import Navigation from '../Navigation';
import { httpGet } from '../Lib/RestTemplate';
import { Authorization } from '../Types/GeneralTypes';
import { receiveMessage, sendMessage } from '../../events/MessageService';
import constants from '../Constants';
import OakRoute from '../Auth/OakRoute';

const themes = {
  themecolor1: getTheme('#69A7BF'),
  themecolor2: getTheme('#99587B'),
  themecolor3: getTheme('#A66C26'),
  themecolor4: getTheme('#37AE82'),
};

function getTheme(color: string) {
  return createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
      secondary: {
        main: color,
      },
    },
  });
}

interface Props {
  getProfile: Function;
  setProfile: Function;
  getAuth: Function;
  addAuth: Function;
  removeAuth: Function;
  getUser: Function;
  addUser: Function;
  cookies: any;

  // event: PropTypes.object,
  profile: any;
  authorization: Authorization;
}

const Content = (props: Props) => {
  useEffect(() => {
    props.getProfile();
    props.getAuth();
    props.getAuth();
  }, []);

  useEffect(() => {
    const eventBus = receiveMessage().subscribe((message) => {
      if (message.name === 'session expired') {
        logout(null, 'failure', 'Session expired. Login again');
      }
    });
    return () => eventBus.unsubscribe();
  });

  useEffect(() => {
    if (
      props.authorization &&
      props.authorization.token &&
      props.profile.tenant
    ) {
      httpGet(`${constants.API_URL_USER}/${props.profile.tenant}/`, {
        headers: {
          Authorization: props.authorization.token,
        },
      }).then((response) => {
        props.addUser(response.data.data[0]);
      });
    }
  }, [props.authorization]);

  const logout = (
    event: any,
    type = 'success',
    message = 'You have been logged out'
  ) => {
    props.removeAuth();
    props.cookies.remove('ioak');
    sendMessage('notification', true, {
      type,
      message,
      duration: 3000,
    });
  };

  return (
    <div
      className={`App ${props.profile.theme} ${props.profile.textSize} ${props.profile.themeColor}`}
    >
      <HashRouter>
        <AuthInit />
        <Backdrop />
        <div className="body">
          <div className="body-content">
            <Notification />
            <MuiThemeProvider theme={themes.themecolor1}>
              <Route
                path="/home"
                render={(propsLocal) => (
                  <OakRoute
                    {...propsLocal}
                    {...props}
                    logout={() => logout}
                    component={Home}
                  />
                )}
              />
              <Route
                path="/"
                exact
                render={(propsLocal: any) => (
                  <Home {...propsLocal} {...props} logout={() => logout} />
                )}
              />
            </MuiThemeProvider>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  authorization: state.authorization,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getAuth,
  addAuth,
  removeAuth,
  getProfile,
  setProfile,
})(withCookies(Content));
