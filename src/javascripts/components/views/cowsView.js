import mergedData from '../../helpers/data/mergedData';
// import cowData from '../../helpers/data/cowData';
import card from '../cards/cowCard';

const cowsView = () => {
  mergedData.getDataForCowsView()
    .then((response) => {
      console.warn(response);
      if (response.length) {
        response.forEach((item) => {
          $('#app').append(card.cowMaker(item));
        });
      } else {
        $('#app').append('<h2>NO COWS</h2>');
      }
      // DO SOMETHING
    });
};

export default { cowsView };
