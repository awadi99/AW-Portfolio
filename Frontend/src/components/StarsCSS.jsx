import React from "react";

function StarsCSS({ count = 1000 }) {
  const stars = Array.from({ length: count });

  return (
    <div className="stars-container">
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 2; // Bigger: 2–4px
        const left = Math.random() * 100 + "%";
        const top = Math.random() * 100 + "%";
        const duration = Math.random() * 5 + 5 + "s"; // 5–10s
        const delay = Math.random() * -10 + "s";

        return (
          <div
            key={i}
            className="star"
            style={{
              width: size + "px",
              height: size + "px",
              left,
              top,
              animationDuration: duration,
              animationDelay: delay,
            }}
          />
        );
      })}
    </div>
  );
}

export default StarsCSS;
