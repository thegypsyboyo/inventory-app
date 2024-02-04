import { ProfileForm } from "@/components/CreateInventory";

export default function Home() {
    return (
        <main className="py-10">
            <h2 className="text-center font-extrabold text-[33px] leading-[45px] ">Create Your Inventory</h2>
            <ProfileForm/>
        </main>
    );
}
