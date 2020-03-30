import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import User from "./User";

const Users = () => {
  const [data, setData] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => setData(data.results))
      .catch(err => setErrors(err));
  }, []);
  return (
    <div>
      <span>Has error: {JSON.stringify(hasError)}</span>
      {data ? (
        <FormControl
          variant="filled"
          style={{
            minWidth: 200,
            color: "white",
            margin: 10
          }}
        >
          <Grid
            container
            spacing={2}
            style={{ padding: 20 }}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {data.map(user => (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <User user={user} />
              </Grid>
            ))}
          </Grid>
        </FormControl>
      ) : (
        <Typography color="inherit">No Users were found</Typography>
      )}
    </div>
  );
};

export default Users;
