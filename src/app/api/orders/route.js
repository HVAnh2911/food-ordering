export async function GET(req) {
  const a = [
    {
      _id: "1",
      name: "a",
      paid: "paid",
      createdAt: "1-2-2024",
      cartProducts: [],
    },
    {
      _id: "2",
      name: "b",
      paid: "paid",
      createdAt: "3-2-2024",
      cartProducts: [],
    },
  ];
  return Response.json(a);
}
