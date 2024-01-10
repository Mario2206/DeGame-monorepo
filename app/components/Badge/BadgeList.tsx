import { NftBadge } from "../../util/types";
import { Badge } from "./Badge";
import styles from "./BadgeList.module.css"

export const BadgeList = ({ badges }: { badges: NftBadge[] }) => {
  return (
    <div className={styles.container}>
      {badges.length === 0 && <p className={styles.noBadges}>No badges yet</p>}
      {badges.map((badge, index) => (
        <Badge key={index} badge={badge} />
      ))}
    </div>
  );
}