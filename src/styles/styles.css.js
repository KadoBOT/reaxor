import { StyleSheet } from '../../node_modules/aphrodite/dist/aphrodite.js';

const keyframes = {
  '0%': {fontSize: 12},
  '50%': {fontSize: 16},
  '100%': {fontSize: 12}
};

export const styles = StyleSheet.create({
    red: {
        ':hover': {
            color: 'red'
        }
    },

    odd: {
      color: 'white',
      background: 'blue'
    },

    even: {
      color: 'blue',
      background: 'white'
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red'
        }
    },
    animate: {
      animation: 'x 6s ease 0s infinite',
      animationName: keyframes
    }
});
