import React from 'react';
import styles from './styles.module.css'
import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const Competitors = () => {
    const rows = [{
        id: '1',
        name: '123',
        course: '1',
        weight: '58',
        wasPresent: '+',
    }];

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    Список участников
                </div>
                <TableContainer className={styles.compTable} component={Paper}>
                    <Table size="small" stickyHeader aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell align="right">Участник</TableCell>
                                <TableCell align="right">Курс</TableCell>
                                <TableCell align="right">Вес</TableCell>
                                <TableCell align="right">Явка</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    className={styles.tableRow}
                                    hover={true}
                                >
                                    <TableCell component="th" scope="row" className={styles.tableCell}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" className={styles.tableCell}>{row.id}</TableCell>
                                    <TableCell align="right" className={styles.tableCell}>{row.course}</TableCell>
                                    <TableCell align="right" className={styles.tableCell}>{row.weight}</TableCell>
                                    <TableCell align="right" className={styles.tableCell}>{row.wasPresent}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Competitors;