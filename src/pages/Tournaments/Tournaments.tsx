import React, { useRef } from 'react';
import styles from './Tournaments.module.scss';
import tournamentData, { Round } from '../../data/tournamentData';
import TournamentRound from '../../components/TournamentRound/TournamentRound';

const Tournaments = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let startX = 0;
  let startY = 0;

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (scrollRef.current) {
      startX = scrollRef.current.scrollLeft + event.pageX;
      startY = scrollRef.current.scrollTop + event.pageY;
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
  };

  const onMouseMove = (event: MouseEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = startX - event.pageX;
      scrollRef.current.scrollTop = startY - event.pageY;
      event.preventDefault();
    }
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };
  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      className={styles.tournament}
    >
      <div className={styles.rounds}>
        {tournamentData.rounds.map((round: Round, roundIndex: number) => (
          <TournamentRound roundIndex={roundIndex} round={round} />
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
