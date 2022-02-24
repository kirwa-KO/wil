f = ["banana", "apple", "orange"];

arr = [
    {
        "value": "twelve",
        "label": "twelve"
    },
    {
        "value": "imran",
        "label": "imran"
    },
    {
        "value": "seven",
        "label": "seven"
    },
    {
        "value": "hamza_harik",
        "label": "hamza_harik"
    }
]

var toIndex = 0;
var fromIndex = arr.findIndex(element => element.value == "imran");
var element = arr[fromIndex];
arr.splice(fromIndex, 1);
arr.splice(toIndex, 0, element);
console.log(arr);
