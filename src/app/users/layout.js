
import Users from './users'

// export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getData() {
    const response = await fetch('http://127.0.0.1:3000/api/users')
    const resData = await response.json()
    return resData.users // Return the array variable "usersArray" from the result of the API call
}

const UsersLayout = async ({ children }) => {
    const users = await getData()

    return (
        <section className='flex'>
            <aside className='w-1/3 lg:w-1/4'>
                <Users users={users} />
            </aside>
            <main>{children}</main>
        </section>
    )
}

export default UsersLayout
