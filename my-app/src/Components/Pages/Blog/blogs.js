import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Blog from "./Blog";
import blogs from "../../../blog-data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Blogs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Blog blog={blog} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blogs;
