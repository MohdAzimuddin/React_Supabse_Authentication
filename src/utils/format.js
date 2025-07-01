// Date formatter

export const formatDate = (value) => {
  if (!value) return "_";
  const date =
    typeof value === "number" ? new Date(value * 1000) : new Date(value);

  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

// long text formatter

export const shortText = (text) => {
  if (!text) return "";
  const max = 30;
  if (text.length > max) {
    return text.slice(0, max) + "....";
  }

  return text;
};
