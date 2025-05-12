function renderStars(rating) {
  const stars = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);
  return stars + empty;
}

export { renderStars };
