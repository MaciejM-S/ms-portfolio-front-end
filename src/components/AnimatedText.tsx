import React, { useState, useEffect } from "react";
import {
  useTrail,
  a,
} from "@react-spring/web";
import styles from "./styles.module.css";

function AnimatedText({
  text,
  className = "",
  centerClass
}: {
  text: string;
  className?: string;
  centerClass?:any
}) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const Trail: React.FC<{ open: boolean; children: any }> = ({
    open,
    children,
  }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(text.split(" ").length, {
      config: { mass: 10, tension: 2000, friction: 200 },
      opacity: showText ? 1 : 0,
      y: showText ? 0 : 20,
      height: showText ? 110 : 0,
      from: { opacity: 0, y: 40, height: 0 },
    });
    return (
      <div style={centerClass||{display:'flex'}} >
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={styles.trailsText} style={{...style, width:'auto'}}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="w-full mx-auto py-2 flex items-center justify-center text-center">
        <div
          className={`flex w-full text-dark font-bold `}
        >
          <Trail open={showText}>
            {text.split(" ").map((word: string, index: number) => (
              <span key={word + "-" + index} className={className}>
                {word}&nbsp;
              </span>
            ))}
          </Trail> 
        </div>
      </div>
    </>
  );
}

export default AnimatedText;
