export default function VisitPage({link , heading}){
    return(
        <div className="flex flex-col items-center justify-center py-12">
            <h1 className="font-semibold text-4xl">{heading}</h1>
            <a className="py-3 underline underline-offset-2 text-blue-500" href="/">{link}</a>
        </div>
    )
}