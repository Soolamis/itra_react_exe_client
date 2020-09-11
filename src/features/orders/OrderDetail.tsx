import React, { useCallback } from 'react'
import { actions, detailSelectors } from './reducer'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import OrderIcon from '@material-ui/icons/ShoppingCart'
import OrderTabPanel from './OrderTabPanel'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        maxWidth: '90vw',
        width: '40em',
    },
    detailIdWrapper: {
        marginLeft: '1em',
    },
    background: {
        backgroundColor: theme.palette.background.default,
    }
}));

export default function OrderDetail() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const isOpen = useSelector(detailSelectors.isOpen);
    const order = useSelector(detailSelectors.currentOrder);
    const tab = useSelector(detailSelectors.tab);
    const id = useSelector(detailSelectors.id);

    const handleClose = useCallback(
        () => dispatch(actions.detail.close()), 
        [dispatch],
    );
    const handleChangeTab = useCallback(
        (tabId: number) => dispatch(actions.detail.changeTab(tabId)),
        [dispatch],
    );

    return (
        <Drawer
            anchor='right'
            open={isOpen}
            onClose={handleClose}
            classes={{ paper: classes.background }}
        >
            <Box className={classes.root}>
                <Grid 
                    container
                    direction='column'
                    spacing={2}
                >
                    <Grid 
                        item
                        container
                        justify='space-between'
                        alignItems='center'
                    >
                        <Grid item>
                            <Grid 
                                container
                                alignItems='center'
                                spacing={2}
                                className={classes.detailIdWrapper}
                            >
                                <Grid item>
                                    <Icon color='primary'>
                                        <OrderIcon></OrderIcon>
                                    </Icon>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h5' color='primary'>
                                        {id}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={handleClose}>
                                <CloseIcon></CloseIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <OrderTabPanel
                            tab={tab}
                            onChangeTab={handleChangeTab}
                            data={order}
                        ></OrderTabPanel>
                    </Grid>
                </Grid>
            </Box>
        </Drawer>
    );
}