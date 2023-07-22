const GAME_TYPES = {
  bullet: 'Bullet',
  blitz: 'Blitz',
  rapid: 'Rapid',
  classical: 'Classical',
  custom: 'Custom',
}

export default gameOptions = [
  {
    id: 0,
    type: GAME_TYPES.bullet,
    text: '1 + 0'
  },
  {
    id: 1,
    type: GAME_TYPES.bullet,
    text: '2 + 1'
  },
  {
    id: 2,
    type: GAME_TYPES.blitz,
    text: '3 + 0'
  },
  {
    id: 3,
    type: GAME_TYPES.blitz,
    text: '3 + 2'
  },
  {
    id: 4,
    type: GAME_TYPES.blitz,
    text: '5 + 0'
  },
  {
    id: 5,
    type: GAME_TYPES.blitz,
    text: '5 + 3'
  },
  {
    id: 6,
    type: GAME_TYPES.rapid,
    text: '10 + 0'
  },
  {
    id: 7,
    type: GAME_TYPES.rapid,
    text: '10 + 5'
  },
  {
    id: 8,
    type: GAME_TYPES.rapid,
    text: '15 + 10'
  },
  {
    id: 9,
    type: GAME_TYPES.classical,
    text: '30 + 0'
  },
  {
    id: 10,
    type: GAME_TYPES.classical,
    text: '30 + 20'
  },
  {
    id: 11,
    type: GAME_TYPES.custom,
    text: 'Custom'
  },
]
