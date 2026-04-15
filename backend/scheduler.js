export async function runScheduler(step) {
  // Simple static schedule (can be made dynamic later)
  const schedule = [
    { time: "9:00 - 10:30", task: "Study Subject 1" },
    { time: "10:30 - 11:00", task: "Break" },
    { time: "11:00 - 1:00", task: "Study Subject 2" },
    { time: "1:00 - 2:00", task: "Lunch Break" },
    { time: "2:00 - 4:00", task: "Revision + Practice" }
  ];

  return {
    type: "schedule",
    plan: schedule
  };
}
