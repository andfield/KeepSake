import {makeStyles} from '@material-ui/core/styles'


export default makeStyles(() => ({
    container: {
        backgroundColor: '0,0,0,0'
    },
    appBar: {
        backgroundColor: '#1f1f1f',
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
}))