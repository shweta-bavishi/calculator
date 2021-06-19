
const getResult = (result, operation) => {
	switch (operation) {
		case 'C':
			return '';
        case '=':
            // eslint-disable-next-line no-eval
            return eval(result);
        default:
            return result + operation
	}
};

export default getResult;
