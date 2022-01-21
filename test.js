var date = new Date();

var options = {
	day: "numeric",
	month: "short", //to display the full name of the month
	year: "numeric",
};

console.log(
	date.toLocaleDateString("en", options) //en is language option, you may specify..
);
