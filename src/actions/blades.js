//const sqlite3 = require('sqlite3');

// const db = new sqlite3.Database('dev.sqlite3', (err) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         db.run('CREATE TABLE IF NOT EXISTS Blades (id INTEGER PRIMARY KEY, stensNumber TEXT, quantity INTEGER, manufacturerNumber TEXT)')
//     }
//     console.log('Connected to the development database');
// });

export const bladesFetchSuccess = blades => {
	return {
		type: 'BLADES_FETCH_SUCCESS',
		blades
	}
}

export const fetchBlades = () => {
	return dispatch => {
		// return db.serialize(() => {
        //     db.each("SELECT * FROM Blades", (err, row) => {
        //         if (err) {
        //             console.log(err.message);
        //         }
        //     })
        // }).then(response => response.json())
        // .then(blades => {
        //     dispatch(bladesFetchSuccess(blades));
        // })		
		// .catch(error => console.log(error));
	};
};