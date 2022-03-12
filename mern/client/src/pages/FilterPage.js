import React, { useState, useEffect } from 'react';
import { Container, Grid, makeStyles, CircularProgress } from "@material-ui/core";
// import { Card, CardHeader, Typography, Avatar, CardContent, CardActions, Button } from '@material-ui/core'
import axios from 'axios';
// import UserCard from '../components/UserCard';
// import User from '../../../server/models/userModel';

import Navbar from '../components/Navbar'

const useStyles = makeStyles({
    root: {
        marginTop: 20,
    },
    loader: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const FilterPage = () => {
    const classes = useStyles();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancel;

        const fetchData = async () => {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: 'api/user',
                    cancelToken: new axios.CancelToken((c) => cancel = c)
                });

                setUsers(data.data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data);
            }
        } 

        fetchData();
    }, [])

    return (
        // <div>

        // </div>

        // <Card>
        //     <CardHeader  
        //         avatar={<Avatar />}
        //         title={<Typography variant="h6">{"Steven"}</Typography>}
        //     />

        //     <CardContent>
        //         <Typography variant="caption">{"my@email.com"}</Typography>
        //     </CardContent>

        //     <CardActions>
        //         <Button variant="contained" size="small" color="primary">Chat Now</Button>
        //         <Button size="small" color="primary">Friend</Button>
        //     </CardActions>
        // </Card>

        <Container className={classes.root}>
            <Navbar/>
            <Grid container spacing={2}>
                {loading ? (
                    <div className={classes.loader}>
                        <CircularProgress size="3rem" thickness={5} />
                    </div>
                ) : (
                    users.map(user => (
                        <Grid item key={user._id} xs={12} sm={6} md={4} lg={3}>
                            {/* <UserCard user={user} /> */}

                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
};

export default FilterPage