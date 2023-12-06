export function getPriority({
  passedDays,
  frequency,
}: {
  passedDays: number;
  frequency: number;
}): "low" | "medium" | "high" {
  if (passedDays >= frequency) return "high";
  if (passedDays !== 0 && passedDays + 3 >= frequency) return "medium";
  return "low";
}
