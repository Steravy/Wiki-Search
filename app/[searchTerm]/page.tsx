import getWikiResults from "@/lib/getWikiResults"

type Props = {
    params: {
        searchTerm: string
    }
}

export default async function SearchResult({ params: { searchTerm } }: Props) {

    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await wikiData;

    return (
        
        <div>page</div>
    )
}
