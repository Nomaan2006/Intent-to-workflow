export async function runSearch(step) {
  const query = step.description || "general search";

  // Simulated search results
  const results = [
    { name: "Local Shop A", distance: "500m", rating: 4.2 },
    { name: "Budget Store B", distance: "1km", rating: 4.0 },
    { name: "Cheap Mart C", distance: "700m", rating: 3.9 }
  ];

  return {
    type: "search",
    query,
    results
  };
}
