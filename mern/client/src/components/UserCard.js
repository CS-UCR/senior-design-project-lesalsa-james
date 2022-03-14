// import React from 'react'
import { Card, CardHeader, Typography, Avatar, CardContent, CardActions, Button, CardMedia, makeStyles } from '@material-ui/core'
import pic1 from "./leaguePic.jpg"



const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
      }
})

const UserCard = ({ user }) => {
    const classes = useStyles();

    // var temp = "";
    //  if(user.game == "Valorant")
    //     temp = "./valorantPic.jpg";
    //  else   
    //     temp = "./leaguePic.jpg";

    return (
        <Card>
            <CardHeader  
                avatar={<Avatar />}
                title={<Typography variant="h6">{user.name}</Typography>}
            />

            {/* <CardMedia
                    className={classes.media}
                    
                    image={require("./valorantPic.jpg")} // require image
                    title="Contemplative Reptile"
                    style={useStyles.media} // specify styles
                /> */}

            <CardContent>
                <div>
                    {'Game: '}{user.game}
                </div>
                <div>
                    {'# of Players: '}{user.numPlayers}
                </div>
                <div>
                    {'Playstyle: '}{user.playstyle}
                </div>
                <div>
                    {'Rank: '}{user.rank}
                </div>
                <div>
                    {'Email: '}{user.email}
                </div>
            </CardContent>

            {/* <CardActions>
                <Button variant="contained" size="small" color="primary">Chat Now</Button>
                <Button size="small" color="primary">Friend</Button>
            </CardActions> */}
        </Card>
    );
};

export default UserCard;