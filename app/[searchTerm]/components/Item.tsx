import Link from 'next/link'

type Props = {
    result: Result
}

export default function Item({ result }: Props) {
    
    const itemTextCol = (
        <div className="flex flex-col justify-center ">
            <h2 className='mb-1' >
                <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank"
                    className="text-xl font-bold underline">
                    {result.title}
                </Link>
            </h2>
            <p>{result.extract}</p>
        </div>
    )

    const content = result?.thumbnail?.source
        ? (
            <article className="bg-slate-200 p-4 my-4 max-w-lg rounded-lg ">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col justify-center">
                        <img
                            src={result.thumbnail.source}
                            alt={result.title}
                            width={result.thumbnail.width}
                            height={result.thumbnail.height}
                            loading="lazy"
                        />
                    </div>
                    {itemTextCol}
                </div>
            </article>

        )
        : (
            <article className="my-4 p-4 max-w-lg bg-slate-200 rounded-lg ">
                {itemTextCol}
            </article>
        )

    return content
}