export const metersToFeetAndInches = (meters: number) => {
  const totalInches = meters * 39.3701;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
};

export const hectogramsToPounds = (hectograms: number) => {
  return (hectograms * 0.220462).toFixed(1);
};

export const generationToNumber = (generation: string) => {
  const roman = generation.split("-")[1].toUpperCase();
  const romanMap: { [key: string]: number } = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
  };
  return romanMap[roman];
};
