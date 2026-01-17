const filteredData = registrations
  .filter(r => r.name.toLowerCase().includes(search))
  .filter(r => filter === "All" || r.session === filter);

const paginated = filteredData.slice(
  (page - 1) * 5,
  page * 5
);
