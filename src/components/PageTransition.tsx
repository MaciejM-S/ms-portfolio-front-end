import { animated, useSpring } from "@react-spring/web";

const PageTransition = ({ children }:any) => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return <>
  {/* <animated.div className="div"></animated.div> */}
  <animated.div style={styles}>{children}</animated.div>
  </>
};

export default PageTransition;