import React from "react";
import "./UsersTable.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodo } from "../Redux/users/usersActions";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#f8d5bb",
    color: "#e8721c",
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    width: "100%",
    marginInline: 10,
    height: "100%",
    overflow: "auto",
  },
  table: {
    minWidth: 700,
    backgroundColor: "white",
  },
  sort: {
    backgroundColor: "#f8d5bb",
  },
  margin: {
    backgroundColor: "#ea8033",
    color: "white",
    fontSize: "12px",
    margin: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#d16719",
    },
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function UserTable({ data }) {
  const userData = useSelector((state) => (state = state.user));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [sort, setSort] = useState();
  const [sortBy, setSortBy] = useState();

  const handleSortRequest = (cellId) => {
    const isAsc = sortBy === cellId && sort === "asc";
    setSort(isAsc ? "desc" : "asc");
    setSortBy(cellId);
  };

  useEffect((e) => {
    dispatch(fetchTodo());
  }, []);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Todo ID</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.users
            .filter((items) => {
              if (data == "") {
                return items;
              } else if (data == items.id) {
                return items;
              } else if (
                items.title.toLowerCase().includes(data.toLowerCase())
              ) {
                return items;
              } else if (items.Completed) {
                return items;
              }
            })
            .map((todo) => (
              <TableRow key={todo.id}>
                <StyledTableCell>{todo.id}</StyledTableCell>
                <StyledTableCell>{todo.title}</StyledTableCell>
                <StyledTableCell>
                  {todo.completed ? "Complete" : "Incomplete"}
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    size="small"
                    className={classes.margin}
                  >
                    View User
                  </Button>
                </StyledTableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
