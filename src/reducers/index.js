import { combineReducers } from 'redux';
import reducer from './reducer';
import request from './request';
import form from './form';

export default combineReducers({
  player: reducer('player'),
  playerWinLoss: reducer('playerWinLoss'),
  playerMatches: reducer('playerMatches'),
  playerHeroes: reducer('playerHeroes'),
  playerPros: reducer('playerPros'),
  playerRankings: reducer('playerRankings'),
  playerHistograms: reducer('playerHistograms'),
  playerPeers: reducer('playerPeers'),
  playerCounts: reducer('playerCounts'),
  playerRecords: reducer('playerRecords'),
  playerMmr: reducer('playerMmr'),
  playerItems: reducer('playerItems'),
  playerWardmap: reducer('playerWardmap'),
  playerWordcloud: reducer('playerWordcloud'),
  playerTrends: reducer('playerTrends'),
  playerRecentMatches: reducer('playerRecentMatches'),
  playerTotals: reducer('playerTotals'),
  metadata: reducer('metadata'),
  match: reducer('match'),
  heroRanking: reducer('heroRanking'),
  heroBenchmark: reducer('heroBenchmark'),
  heroRecentGames: reducer('heroRecentGames'),
  heroMatchups: reducer('heroMatchups'),
  heroDurations: reducer('heroDurations'),
  heroPlayers: reducer('heroPlayers'),
  search: reducer('search'),
  distributions: reducer('distributions'),
  proPlayers: reducer('proPlayers'),
  proMatches: reducer('proMatches'),
  publicMatches: reducer('publicMatches'),
  heroStats: reducer('heroStats'),
  leagues: reducer('leagues'),
  teams: reducer('teams'),
  team: reducer('team'),
  teamHeroes: reducer('teamHeroes'),
  teamMatches: reducer('teamMatches'),
  teamPlayers: reducer('teamPlayers'),
  records: reducer('records'),
  ghPulls: reducer('ghPulls'),
  strings: (state = {}, action) => ((action && action.type === 'strings') ? action.payload : state),
  abilities: (state = {}, action) => ((action && action.type === 'abilities') ? action.payload : state),
  neutralAbilities: (state = {}, action) => ((action && action.type === 'neutralAbilities') ? action.payload : state),
  abilityIds: (state = {}, action) => ((action && action.type === 'abilityIds') ? action.payload : state),
  form,
  request,
<<<<<<< HEAD
  live: reducer('live'),
=======
  scenariosItemTimings: reducer('scenariosItemTimings'),
  scenariosLaneRoles: reducer('scenariosLaneRoles'),
  scenariosMisc: reducer('scenariosMisc'),
>>>>>>> 116a2c1cf23063f386578e2c204046a6a0f6d2a9
});
