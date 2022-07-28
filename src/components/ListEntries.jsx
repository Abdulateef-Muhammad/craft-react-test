import { useQuery, gql } from "@apollo/client";
import Entry from "./Entry";

const GET_ENTRIES = gql`
    query {
       entries(section: "work") {
        title
        url
       }
    }
`;
const ListEntries = () => {
    const { loading, error, data } = useQuery(GET_ENTRIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return (
        <ul>
            {
                data.entries.map((entry, index) => {
                    return (
                        <Entry entry={{content: entry.title, url: entry.url}} key={index} />
                    )

                })
            }

        </ul>
    )
}

export default ListEntries;