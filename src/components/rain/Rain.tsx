import { useEffect, useRef } from "react";
import styles from './Rain.module.css';

const Rain = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Verificación de null para canvas
    const context = canvas.getContext("2d");
    if (!context) return; // Verificación de null para context

    // Ajustar el tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.5;

    // Redimensionar el canvas si la ventana cambia de tamaño
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.3;
      }
    };
    window.addEventListener("resize", handleResize);

    const rainDropsArray: RainDrop[] = [];
    const splashParticlesArray: SplashParticle[] = [];

    // Clase para las gotas de lluvia
    class RainDrop {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      canvas: HTMLCanvasElement;
      context: CanvasRenderingContext2D;

      constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.context = context;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 10 + 5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.y += this.speed;
        if (this.y > this.canvas.height - 20) {
          this.createSplash();
          this.reset();
        }
      }

      draw() {
        this.context.strokeStyle = `rgba(240, 246, 240, ${this.opacity})`;
        this.context.lineWidth = 1;
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.context.lineTo(this.x, this.y + this.length);
        this.context.stroke();
      }

      createSplash() {
        for (let i = 0; i < 5; i++) {
          splashParticlesArray.push(new SplashParticle(this.x, this.canvas.height - 20, this.context));
        }
      }

      reset() {
        this.y = 0 - this.length;
        this.x = Math.random() * this.canvas.width;
        this.speed = Math.random() * 5 + 2;
      }
    }

    // Clase para las partículas de salpicadura
    class SplashParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      shrink: number;
      context: CanvasRenderingContext2D;

      constructor(x: number, y: number, context: CanvasRenderingContext2D) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * -2 - 1;
        this.opacity = 1;
        this.shrink = 0.03;
        this.context = context;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size = Math.max(this.size - this.shrink, 0);
        this.opacity -= 0.02;
        if (this.size <= 0 || this.opacity <= 0) {
          const index = splashParticlesArray.indexOf(this);
          if (index > -1) {
            splashParticlesArray.splice(index, 1);
          }
        }
      }

      draw() {
        this.context.fillStyle = `rgba(240, 246, 240, ${this.opacity})`;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.context.fill();
      }
    }

    // Crear gotas de lluvia iniciales
    function initRain() {
      for (let i = 0; i < 100; i++) {
        rainDropsArray.push(new RainDrop(canvas, context));
      }
    }

    // Animación de la lluvia y las partículas de salpicadura
    function animateRain() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      rainDropsArray.forEach((drop) => {
        drop.update();
        drop.draw();
      });

      splashParticlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animateRain);
    }

    // Inicializar y animar la lluvia
    initRain();
    animateRain();

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.rain}/>;
};

export default Rain;
