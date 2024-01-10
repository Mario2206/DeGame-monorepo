export function getTimeAgo(timestamp: number) {
  const now = Math.floor(Date.now() / 1000); // Timestamp actuel en secondes
  const timeDiff = now - timestamp; // Différence entre le timestamp actuel et le timestamp fourni

  if (timeDiff < 60) {
    return `< 1 minute ago`;
  } else if (timeDiff < 3600) {
    const minutesAgo = Math.floor(timeDiff / 60);
    return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  } else if (timeDiff < 86400) {
    const hoursAgo = Math.floor(timeDiff / 3600);
    return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  } else {
    const daysAgo = Math.floor(timeDiff / 86400);
    return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  }
}
