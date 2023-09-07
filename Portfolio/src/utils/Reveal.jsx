import { useSpring, animated, useInView } from "@react-spring/web";

const Reveal = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(75px)",
    config: { duration: 500 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export default Reveal;
