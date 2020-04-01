import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// name
// location
// email
// age

const User = () => {
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
      {hasError && <span>Has error: {JSON.stringify(hasError)}</span>}
      {data ? (
        // On revision, makes sure all cards are uniform size
        <>
          <div>User</div>
          {data.map(user => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Card>
                <CardMedia
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 200 / 2
                  }}
                  image={user.picture.medium}
                />
                <CardContent>
                  <Typography variant="h4" component="h4">
                    {console.log(user)}
                    Name: {user.name.first}
                    {user.name.last}
                  </Typography>
                  <Typography variant="h5" component="h5">
                    Location: {user.location.city}, {user.location.state}
                  </Typography>

                  <Typography component="p">Age:{user.dob.age}</Typography>
                  <Typography component="p">{user.language}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default User;
