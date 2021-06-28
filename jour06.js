//ex 1

function formatDate(strD) {

	strD = new Date(strD)
	year = strD.getFullYear()
	month = strD.getMonth()
	day = strD.getDate()
	console.log(day + "/" + (month + 1) + "/" + year)

}

//ex 2
function calculateAge (strage) {
    born=new Date(strage)
console.log(strage)
    age=new Date(new Date()-born)

    console.log(born)
    console.log(age)
    
     console.log(age.getFullYear()-1970)
    
}

calculateAge("1985-11-23")
//ex-3
var prompt = require("prompt");


prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

var profile = {
    properties: {
      email: {
        pattern: /[a-z]+[@]+[a-z]+[.]+(.[a-z]){1,3}/,
        description:"Email",
        message: 'Email doit avoir un @ et un domaine (.xxy)',
        required: true
      },
      username: {
        pattern: /[a-z,0-9,-]/,
        description:"Nom d'utilisateur",
        message: 'Le nom ne dois avoir que des lettres, chiffres et tirets',
        required: true
      },
      password: {
        pattern: /[a-z+]+[0-9+]/,
        description:"Mot de passe",
        message: 'Le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets',
        required: true
      }
    }
  };


function CheckProfile() {
    prompt.get(profile,

        function (err, res) {
            if (err) {
                return onErr(err);
            }

            if ((res.email.required = true) && (res.username.required = true) && (res.password.required = true)) {
                console.log("All good")

            }


        })
}
CheckProfile()