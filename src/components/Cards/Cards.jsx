import React from 'react';
import { Card , CardContent ,Typography ,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames';
import CountUp from 'react-countup';

const Cards = ({data : {confirmed , recovered ,deaths ,lastUpdate}}) => {
    const date = new Date(lastUpdate).toDateString();
    if(!confirmed){
        return (
            <h1>Loading... </h1>
        )
    }
    return (
      <div className={styles.container}>  
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                        <Typography color ="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={1.5} seperator="," />
                        </Typography>
                        <Typography color ="textSecondary" >{date}</Typography>
                        <Typography variant="body2">Number of Active Cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
            <CardContent>
                    <Typography gutterBottom className={styles.recoveredtxt}>Recovered</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={recovered.value} duration={1.5} seperator="," />
                    </Typography>
                    <Typography color ="textSecondary" >{date}</Typography>
                    <Typography variant="body2">Number of Recovered cases from COVID-19</Typography>
            </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
            <CardContent>
                    <Typography color ="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={deaths.value} duration={1.5} seperator="," />
                    </Typography>
                    <Typography color ="textSecondary" >{date}</Typography>
                    <Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
            </CardContent>
            </Grid>
        </Grid>

      </div>  
    )
}

export default Cards;
