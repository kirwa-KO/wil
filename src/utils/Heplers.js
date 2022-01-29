
export function changeTagsShape(tagsArray) {
	var objectsArrayTags = [];

	for (let tag of tagsArray) {
		objectsArrayTags.push({
			value: tag,
			label: tag,
		});
	}
	return (objectsArrayTags);
}