import React from 'react';
import { TableCell } from '@material-ui/core/';
import calculate from '../util/calculate'

const Button = ({ buttonData, result, updateResult }) => (
	<TableCell
		align="center"
		style={{ backgroundColor: `${buttonData.color}`, border: 0 }}
        onClick={() => updateResult(() => calculate(result, buttonData.text))}
	>
		{buttonData.text}
	</TableCell>
);

export default Button;
