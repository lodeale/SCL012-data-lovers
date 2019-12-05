/* Manejo de data */

// esta es una función de ejemplo

export const example = () => {
  return 'example';
};


export const showChampion = (contentLol) => {
  const champions = contentLol.data;
  Object.keys(champions).forEach( (item) => {
    console.log(item); // key
    console.log(champions[item]); // value
  });

}