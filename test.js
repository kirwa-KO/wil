x = [
	{name: 1},
	{name: 2},
	{name: 4}];

y = [
	{name: 1},
	{name: 3}, 
	{name: 2},
	{name: 4},
	{name: 5},
	{name: 6},
	{name: 4}];


var t = x.every(element => {
	return y.includes(element);
})

console.log(t)