import { getGroups } from "@/actions/getGroups"
import { getCustomerById } from "@/actions/getProducts"

export default async function Groups() {
    const groups = await getGroups()
    // const customer = await getCustomerById(1)
    // console.log(groups.slice(0, 6))

    return (
        <div>
            <h1>Groups</h1>
            <div>
                {groups.length}
                {groups.slice(0, 6).map((group) => (
                    <div key={group.id}>
                        <h1>{group.join_code}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}