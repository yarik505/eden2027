import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let lights = [];
    const lightCount = 6;
    
    // Set background color based on theme
    const backgroundColor = theme === 'light' ? 'white' : 'black';
    
    // Set light colors based on theme
    const lightColors = theme === 'light' 
      ? ['rgba(0, 21, 250, 0.3)', 'rgba(102, 0, 255, 0.3)', 'rgba(255, 0, 170, 0.3)']
      : ['rgba(0, 0, 255, 0.6)', 'rgba(128, 0, 128, 0.6)'];
    
    for (let i = 0; i < lightCount; i++) {
        lights.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * (canvas.width / 3) + (canvas.width / 5),
            dx: (Math.random() - 0.5) * 0.3, // Increased from 0.2 to 0.3 for faster movement
            dy: (Math.random() - 0.5) * 0.3, // Increased from 0.2 to 0.3 for faster movement
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.03 + 0.01, // Increased from 0.02+0.005 to 0.03+0.01 for faster animation
            amplitude: Math.random() * 25 + 15, // Increased from 20+10 to 25+15 for more pronounced movement
            color: lightColors[Math.floor(Math.random() * lightColors.length)]
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < lights.length; i++) {
            let light = lights[i];
            
            ctx.beginPath();
            let gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, light.radius);
            gradient.addColorStop(0, light.color);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Move in a wave-like chaotic motion
            light.angle += light.speed;
            light.x += Math.cos(light.angle) * light.amplitude * 0.15; // Increased from 0.1 to 0.15 for faster movement
            light.y += Math.sin(light.angle) * light.amplitude * 0.15; // Increased from 0.1 to 0.15 for faster movement
            
            if (light.x - light.radius < 0 || light.x + light.radius > canvas.width) light.angle += Math.PI;
            if (light.y - light.radius < 0 || light.y + light.radius > canvas.height) light.angle += Math.PI;
        }
        animationFrameId = requestAnimationFrame(animate);
    }
    
    let animationFrameId = requestAnimationFrame(animate);
    
    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Added theme as dependency to re-render when theme changes

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;