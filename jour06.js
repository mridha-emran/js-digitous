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
