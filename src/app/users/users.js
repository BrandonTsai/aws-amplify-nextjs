import Link from 'next/link'
// import { getUsers } from '@/lib/prisma/users'

const Users = async ({ users }) => {
    // const { users } = await getUsers()
    console.log(users)
    return (
        <section className='bg-rose-900'>
            <div className='container py-4'>
                <h2 className='mb-4 pb-3 text-xl border-b border-stone-500 font-medium text-white'>
                    Users
                </h2>
                <ul className='flex flex-col text-sm text-white list-none gap-1 list-inside'>
                    {users?.map(user => (
                        <li key={user.id} className='text-base'>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Users