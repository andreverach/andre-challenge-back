import * as admin from 'firebase-admin';

//configuracion para enlazar a firebase con las credenciales
const serviceAccount = require('./../../credentials/firebase-admin-key.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const dbFirebase = admin.firestore();

export default dbFirebase;