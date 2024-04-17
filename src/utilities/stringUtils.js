export const stringToBool = value => {
  return Boolean(value.replace(/\s*(false|null|undefined|0)\s*/i, ''));
};

export const splitCamelCase = v => {
  return v
    .replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, ' $1')
    .toLowerCase();
};

export const stringToSentenceCase = v => {
	const arrayString = splitCamelCase(v).split(' ');
	arrayString[0] = arrayString[0].charAt(0).toUpperCase() + arrayString[0].slice(1);
	return arrayString.join(' ');
}
