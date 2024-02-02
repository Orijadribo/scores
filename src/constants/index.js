const golfData = [
  {
    id: 1,
    PLAYER: "Emma Johnson",
    hcp: 4,
    teeOffTime: "07:00 AM",
    round: {
      hole1: 5,
      hole2: 3,
      hole3: 2,
      hole4: 3,
      hole5: 4,
      hole6: 4,
      hole7: 3,
      hole8: 4,
      hole9: 3,
      hole10: 4,
      hole11: 3,
      hole12: 3,
      hole13: 4,
      hole14: 4,
      hole15: 3,
      hole16: 3,
      hole17: 4,
      hole18: "-",
    },
  },
  {
    id: 2,
    PLAYER: "Liam Wilson",
    hcp: 4,
    teeOffTime: "07:30 AM",
    round: {
      hole1: 6,
      hole2: 4,
      hole3: 3,
      hole4: 5,
      hole5: 4,
      hole6: 4,
      hole7: 3,
      hole8: 4,
      hole9: 4,
      hole10: 4,
      hole11: 4,
      hole12: 3,
      hole13: 4,
      hole14: 4,
      hole15: 4,
      hole16: 4,
      hole17: 4,
      hole18: 3,
    },
  },
  {
    id: 3,
    PLAYER: "Olivia Brown",
    hcp: 4,
    teeOffTime: "08:00 AM",
    round: {
      hole1: 4,
      hole2: 3,
      hole3: 2,
      hole4: 3,
      hole5: 4,
      hole6: 4,
      hole7: 3,
      hole8: 4,
      hole9: 3,
      hole10: 4,
      hole11: 4,
      hole12: 3,
      hole13: 4,
      hole14: 4,
      hole15: 4,
      hole16: 3,
      hole17: 4,
      hole18: 3,
    },
  },
  {
    id: 4,
    PLAYER: "Noah Smith",
    hcp: 4,
    teeOffTime: "08:30 AM",
    round: {
      hole1: 6,
      hole2: 4,
      hole3: 2,
      hole4: 4,
      hole5: 4,
      hole6: 4,
      hole7: 3,
      hole8: 4,
      hole9: 3,
      hole10: 4,
      hole11: 4,
      hole12: 3,
      hole13: 4,
      hole14: 4,
      hole15: 4,
      hole16: 3,
      hole17: 4,
      hole18: 3,
    },
  },
  {
    id: 5,
    PLAYER: "Ava Davis",
    hcp: 4,
    teeOffTime: "09:00 AM",
    round: {
      hole1: 5,
      hole2: 4,
      hole3: 3,
      hole4: 4,
      hole5: 4,
      hole6: 4,
      hole7: 2,
      hole8: 4,
      hole9: 4,
      hole10: 4,
      hole11: 4,
      hole12: 3,
      hole13: 4,
      hole14: 3,
      hole15: 4,
      hole16: 3,
      hole17: 4,
      hole18: 4,
    },
  },
  {
    id: 6,
    PLAYER: "Sophia Taylor",
    hcp: 4,
    teeOffTime: "09:30 AM",
    round: {
      hole1: 4,
      hole2: 3,
      hole3: 3,
      hole4: 4,
      hole5: 4,
      hole6: 3,
      hole7: 2,
      hole8: 4,
      hole9: 4,
      hole10: 4,
      hole11: 4,
      hole12: 2,
      hole13: 5,
      hole14: 4,
      hole15: 3,
      hole16: 3,
      hole17: 4,
      hole18: 3,
    },
  },
  {
    id: 7,
    PLAYER: "Jackson Rodriguez",
    hcp: 4,
    teeOffTime: "10:00 AM",
    round: {
      hole1: 6,
      hole2: 4,
      hole3: 2,
      hole4: 4,
      hole5: 4,
      hole6: 4,
      hole7: 2,
      hole8: 4,
      hole9: 4,
      hole10: 4,
      hole11: 4,
      hole12: 2,
      hole13: 5,
      hole14: 3,
      hole15: 4,
      hole16: 3,
      hole17: 4,
      hole18: 3,
    },
  },
  {
    id: 8,
    PLAYER: "Lucas Lee",
    hcp: 4,
    teeOffTime: "10:30 AM",
    round: {
      hole1: 6,
      hole2: 3,
      hole3: 3,
      hole4: 3,
      hole5: 4,
      hole6: 4,
      hole7: 2,
      hole8: 4,
      hole9: 4,
      hole10: 4,
      hole11: 4,
      hole12: 3,
      hole13: 5,
      hole14: 3,
      hole15: 4,
      hole16: 3,
      hole17: 4,
      hole18: 4,
    },
  },
  {
    id: 9,
    PLAYER: "Isabella Wilson",
    hcp: 4,
    teeOffTime: "11:00 AM",
    round: {
      hole1: 5,
      hole2: 4,
      hole3: 3,
      hole4: 3,
      hole5: 4,
      hole6: 4,
      hole7: 2,
      hole8: 4,
      hole9: 4,
      hole10: 4,
      hole11: 3,
      hole12: 3,
      hole13: 4,
      hole14: 4,
      hole15: 3,
      hole16: 3,
      hole17: 4,
      hole18: 3,
    },
  },
  {
    id: 10,
    PLAYER: "Mia Smith",
    hcp: 4,
    teeOffTime: "11:30 AM",
    round: {
      hole1: 5,
      hole2: 4,
      hole3: 3,
      hole4: 3,
      hole5: 4,
      hole6: 4,
      hole7: 3,
      hole8: 4,
      hole9: 3,
      hole10: 4,
      hole11: 4,
      hole12: 3,
      hole13: 4,
      hole14: 3,
      hole15: 3,
      hole16: 3,
      hole17: 4,
      hole18: 3,
    },
  },
  {
    id: 11,
    PLAYER: "James Pott",
    hcp: 4,
    teeOffTime: "12:00 PM",
    round: {
      // hole1: 1,
      // hole2: 4,
      // hole3: 3,
      // hole4: 5,
      // hole5: 4,
      // hole6: 4,
      // hole7: 3,
      // hole8: 4,
      // hole9: 4,
      // hole10: 4,
      // hole11: 4,
      // hole12: 3,
      // hole13: 4,
      // hole14: 4,
      // hole15: 4,
      // hole16: 4,
      // hole17: 4,
      // hole18: 4,
    },
  },
  {
    id: 12,
    PLAYER: "Jamie Tott",
    hcp: 4,
    teeOffTime: "12:30 PM",
    round: {
      hole1: 7,
      // hole2: 4,
      // hole3: 3,
      // hole4: 5,
      // hole5: 4,
      // hole6: 4,
      // hole7: 3,
      // hole8: 4,
      // hole9: 4,
      // hole10: 4,
      // hole11: 4,
      // hole12: 3,
      // hole13: 4,
      // hole14: 4,
      // hole15: 4,
      // hole16: 4,
      // hole17: 4,
      // hole18: 4,
    },
  },
];

const yardsData = {
  hole1: 500,
  hole2: 400,
  hole3: 300,
  hole4: 500,
  hole5: 400,
  hole6: 400,
  hole7: 300,
  hole8: 400,
  hole9: 400,
  hole10: 400,
  hole11: 400,
  hole12: 300,
  hole13: 500,
  hole14: 400,
  hole15: 400,
  hole16: 300,
  hole17: 400,
  hole18: 400,
};

const parData = {
  hole1: 5,
  hole2: 4,
  hole3: 3,
  hole4: 5,
  hole5: 4,
  hole6: 4,
  hole7: 3,
  hole8: 4,
  hole9: 4,
  hole10: 4,
  hole11: 4,
  hole12: 3,
  hole13: 5,
  hole14: 4,
  hole15: 4,
  hole16: 3,
  hole17: 4,
  hole18: 4,
};

export { golfData, yardsData, parData };
