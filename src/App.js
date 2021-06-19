import { CalculatorBase} from './components'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <CalculatorBase />
    </div>
  );
}

export default App;
