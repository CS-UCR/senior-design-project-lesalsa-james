import React, { useState, useEffect } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Container, Grid, makeStyles, CircularProgress } from "@material-ui/core";
import { Card, CardHeader, Typography, Avatar, CardContent, CardActions, Button, Collapse, Paper } from '@material-ui/core'
import axios from 'axios';
import UserCard from '../components/UserCard';
// import User from '../../../server/models/userModel';

import Navbar from '../components/Navbar'


import { styled } from '@mui/material/styles';

import CardMedia from '@mui/material/CardMedia';

import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useHistory, useLocation } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        marginTop: 20,
    },
    loader: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        marginBottom: "1rem",
        padding: "13px",
      },
    filters: {
        padding: "0 1.5rem",
      },
})

const FilterPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const params = location.search ? location.search : null;

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [game, setGame] = useState("");
    const [numPlayers, setNumPlayers] = useState("");
    const [playStyle, setPlayStyle] = useState("");
    const [rank, setRank] = useState("");
    const [showAll, setShowAll] = useState(false);

    // console.log(game);
    const [filter, setFilter] = useState("");

    // for drop down menu card
    const [expanded, setExpanded] = useState(false);


    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
      
    //   export default function RecipeReviewCard() {
       
      
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
        // };
    

    useEffect(() => {
        let cancel;

        const fetchData = async () => {
            setLoading(true);
            try {
                let query;

                if(params && !filter) {
                    query = params;
                } else {
                    query = filter;
                }

               
                const { data } = await axios({
                    method: "GET",
                    url: 'api/user/filter' + query,
                    cancelToken: new axios.CancelToken((c) => cancel = c)
                });

                setUsers(data.data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data);
            }
        } 

        fetchData();

        return () => cancel()
    }, [filter, params]);

    // const filterUsers = (game) => {
    //     buildFilter(game);
    // };

    const showAllUsers = () => {
        // setShowAll(!showAll);
        // buildFilter();
        // const test = "FilterPage";
        history.push('/FilterPage');
    };

    // console.log(game);
    const string1 = game;
    const string2 = numPlayers;
    const string3 = playStyle;
    const string4 = rank;
    const buildFilter = () => {
        console.log(showAll);
        
        const urlFilter = '?game=' + string1 + "&numPlayers=" + string2 + "&playstyle=" + string3 + "&rank=" + string4;
        
        setFilter(urlFilter);

        history.push(urlFilter);
    };

    return (
        // <div>
        
        // </div>
        
        <Container className={classes.root}>
            
            <Navbar/>

            <Paper className={classes.paper}>
            <Button size = 'lg' colorScheme='blue' onClick={() => {history.push('/login')}}>
        Back 
        </Button> 
    
                <Grid container>
                    
                    <Grid item xs={12} sm={6}>
                        <Typography gutterBottom >Sort By</Typography>

                        <FormControl component="fieldset" className={classes.filters}>
                            
                            <RadioGroup
                                values={false} row
                                aria-label="game"
                                name="game"
                                value={game}
                                onChange={(e) => setGame(e.target.value)}
                            >
                                <FormControlLabel
                                    value="Valorant"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="Valorant"
                                />

                                <FormControlLabel
                                    value="League of Legends"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="League of Legends"
                                />
                            </RadioGroup>

                            <RadioGroup
                                values={false} row
                                aria-label="numPlayers"
                                name="numPlayers"
                                value={numPlayers}
                                onChange={(e) => setNumPlayers(e.target.value)}
                            >
                                <FormControlLabel
                                    value="2"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="2"
                                />

                                <FormControlLabel
                                    value="3"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="3"
                                />

                                <FormControlLabel
                                    value="4"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="4"
                                />

                                <FormControlLabel
                                    value="5"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="5"
                                />
                            </RadioGroup>

                            <RadioGroup
                                values={false} row
                                aria-label="playstyle"
                                name="playstyle"
                                value={playStyle}
                                onChange={(e) => setPlayStyle(e.target.value)}
                            >
                                <FormControlLabel
                                    value="Casual"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="Casual"
                                />

                                <FormControlLabel
                                    value="Competitive"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="Competitive"
                                />
                            </RadioGroup>

                            <RadioGroup
                                values={false} row
                                aria-label="rank"
                                name="rank"
                                value={rank}
                                onChange={(e) => setRank(e.target.value)}
                            >
                                <FormControlLabel
                                    value="Bronze"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="Bronze"
                                />

                                <FormControlLabel
                                    value="Silver"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="Silver"
                                />

                                <FormControlLabel
                                    value="Gold"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="Gold"
                                />

                                <FormControlLabel
                                    value="Platinum"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="Platinum"
                                />

                                <FormControlLabel
                                    value="Diamond"
                                    disabled={loading}
                                    control={<Radio />}
                                    label="Diamond"
                                />
                            </RadioGroup>
                        </FormControl>
                       
                            <Button 
                            onClick={buildFilter}
                            size="lg" 
                            w="full" 
                            variant="solid" 
                            colorScheme="green"
                            >
                                Filter 
                            </Button>

                            {/* <Button 
                            onClick={showAllUsers}
                            size="lg" 
                            w="full" 
                            variant="solid" 
                            colorScheme="green"
                            >
                                Show All 
                            </Button> */}
                    
                    </Grid>
                </Grid>
            </Paper>
            <Grid container spacing={2}>
                {loading ? (
                    <div className={classes.loader}>
                        <CircularProgress size="3rem" thickness={5} />
                    </div>
                ) : (
                    users.map(user => (
                        <Grid item key={user._id} xs={12} sm={6} md={4} lg={3} >   
                            <UserCard user={user} />
                        </Grid>
                    ))
                 )} 
            </Grid>
        </Container>
    );
};

export default FilterPage