import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OakButton from '../../oakui/OakButton';
import OakCardWide from '../../oakui/OakCardWide';
import githubLogoLight from '../../images/github_white.svg';
import githubLogoDark from '../../images/github_black.svg';

interface Props {
  data: {
    lightLogo: string;
    darkLogo: string;
    tile: string;
    title: string;
    description: string;
    footnote: string;
    appUrl: string;
    codeUrl: any;
  };
}
const rootAssetsPath = 'images';

const ProjectTile = (props: Props) => {
  const profile = useSelector(state => state.profile);

  const visitSite = () => {
    window.open(props.data.appUrl);
  };

  const visitGithub = url => {
    window.open(url);
  };

  return (
    <OakCardWide image={props.data.tile}>
      <div className="project">
        <div className="title">
          <div>
            <img
              className="logo"
              src={
                profile.theme === 'theme_dark'
                  ? `${rootAssetsPath}/${props.data.lightLogo}`
                  : `${rootAssetsPath}/${props.data.darkLogo}`
              }
              alt="logo"
            />
          </div>
          <div className="subtitle">{props.data.title}</div>
          <div className="underline" />
        </div>
        <div className="description">{props.data.description}</div>
        <div
          className="footnote"
          dangerouslySetInnerHTML={{ __html: props.data.footnote }}
        />
        <div className="footer">
          {props.data.appUrl && (
            <div>
              <OakButton
                theme="primary"
                variant="animate in"
                action={visitSite}
                icon="touch_app"
              >
                Visit Site
              </OakButton>
            </div>
          )}
          <div>
            {props.data.codeUrl &&
              props.data.codeUrl.map(item => (
                <OakButton
                  theme="primary"
                  variant="animate in"
                  action={() => visitGithub(item.url)}
                >
                  <div className="button-with-logo">
                    <img
                      src={
                        profile.theme === 'theme_dark'
                          ? githubLogoLight
                          : githubLogoDark
                      }
                      alt="github logo"
                    />
                    {item.label}
                  </div>
                </OakButton>
              ))}
          </div>
        </div>
      </div>
    </OakCardWide>
  );
};

export default ProjectTile;
