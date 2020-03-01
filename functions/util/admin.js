const admin = require("firebase-admin");

// Need for local
let serviceAccount = require("/Users/dk/Documents/GitHub/classed-social-firebase-server/keys/serviceAccountKey.json");
admin.initializeApp(
  // Need for local
  {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://social-573b5.firebaseio.com"
  }
);

const db = admin.firestore();

module.exports = { admin, db };
