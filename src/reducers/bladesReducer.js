export default (state = [], action) => {
	switch (action.type) {
		case 'BLADES_FETCH_SUCCESS':
			return action.blades;
		// case 'ADD_MEDICATION_SUCCESS':
		// 	return state.concat(action.medication)
		// case 'DELETE_MEDICATION_SUCCESS':
		// 	return state.filter(medication => medication.id !== +action.medicationId);
		default:
			return state;
	}
};