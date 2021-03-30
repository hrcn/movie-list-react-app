import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bar: {
    position: "relative",
    left: "25%",
    display: "flex",
    float: "left",
  },
  pagination: {
    display: "inline",
    height: "2rem",
  },
  pageInput: {
    width: "3rem",
    height: "3rem",
  },
  inputButton: {
    display: "inline",
    height: "3rem",
    marginLeft: "1rem",
    "&:hover": {
      background: "#4682B4",
    },
  },
}));

export default function MVPagination(props) {
  const classes = useStyles();
  const [currentPage, setPage] = React.useState(1);
  const [inputPage, inputNum] = React.useState(currentPage);
  const handlePageChange = (event, page) => {
    props.onChange(event, page);
    setPage(page);
    inputNum(page);
  };
  const handleClick = (e) => {
    if (inputPage > 0 && inputPage <= props.count) {
      props.onChange(e, inputPage);
      setPage(inputPage);
    } else if (inputPage <= 0) {
      props.onChange(e, 1);
      setPage(1);
      inputNum(1);
    } else {
      props.onChange(e, props.count);
      setPage(props.count);
      inputNum(props.count);
    }
  };
  const handleInputChange = (e) => {
    if (Number.isInteger(parseInt(e.target.value, 10)))
      inputNum(parseInt(e.target.value, 10));
    else inputNum();
    // if(e.target.value==='')inputNum();
    // else if (e.target.value==='-') inputNum();
    // else inputNum(parseInt(e.target.value,10));
  };

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
        onChange={handlePageChange}
      />
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
        onClick={handleClick}
      >
        Go
      </Button>
    </div>
  );
}
