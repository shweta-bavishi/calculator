import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles({
	result: {
		background: 'rgba(51, 57, 78)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: '20vh',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	resultText: {
		fontSize: 30
	}
});

const ResultPanel = ({ result }) => {
	const classes = useStyles();
	return (
		<Container className={classes.result}>
			<h2 className={classes.resultText}>{result}</h2>
		</Container>
	);
};

export default ResultPanel;
