
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "hsl(0, 0%, 12%)",
        zIndex: 100,
    },
    color: {
        color: "white"
    }
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0) {
            history.push("/");
        } else if (value === 1) {
            history.push("/movies");
        } else if (value === 2) {
            history.push("/series");
        } else if (value === 3) {
            history.push("/search");
        }
    }, [value, history]);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                label="Trending"
                icon={<WhatshotIcon />}
                className={classes.color}
            />
            <BottomNavigationAction
                label="Movies"
                icon={<MovieIcon />}
                className={classes.color}

            />
            <BottomNavigationAction
                label="TV Series"
                icon={<TvIcon />}
                className={classes.color}

            />
            <BottomNavigationAction
                label="Find"
                icon={<SearchIcon />}
                className={classes.color}

            />
        </BottomNavigation>
    );
}