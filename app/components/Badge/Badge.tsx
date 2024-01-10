import { NftBadge } from "../../util/types";
import styles from "./Badge.module.css"

export const Badge = ({ badge }: { badge: NftBadge }) => {
  
  return (
    <div className={styles.container}>
      <span className={styles.color} style={{background: badge.color}}></span>
      <div className={styles.label}>{badge.name}</div>
    </div>
  );
}