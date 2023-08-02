import React, { useEffect, useRef } from 'react';

function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set the dimensions of the canvas to the size of the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const stars = [];
    const colors = [
      'rgb(255, 0, 0)',    // Red
      'rgb(0, 255, 0)',    // Green
      'rgb(0, 0, 255)',    // Blue
      'rgb(255, 255, 0)',  // Yellow
      'rgb(255, 165, 0)',  // Orange
      'rgb(128, 0, 128)',  // Purple
      'rgb(255, 192, 203)', // Pink
      'rgb(0, 255, 255)'   // Cyan
    ];
    const numStars = 650;
  
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 3 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const vx = Math.random() * 3 - 2;  // Add x velocity
      const vy = Math.random() * 3 - 2;  // Add y velocity
      stars.push({ x, y, radius, color, vx, vy });
    }
    
    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        context.fillStyle = star.color; // use color directly
        context.fill();
  
        // move star
        star.x += star.vx;
        star.y += star.vy;
        
        // reset star when it's out of the viewport
        if (star.x < 0 || star.x > canvas.width) {
          star.vx = -star.vx;
        }
        if (star.y < 0 || star.y > canvas.height) {
          star.vy = -star.vy;
        }
      });
      requestAnimationFrame(animate);
    }
    
    animate();
  }, []);
  
  
  return <canvas ref={canvasRef} style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%' }} />;
}
export default StarBackground;
