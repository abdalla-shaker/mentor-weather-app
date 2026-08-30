export const formatDate = (currentDate) => {
  const date = new Date(currentDate);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const smallFormat = (currentDate) => {
  const date = new Date(currentDate);

  return date.toLocaleDateString("en-US", {
    weekday: "short",
  });
};

export const formatTime = (currentTime) => {
  const [hour, min] = currentTime.split("T")[1].split(":");
  const date = new Date();

  date.setHours(parseInt(hour), parseInt(min));

  return date.toLocaleDateString("en-US", {
    hour: "numeric",
    hour12: "true",
  });
};
