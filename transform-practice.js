function formatSeatData(data) {
  const seatsByRoom = {};
  data.map(ticket => {
    const { room, table, seat } = ticket;

    if (!seatsByRoom[room]) {
      seatsByRoom[room] = {};
    }

    if (!seatsByRoom[room][table]) {
      seatsByRoom[room][table] = [];
    }
    seatsByRoom[room][table].push(seat);
  });

  const formattedSeats = [];

  Object.keys(seatsByRoom).map(rooms =>
    Object.keys(rooms)
      .map(seats => seatsByRoom[rooms])
      .map(tables => {
        for (let [table, seats] of Object.entries(tables)) {
          formattedSeats.push(
            `Room ${rooms}, Table ${table}, ${
              seats.length > 1 ? "Seats" : "Seat"
            } ${seats.join(", ")}`
          );
        }
      })
  );

  return formattedSeats;
}

const data = [
  { room: "A", table: "B", seat: 2 },
  { room: "A", table: "B", seat: 6 },
  { room: "A", table: "B", seat: 10 },
  { room: "B", table: "B", seat: 2 },
  { room: "B", table: "C", seat: 3 }
];

console.log(formatSeatData(data));
// Output should be formatted as:
// ['room A, Table B, Seats, 2, 6, 10',
// 'room B, Table B, Seat 2',
//  'room B', Table B, Seat 3']
