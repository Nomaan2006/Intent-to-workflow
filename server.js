async function send() {
  const input = document.getElementById("input").value;

  const res = await fetch("http://localhost:5000/api/workflow", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ input }),
  });

  const data = await res.json();
  document.getElementById("output").innerText =
    JSON.stringify(data, null, 2);
}
