import AuthButton from "@/components/AuthButton";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function AdminPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    return (
        <main className='min-h-screen py-24 px-4'>
            <div className='max-w-3xl mx-auto'>
                <h1 className="text-3xl font-semibold mb-5">Admin Panel</h1>
                {!session || session.user.role != "ADMIN" ? (
                    <div>
                        <AuthButton callbackURL="/admin" />
                    </div>
                ) : (
                    <>
                        <Button>Create Blog</Button>
                    </>
                )}

            </div>
        </main>
    )
}

export default AdminPage
