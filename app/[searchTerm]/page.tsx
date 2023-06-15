import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";
import Search from "../components/Search";


type Props = {
    params: {
        searchTerm: string
    }
}


export async function generateMetadata({ params: { searchTerm } }: Props) {

    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}


export default async function SearchResults({ params: { searchTerm } }: Props) {

    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await wikiData;
    const results: Result[] | undefined = data?.query?.pages;

    const content = (
        <main className={` mx-auto max-w-lg py-1 min-h-screen ${!results && "my-4"}`} >
            {
                results
                    ? Object.values(results).map((result) => {
                        return <Item key={result.pageid} result={result} />
                    })
                    : <h2 className="p-2 text-xl text-stone-100" >{`We cound\`t find anything that matches: `}<span className="italic text-emerald-300 underline" >{searchTerm}</span></h2>
            }
        </main>
    )

    // return content;

    return (
        <>

            {
                results && <p className="p-4 text-stone-100 text-center mx-auto text-xl my-6" >{`Displaying results for: `} <span className="italic text-emerald-300 underline">{searchTerm.replaceAll('%20', ' ')}</span></p>
            }

            {content}

        </>
    )
}