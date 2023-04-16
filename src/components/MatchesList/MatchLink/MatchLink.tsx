import React from 'react';
import styles from './MatchLink.module.scss';
import { Link } from 'react-router-dom';
import { BsPlayCircle } from 'react-icons/bs';
import overpassBG from '../../../assets/background/Maps/de_overpass.jpg';
import mirageBG from '../../../assets/background/Maps/de_mirage.jpg';
import dustBG from '../../../assets/background/Maps/de_dust2.jpg';
import cobleBG from '../../../assets/background/Maps/de_cbble.jpg';
import nukeBG from '../../../assets/background/Maps/de_nuke.jpg';
import infernoBG from '../../../assets/background/Maps/de_inferno.jpg';
import anchientBG from '../../../assets/background/Maps/de_ancient.jpg';
import trainBG from '../../../assets/background/Maps/de_train.jpg';
import vertigoBG from '../../../assets/background/Maps/de_vertigo.jpg';
import anubisBG from '../../../assets/background/Maps/de_anubis.jpg';

const MatchLink = ({ match }: any) => {
  const mapBGHandler = (mapName: String) => {
    switch (mapName) {
      case 'de_mirage':
        return mirageBG;
      case 'de_overpass':
        return overpassBG;
      case 'de_dust2':
        return dustBG;
      case 'de_cbble':
        return cobleBG;
      case 'de_nuke':
        return nukeBG;
      case 'de_inferno':
        return infernoBG;
      case 'de_ancient':
        return anchientBG;
      case 'de_train':
        return trainBG;
      case 'de_vertigo':
        return vertigoBG;
      case 'de_anubis':
        return anubisBG;
      default:
        break;
    }
  };
  return (
    <div>
      <Link className={styles.link} to={'' + match.id}>
        <img
          className={styles.imgMap}
          src={mapBGHandler(match.map)}
          alt={match.map}
        />
        <div className={styles.matchInfo}>
          <div className={styles.matchInfoItem}>{match.User.userName}</div>
          <div className={styles.matchInfoItem}>
            {match.countOfPlayers + '/10'}
          </div>
          <div className={styles.matchInfoItem}>
            <div>{match.map}</div>
            <div>{'#' + match.id}</div>
          </div>
          <div className={styles.matchInfoItem}>
            <BsPlayCircle />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MatchLink;
