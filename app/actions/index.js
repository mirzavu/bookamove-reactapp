import { login } from '../api';
import { NavigationActions } from 'react-navigation'

export const getData = () => {
	return {
		type: 'FETCHING_DATA'
	}
}

export const getDataSuccess = data => {
	return {
		type: 'FETCHING_DATA_SUCCESS',
		data
	}
}

export const getDataError = error => {
	return {
		type: 'FETCHING_DATA_ERROR',
		error
	}
}

export const getDataFailure = () => {
	return {
		type: 'FETCHING_DATA_FAILURE'
	}
}

export const fetchData = (data) => {
	return (dispatch) => {
		dispatch(getData());
		login(data)
			.then((response) => {
				console.log(response);
				if (response.status =='ok') {
					dispatch(NavigationActions.navigate({ routeName: 'MyMoves' }));
				}
				else {
					dispatch(getDataError(response.error))
				}
			})
			.catch((err) => {
				console.log(err)
				dispatch(getDataFailure())
			})
	}
}
