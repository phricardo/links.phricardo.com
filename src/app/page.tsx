import React from "react";
import { links } from "./links";
import styles from "./page.module.css";

export default async function IndexPage() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/70300680"
          alt="profile picture"
        />
        <div className={styles.profile_info}>
          <h1>Pedro Ricardo</h1>
          <span>@phricardorj</span>
        </div>
      </div>

      <div className={styles.links}>
        {links.map((link, index) => (
          <a
            key={index}
            className={`${styles.linkBox} ${styles["hover-expand-effect"]}`}
            href={link.href}
            target="_self"
            rel="noopener"
          >
            {React.cloneElement(link.icon, {
              className: `${styles.icon}`,
            })}

            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
