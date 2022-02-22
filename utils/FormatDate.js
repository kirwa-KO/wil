

var options = {
	day: "numeric",
	month: "short", //to display the full name of the month
	year: "numeric",
};

function getFormatedDate(dateString) {
	return (new Date(dateString).toLocaleDateString("en", options))
}

export default getFormatedDate;