
export function convertTagsAraayObjsShapetoObjects(tagsArray) {
	var objectsArrayTags = [];

	for (let tag of tagsArray) {
		objectsArrayTags.push({
			value: tag.name,
			label: tag.name,
		});
	}
	return (objectsArrayTags);
}


export function convertUsersAraayObjsShapetoObjects(tagsArray) {
	var objectsArrayTags = [];

	for (let tag of tagsArray) {
		objectsArrayTags.push({
			value: tag.username,
			label: tag.username,
		});
	}
	return (objectsArrayTags);
}

export function changeUserPlaceinArray(arr, elementToChangeIndex, toIndex) {
    var fromIndex = arr.findIndex(element => element.value == elementToChangeIndex);
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    // arr[0].value = arr[0].value + " (Me)";
    arr[0].label = arr[0].label + " (Me)";
    return arr;
}
export function convertTagsArrayShapetoObjects(tagsArray) {
	var objectsArrayTags = [];

	for (let tag of tagsArray) {
		objectsArrayTags.push({
			value: tag,
			label: tag,
		});
	}
	return (objectsArrayTags);
}

export function convertTagsObjectsShapetoArray(tagsObjects) {
	var arrayTags = [];

	for (let tag of tagsObjects) {
		arrayTags.push(tag.value);
	}
	return (arrayTags);
}

export function convertTagsObjectsNameShapetoArrayTags(tagsObjects) {
	var arrayTags = [];

	for (let tag of tagsObjects) {
		arrayTags.push(tag.name);
	}
	return (arrayTags);
}