import React from 'react';
import {
	Table,
	TableBody,
	TableContainer,
	TableRow,
	Paper
} from '@material-ui/core/';
import { Button } from '../common';
import { rows } from '../data';

export default function BasicTable({ result, updateResult }) {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableBody>
					{rows.map((col, colIndex) => (
						<TableRow key={colIndex}>
							{col.map((cell, cellIndex) => (
								<Button
									key={`${colIndex}_${cellIndex}`}
									buttonData={cell}
									result={result}
									updateResult={updateResult}
								/>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
