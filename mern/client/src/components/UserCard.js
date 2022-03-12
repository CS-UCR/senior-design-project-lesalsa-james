// import React from 'react'
import { Card, CardHeader, Typography, Avatar, CardContent, CardActions, Button } from '@material-ui/core'

const UserCard = ({ user }) => {
    return (
        <div>
            <p>{user.name}</p>
        </div>
        // <Card>
        //     <CardHeader  
        //         avatar={<Avatar />}
        //         title={<Typography variant="h6">{user.name}</Typography>}
        //     />

        //     <CardContent>
        //         <Typography variant="caption">{user.email}</Typography>
        //     </CardContent>

        //     <CardActions>
        //         <Button variant="contained" size="small" color="primary">Chat Now</Button>
        //         <Button size="small" color="primary">Friend</Button>
        //     </CardActions>
        // </Card>
    );
};

export default UserCard;