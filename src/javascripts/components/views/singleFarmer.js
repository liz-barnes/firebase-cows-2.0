import mergedData from '../../helpers/data/mergedData';
import cowsView from './cowsView';

const singleFarmerView = (farmerUid) => {
  console.warn(farmerUid);
  mergedData.getSingleFarmerView(farmerUid)
    .then((response) => {
      const { farmer, cows } = response;

      $('#app').append(`<div id="single-view">
                          <h1>${farmer.name}'s Cows!</h1>
                        </div>`);
      if (cowsView.length) {
        cows.forWach((cow) => {
          $('#single-view').append(`<h3>${cow.name}</h3>`);
        });
      } else {
        $('#single-view').append('<h1>NO COWS!</h1>');
      }
      console.warn(response.farmer, response.cows);
    });
};

export default { singleFarmerView };
