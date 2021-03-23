import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    bar: {
        display: 'flex',
        justifyContent: 'center',
    },
    pagination: {
        height: '2rem',
    },
    pageInput: {
        width: '3rem',
        height: '3rem',
    },
    inputButton: {
        height: '3rem',
        marginLeft: '1rem',
        float: 'left',
        '&:hover': {
            background: '#4682B4'
        }
    },
}))

export default (props) => {
    const classes = useStyles();
    const [currentPage, setPage] = React.useState(1);
    const [inputPage, inputNum] = React.useState(currentPage);
    const handlePageChange = (event, page) => {
        props.onChange(event, page);
        setPage(page);
        inputNum(page);
    };
    const handleClick = (e) => {
        props.onChange(e, inputPage);
        setPage(inputPage);
    }
    const handleInputChange = (e)=>{
        inputNum(parseInt(e.target.value,10))
    }

    return (
        <div className={classes.bar}>
            <Pagination
                className={classes.pagination}
                boundaryCount={1}
                siblingCount={2}
                count={props.count}
                size="large"
                page={currentPage}
                showLastButton={true}
                showFirstButton={true}
                color="primary"
                onChange={handlePageChange} />
            <TextField
                className={`${classes.pageInput}`}
                label="Page"
                value={inputPage}
                onChange={handleInputChange}
                variant="outlined"
            />
            <Button
                className={`${classes.inputButton}`}
                variant="contained"
                onClick={handleClick}>
                Go
            </Button>
        </div>
    );
}
