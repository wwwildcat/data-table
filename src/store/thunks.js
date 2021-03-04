import { getData, getDataError } from './actions';

export const fetchData = (size) => {
	return async function (dispatch) {
		try {
			const response = await fetch(`https://www.filltext.com/?rows=${size}&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);
			const json = await response.json();
			dispatch(getData(json));
		} catch(err) {
			dispatch(getDataError(err));
		}
	};
}