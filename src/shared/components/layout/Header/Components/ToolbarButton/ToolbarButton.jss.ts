import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  button: {
    padding: 0,
    color: 'var(--mainBlue)',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--avenirNextMedium)',
    minHeight: 'initial',
    fontSize: '16px',

    '&:hover': {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'var(--hoveredMainBlue)',
    }
  },
});
