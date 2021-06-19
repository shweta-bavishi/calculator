import React, { useState } from 'react';
import { Grid, makeStyles, Container } from '@material-ui/core';
import { ResultPanel, ButtonPanel } from '.';

const useStyles = makeStyles({
	result: {
		border: 0,
		width: '40vh'
	}
});

const CalculatorBase = () => {
	const [result, setResult] = useState(0);
	const classes = useStyles();
	return (
		<Container className={classes.result}>
			<Grid>
				<ResultPanel result={result} />
			</Grid>
			<Grid>
				<ButtonPanel result={result} updateResult={setResult} />
			</Grid>
		</Container>
	);
};

export default CalculatorBase;
