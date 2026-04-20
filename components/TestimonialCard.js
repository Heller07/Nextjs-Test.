"use client";
import styles from "./TestimonialCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SunMedium, Atom } from "lucide-react";
import { faAmazon, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function TestimonialCard({ item, isActive, onHover }) {
  const renderLogo = () => {
    switch (item.company) {
      case "Netflix":
        return <div className={styles.netflixLogo}>NETFLIX</div>;
      case "Cosmic":
        return (
          <div className={styles.inlineLogo}>
            <Atom className={styles.cosmicIcon} />
            <span>cosmic</span>
          </div>
        );
      case "Amazon":
        return (
          <div className={styles.inlineLogo}>
            <FontAwesomeIcon icon={faAmazon} />
            <span>amazon</span>
          </div>
        );
      case "Loom":
        return (
          <div className={styles.inlineLogo}>
            <SunMedium className={styles.loomIcon} />
            <span>loom</span>
          </div>
        );
      case "Google":
        return (
          <div className={styles.inlineLogo}>
            <FontAwesomeIcon icon={faGoogle} />
            <span>Google</span>
          </div>
        );
      default:
        return <div className={styles.inlineLogo}>{item.logo}</div>;
    }
  };

  return (
    <div
      onMouseEnter={onHover}
      className={`${styles.card} ${isActive ? styles.active : ""}`}
    >
      {/* 1. Logo Section */}
      <div className={styles.topSection}>
        <div className={styles.logo}>{renderLogo()}</div>
      </div>

      {/* 2. Content Section (Growth Area) */}
      <div className={styles.contentArea}>
        {isActive && item.quote && (
          <div className={styles.content}>
            <p>{item.quote}</p>
          </div>
        )}
      </div>

      {/* 3. Footer Section (Pinned to bottom via margin-top: auto) */}
      <div className={styles.bottom}>
        <div className={styles.company}>
          <h3>{item.company}</h3>
          {!isActive && <p className={styles.role}>{item.role}</p>}
        </div>

        {isActive && item.author && (
          <div className={styles.author}>
            <h4>{item.author}</h4>
            <span>{item.role}</span>
          </div>
        )}
      </div>

      {/* 4. Decorative Gradients */}
      {isActive && <div className={styles.gradientBar} />}
    </div>
  );
}