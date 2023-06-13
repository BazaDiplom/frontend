import { useContext, useState, useEffect } from 'react';
import { Context } from '../..';
import styles from './MatchTeam.module.scss';
import Preloader from '../../assets/preloader/Preloader';
import MatchUser from '../MatchUser/MatchUser';
import { observer } from 'mobx-react-lite';
import { ITeam } from '../../models/Team/ITeam';
import Plus from '../../assets/icons/Plus/Plus.svg';
import { IMatch, IMatchErorr, MembershipDto } from '../../models/Match/IMatch';
import TeamService from '../../services/TeamService';

type MatchTeamProps = {
  team: null[] | MembershipDto[];
  addUser: (id: number) => {};
  teamID: number;
};

const MatchTeam = (props: MatchTeamProps) => {
  // const emptyCellsPush = (): JSX.Element[] => {
  //   const emptyCells = [] as JSX.Element[];
  //   for (let i = teamData.team.users.length; i < teamData.team.size; i++) {
  //     emptyCells.push(
  //       <div onClick={addUserAtTeam} className={styles.cell} key={i}>
  //         <img src={Plus} />
  //       </div>,
  //     );
  //   }
  //   return [...emptyCells];
  // };

  //   console.log('MatchTeam');
  //   console.log(props.teamID);

  return (
    <div className={styles.container}>
      {props.team.map((user, index) =>
        user === null ? (
          <div
            onClick={() => props.addUser(props.teamID)}
            className={styles.cell}
            key={index}
          >
            <img src={Plus} />
          </div>
        ) : (
          <>
            <MatchUser user={user.userId} key={index} />
          </>
        ),
      )}
    </div>
  );
};

export default MatchTeam;
