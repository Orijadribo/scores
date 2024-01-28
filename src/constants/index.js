const golfData = [
  {
    id: 1,
    POS: 1,
    PLAYER: "Sarah Brown",
    "TO PAR": 0,
    THRU: 9,
    ROUND: 0, // Set ROUND and TO PAR to the same value
    GROSS: 45, // Assuming 45 strokes for demonstration purposes
  },
  {
    id: 2,
    POS: 2,
    PLAYER: "Olivia Miller",
    "TO PAR": -4,
    THRU: 17,
    ROUND: -4, // Set ROUND and TO PAR to the same value
    GROSS: 68, // Assuming 68 strokes for demonstration purposes
  },
  {
    id: 3,
    POS: 3,
    PLAYER: "Michael Davis",
    "TO PAR": -3,
    THRU: 18,
    ROUND: -3, // Set ROUND and TO PAR to the same value
    GROSS: 71, // Assuming 71 strokes for demonstration purposes
  },
  {
    id: 4,
    POS: 4,
    PLAYER: "Jessica White",
    "TO PAR": -2,
    THRU: 16,
    ROUND: -2, // Set ROUND and TO PAR to the same value
    GROSS: "-", // Not completed, so using a dash
  },
  {
    id: 5,
    POS: 5,
    PLAYER: "John Smith",
    "TO PAR": -1,
    THRU: 12,
    ROUND: -1, // Set ROUND and TO PAR to the same value
    GROSS: "-", // Not completed, so using a dash
  },
  {
    id: 6,
    POS: 6,
    PLAYER: "Emily Johnson",
    "TO PAR": 2,
    THRU: 15,
    ROUND: 2, // Set ROUND and TO PAR to the same value
    GROSS: "-", // Not completed, so using a dash
  },
  {
    id: 7,
    POS: 7,
    PLAYER: "Matthew Taylor",
    "TO PAR": 1,
    THRU: 11,
    ROUND: 1, // Set ROUND and TO PAR to the same value
    GROSS: "-", // Not completed, so using a dash
  },
  {
    id: 8,
    POS: 8,
    PLAYER: "Ava Rodriguez",
    "TO PAR": 1,
    THRU: 10,
    ROUND: 1, // Set ROUND and TO PAR to the same value
    GROSS: "-", // Not completed, so using a dash
  },
  {
    id: 9,
    POS: 9,
    PLAYER: "Daniel Lee",
    "TO PAR": 1,
    THRU: 14,
    ROUND: 1, // Set ROUND and TO PAR to the same value
    GROSS: "-", // Not completed, so using a dash
  },
  {
    id: 10,
    POS: 10,
    PLAYER: "Ethan Wilson",
    "TO PAR": 3,
    THRU: 13,
    ROUND: 3, // Set ROUND and TO PAR to the same value
    GROSS: "-", // Not completed, so using a dash
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
 const round = {
   hole1: 4,
   hole2: 5,
   hole3: 3,
   hole4: 4,
   hole5: 6,
   hole6: 4,
   hole7: 3,
   hole8: 5,
   hole9: 6,
   out: 40,
   hole10: 4,
   hole11: 5,
   hole12: 3,
   hole13: 4,
   hole14: 6,
   hole15: 4,
   hole16: 3,
   hole17: 5,
   hole18: 6,
   in: 40,
   total: 80,
 };



export {golfData, yardsData, parData, round};