import { SocialMediaLink, SocialMediaList } from "./SocialMedia.styled";
import { ReactComponent as FacebookIcon } from '../../icons/socialMedia/facebook.svg';
import { ReactComponent as YoutubeIcon } from '../../icons/socialMedia/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../icons/socialMedia/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../icons/socialMedia/instagram.svg';

const SocialMedia = ({newClass = 'social-media__list'}) => {
  return (
    <SocialMediaList className={newClass}>
      <li>
        <SocialMediaLink to="/">
          <FacebookIcon />
        </SocialMediaLink>
      </li>
      <li>
        <SocialMediaLink to="/">
          <YoutubeIcon />
        </SocialMediaLink>
      </li>
      <li>
        <SocialMediaLink to="/">
          <TwitterIcon />
        </SocialMediaLink>
      </li>
      <li>
        <SocialMediaLink to="/">
          <InstagramIcon />
        </SocialMediaLink>
      </li>
    </SocialMediaList>
  );
};

export default SocialMedia;