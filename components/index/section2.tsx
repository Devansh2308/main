import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            paddingTop: "200px"
        },
        paper: {
            padding: theme.spacing(5),
            textAlign: "center",
            color: theme.palette.text.secondary
        },
        paper1: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary,
            height: 570
        },
        image: {
            width: "90%",
            height: "400px",
            borderRadius: "5%"
        },
        heading: {
            color: "black",
            paddingBottom: "70px"
        },
        about_head: {
            margin: "auto",
            width: "550px"
        },
        [theme.breakpoints.down("sm")]: {
            root: {
                paddingTop: "200px"
            },
            about_head: {
                margin: "auto",
                width: "180px"
            }
        }
    })
);

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root} id="About">
            <div className={classes.about_head}>
                <Typography variant="h1" className={classes.heading}>
                    Who are we?
                </Typography>
            </div>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6} lg={4}>
                    <div className={classes.paper1}>
                        <img
                            src="/index/aboutus.jpg"
                            className={classes.image}
                        ></img>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={8}>
                    <div className={classes.paper}>
                        <Typography variant="h5">
                            <p>
                                The Indian Society for Technical Education
                                (ISTE) is the leading national professional
                                non-profit making society for the technical
                                education system in our country. ISTE Students’
                                Chapter MANIT is one of the oldest and most
                                prestigious student organization of MANIT
                                Bhopal. ISTE MANIT aims to bring respite to the
                                students from the monologue classroom lectures,
                                thereby providing a platform to facilitate
                                healthy discussions and information exchange on
                                technical education. The blue chip event
                                Chimera, established in 2003, has been a success
                                ever since its inception. Chimera has major
                                events in its closet like Anubhuti, Chimera X,
                                Codathon, Megatreopuz, and Pro-shows.
                            </p>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
