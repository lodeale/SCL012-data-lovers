export const showChampion = (contentLol) => {
  const champions = contentLol.data;
  Object.keys(champions).forEach( (item) => {
    console.log(item); // key
    console.log(champions[item]); // value
  });

}