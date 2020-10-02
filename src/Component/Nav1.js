import React, { useEffect, useState } from 'react';
import './App.css';
import { makeStyles, AppBar, Toolbar, Typography, IconButton, Grid, Card, CardMedia, CardContent, CircularProgress, fade, TextField } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import { toFirstCharUppercase } from "../Constants";
import { deepPurple } from '@material-ui/core/colors';
import axios from "axios";

const Nav = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,

        },
        title: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(1),
        },
        pokedexContainer: {
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
        },
        cardMedia: {
            margin: "auto",
        },
        cardContent: {
            textAlign: "center",
        },
        searchContainer: {
            display: "flex",
            backgroundColor: fade(theme.palette.common.white, 0.15),
            paddingLeft: "20px",
            paddingRight: "20px",
            marginTop: "5px",
            marginBottom: "5px",
        },
        searchIcon: {
            alignSelf: "flex-end",
            marginBottom: "5px",
        },
        searchInput: {
            width: "200px",
            margin: "5px",
        },
        purple: {
            color: theme.palette.getContrastText(deepPurple[500]),
            backgroundColor: deepPurple[500],
        },
    }));

    const classes = useStyles();
    const { history } = props;
    const [pokemonData, setPokemonData] = useState({});
    const [filter,setFilter] = useState("");

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
            .then(function (response) {
                const { data } = response;
                const { results } = data;
                const newPokemonData = {};
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1
                            }.png`,
                    };
                });
                setPokemonData(newPokemonData);
            });
    }, []);

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    };

    const getPokemonCard = (pokemonId) => {
        const { id, name, sprite } = pokemonData[pokemonId];
        return (
            <Grid item xs={4} key={pokemonId}>
                <Card onClick={() => history.push(`/${id}`)}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={sprite}
                        style={{ width: "130px", height: "130px" }}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    };


    return (
        <div className={classes.root}>
            <>
                <AppBar position="static" style={{ backgroundColor: "#005b8f" }}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Pokemon
            </Typography>
                        <SearchIcon className={classes.searchIcon} />
                        <TextField
                            className={classes.searchInput}
                            onChange={handleSearchChange}
                            label="Pokemon"
                            variant="standard"
                        />
                    </Toolbar>
                </AppBar>
                {pokemonData ? (
                    <Grid container spacing={2} className={classes.pokedexContainer}>
                        {Object.keys(pokemonData).map(
                            (pokemonId) =>
                                pokemonData[pokemonId].name.includes(filter) &&
                                getPokemonCard(pokemonId)
                        )}
                    </Grid>
                ) : (
                        <CircularProgress />
                    )}
            </>
        </div>
    );
}

export default Nav;