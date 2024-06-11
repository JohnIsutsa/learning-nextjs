import { TGroup } from "@/types/Group";

export const getGroups = async (): Promise<TGroup[]> => {
    const response = await fetch("https://nere-server.herokuapp.com/api/groups")
    const { status, data } = await response.json()
    // console.log(data.groups)
    await new Promise((resolve) => setTimeout(resolve, 7000));
    return data.groups
    // return response.json()
}
