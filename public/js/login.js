// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
});

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'index.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
};

// home.js teraz zajmuje się handlowaniem zalogowanego usera dla każdej podstrony.
// var handleSignedInUser = function(user) {
//     document.getElementById('userName').style.display = "inline-block";
//     document.getElementById('userName').textContent = "Witaj " + firebase.auth().currentUser.email;
// };

// var handleSignedOutUser = function() {
//     document.getElementById('userName').style.display = 'none';
// };

// firebase.auth().onAuthStateChanged(function(user) {
//     user ? handleSignedInUser(user) : handleSignedOutUser();
// });

var initApp = function() {
// The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
}
window.addEventListener('load', initApp);
