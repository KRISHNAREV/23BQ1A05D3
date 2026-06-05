const priority = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getTopNotifications(notifications, n = 10) {
  return [...notifications]
    .sort((a, b) => {
      if (priority[a.Type] !== priority[b.Type]) {
        return priority[b.Type] - priority[a.Type];
      }
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, n);
}