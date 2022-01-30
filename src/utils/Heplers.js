
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