import Home from "@/component/dashboard/Home/home";
import Navbar from "@/component/dashboard/navbar";
import Sidebar from "@/component/dashboard/sidebar";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 mt-20 bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-100 ml-64 md:ml-0">
          <Home />
        </main>
      </div>
    </div>
  );
}
