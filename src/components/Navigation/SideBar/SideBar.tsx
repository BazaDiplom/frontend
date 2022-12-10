import { NavLink } from 'react-router-dom';
import Play from '../../../assets/icons/Sidebar/Play';
import News from '../../../assets/icons/Sidebar/News';
import Tournaments from '../../../assets/icons/Sidebar/Cup';
import Anticheat from '../../../assets/icons/Sidebar/Anticheat';
import styles from './SideBar.module.scss';

const SideBar = () => {
  const activeClass = (isActive: boolean) => {
    return isActive ? styles.active : styles.disable;
  };

  return (
    <div className={styles.Container}>
      <NavLink className={({ isActive }) => activeClass(isActive)} to="." end>
        <Play />
      </NavLink>
      <NavLink className={({ isActive }) => activeClass(isActive)} to="news">
        <News />
      </NavLink>
      <NavLink
        className={({ isActive }) => activeClass(isActive)}
        to="tournaments"
      >
        <Tournaments />
      </NavLink>
      <NavLink
        className={({ isActive }) => activeClass(isActive)}
        to="anticheat"
      >
        <Anticheat />
      </NavLink>
    </div>
  );
};

export default SideBar;
