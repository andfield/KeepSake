import React, {useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import logo from './images/logo.gif'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import './index.css'

const App=() => {
    const classes=useStyles()
    const dispatch  = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container className={classes.container} maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">KeepSake</Typography>
                <img className={classes.image} src={logo} alt="logo" height="70"></img>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App