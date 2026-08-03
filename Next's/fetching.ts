fetch("https://api.example.com/stocksprice", { cache: "no-store"});
fetch("https://api.example.com/posts", { next: { revalidate: 300}});
export default async function DashboardPage() {
    const [users, orders] = await Promise.all([
        getUsers(), getOrders() ]);
    return (
  <div>
<h2> Users: {users.length}</h2>
<h2>Orders: {orders.length}</h2> </div> ); }