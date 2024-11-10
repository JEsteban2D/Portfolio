import React, { useEffect, useRef, useState } from "react";
import myImage from "./../../assets/images/anguila2.png";
import { Lightning } from "./../../utils/lightning";
import styles from "./Thunder.module.css";

const Thunder: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);

  const lightnings = useRef<Set<Lightning>>(new Set());
  const req = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const backgroundImage = new Image();
    backgroundImage.src = myImage;

    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, canvasWidth, canvasHeight);
    };

    // Definir los targets en un orden específico (puedes cambiar el orden aquí)
    const targets = [
      document.querySelector(".target1"),
      document.querySelector(".target2"),
      document.querySelector(".target3"),
      document.querySelector(".target4"),
    ].filter((target) => target !== null) as HTMLElement[];

    // Función para crear rayos en un orden específico
    const createLightningBetweenTargets = () => {
      if (targets.length === 0) return;

      const currentTarget = targets[currentTargetIndex];
      const nextTarget = targets[(currentTargetIndex + 1) % targets.length];

      const currentRect = currentTarget.getBoundingClientRect();
      const nextRect = nextTarget.getBoundingClientRect();

      const startX = currentRect.left + currentRect.width / 2 - canvas.getBoundingClientRect().left;
      const startY = currentRect.top + currentRect.height / 2 - canvas.getBoundingClientRect().top;
      const endX = nextRect.left + nextRect.width / 2 - canvas.getBoundingClientRect().left;
      const endY = nextRect.top + nextRect.height / 2 - canvas.getBoundingClientRect().top;

      const lightning = Lightning.createNewLightning(startX, startY, endX, endY);
      lightnings.current.add(lightning);

      setCurrentTargetIndex((prevIndex) => (prevIndex + 1) % targets.length);
    };

    // Animación de los rayos
    const animate = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(backgroundImage, 0, 0, canvasWidth, canvasHeight);

      lightnings.current.forEach((lightning) => {
        if (lightning.ttl === 0) {
          lightnings.current.delete(lightning);
        } else {
          lightning.update(ctx);
        }
      });

      req.current = requestAnimationFrame(animate);
    };

    // Intervalo de creación de rayos
    const lightningInterval = setInterval(createLightningBetweenTargets, 1000);

    animate();

    return () => {
      clearInterval(lightningInterval);
      if (req.current) cancelAnimationFrame(req.current);
    };
  }, [currentTargetIndex]);

  return (
    <div className={styles.canvaContainer}>
      <canvas ref={canvasRef} id="thunder" className={styles.canva}></canvas>
      <div className={`${styles.targetOne} target1`} ></div>
      <div className={`${styles.targetTwo} target2`} ></div>
      <div className={`${styles.targetTree} target3`} ></div>
      <div className={`${styles.targetFor} target4`} ></div>
    </div>
  );
};

export default Thunder;