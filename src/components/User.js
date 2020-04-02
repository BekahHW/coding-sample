import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const User = () => {
  const [data, setData] = useState([]);
  const [hasError, setErrors] = useState(false);

  // get data for one user
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => setData(data.results))
      .catch(err => setErrors(err));
  }, []);
  return (
    <div>
      {hasError && <span>Has error: {JSON.stringify(hasError)}</span>}
      {data ? (
        <>
          <Typography variant="h1" component="h2">
            Front End Dev
          </Typography>{" "}
          {data.map(user => (
            // use grid for responsive layout
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              key={`${user.name.first} ${user.name.last}`}
            >
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <Card
                  style={{
                    justifyContent: "center",
                    margin: "auto",
                    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Use circle image */}
                  <img
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: "50%",

                      margin: 20
                    }}
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                  />
                  <Divider />
                  {/* Add basic info, pulling from data */}
                  <CardContent>
                    <Typography variant="h4" component="h4">
                      {`${user.name.first} 
                    ${user.name.last}`}
                    </Typography>
                    <Typography component="h5" variant="h5">
                      {user.email}
                    </Typography>

                    <Typography variant="h6" component="p">
                      {user.dob.age} y.o. • {user.location.city},{" "}
                      {user.location.state}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ))}
        </>
      ) : (
        // if no data is available, let users know there is nothing to display
        <Typography component="h5" variant="h5">
          "There are no users to display"
        </Typography>
      )}
    </div>
  );
};

export default User;
