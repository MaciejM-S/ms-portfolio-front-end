import { animated, useSpring } from "@react-spring/web";

const AnimatedNavigation = ({ children }:any) => {
  const styles = useSpring({
    from: {
      opacity: 0,
      transform: 'scale(0) translate(-50% , -50%)',
      top:'50%'
    },
    to: {
      opacity: 1,
      transform: `scale(1) translate(-50% , -50%)`,
      top:'50%'
    },
    config: {
      duration: 250
    }
  });

  return (
    <animated.div
      style={{
        opacity: styles.opacity,
        transform: styles.transform,
        position: 'fixed',
        top: styles.top,
        left: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:50,
        backdropFilter: 'blur(5px)'
      }}
    >
      {children}
    </animated.div>
  );
};


export default AnimatedNavigation