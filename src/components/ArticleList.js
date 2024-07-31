import Article from "./Article";

const ArticleList = ({posts}) => {
    const articles = posts.map((artcl) => {
    return (<Article key={artcl.id} title={artcl.title} date={artcl.date} preview={artcl.preview} minutes={artcl.minutes}/>)})


    return ( 
        <>
        <main>
            {articles}
        </main>
        </>
     );
}
 
export default ArticleList;