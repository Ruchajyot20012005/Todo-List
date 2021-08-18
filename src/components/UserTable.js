import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTodo, fetchuserId } from "../Redux/users/usersActions";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { TableSortLabel } from "@material-ui/core";

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
  const [status, setStatus] = useState(["complete", "incomplete"]);
  const [sort, setSort] = useState("asc");
  const [sortBy, setSortBy] = useState();

  const handleSortReqest = (cellId) => {
    const isAsc = sortBy === cellId && sort === "asc";
    setSort(isAsc === "asc" ? "desc" : "asc");
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
            <StyledTableCell>
              <TableSortLabel onClick={() => handleSortReqest()}>
                Todo ID
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.users
            .filter((items) => {
              if (data === "") {
                return items;
              } else if (data == items.id) {
                return items;
              } else if (
                items.title.toLowerCase().includes(data.toLowerCase())
              ) {
                return items;
              } else if (status[0].toLowerCase().includes(data.toLowerCase())) {
                if (items.completed == true) {
                  return items;
                }
              } else if (status[1].toLowerCase().includes(data.toLowerCase())) {
                if (items.completed == false) {
                  return items;
                }
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
                    value={todo.id}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = todo.userId;
                      const todo_id = todo.id;
                      const title = todo.title;
                      dispatch(
                        fetchuserId({
                          userID: id,
                          todoId: todo_id,
                          todoTitle: title,
                        })
                      );
                    }}
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
