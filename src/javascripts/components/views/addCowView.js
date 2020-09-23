import cowForm from '../forms/cowForm';

const addCowView = () => {
  $('#app').html('<div id="cow-form">Put form here dawg</div>');
  cowForm.cowForm();
};

export default { addCowView };
