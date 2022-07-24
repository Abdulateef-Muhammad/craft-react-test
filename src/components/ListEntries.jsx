import { useQuery, gql } from "@apollo/client";
import Entry from "./Entry";

const GET_ENTRIES = gql`
    query {
       entries {
        title
       }
    }
`;
const ListEntries = () => {
    const { loading, error, data } = useQuery(GET_ENTRIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data)
    return (
        <ul>
            {
                data.entries.map((entry, index) => {
                    return (
                        <Entry entry={entry.title} key={index} />
                    )

                })
            }

        </ul>
    )
}

export default ListEntries;