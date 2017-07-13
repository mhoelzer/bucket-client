// action constant names
// selectBand is an action creator. it returns an action that has to be object with a type property
const SELECT_BAND = 'SELECT_BAND';

export function selectBand(band){
	console.log("You have selected:", band.name)
	return{
		type: 'SELECT_BAND',
		payload: band
	}
}
