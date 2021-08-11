import { Pokemon, StatName } from '../types';

export const getStatValue = (character: Pokemon, statName: StatName) => character.stats.find((stat) => stat.stat_name === statName)?.base_stat || 0;

type TeamStats = {
  [key in StatName]: number;
};

export const calculateTeamStats = (teamMembers: Pokemon[]) => {
  const numberOfMembers = teamMembers.length;

  if (numberOfMembers > 0) {
    const totalStats = teamMembers.reduce<TeamStats>(
      (stats, member) => ({
        hp: getStatValue(member, 'hp') + (stats.hp || 0),
        attack: getStatValue(member, 'attack') + (stats.attack || 0),
        defense: getStatValue(member, 'defense') + (stats.defense || 0),
        speed: getStatValue(member, 'speed') + (stats.speed || 0),
        'special-attack': getStatValue(member, 'special-attack') + (stats['special-attack'] || 0),
        'special-defense': getStatValue(member, 'special-defense') + (stats['special-defense'] || 0),
      }),
      {} as TeamStats
    );

    return (Object.keys(totalStats) as StatName[]).reduce<TeamStats>(
      (stats, key) => ({
        ...stats,
        [key]: Math.ceil(totalStats[key] / numberOfMembers),
      }),
      {} as TeamStats
    );
  }
};
