namespace WsNote

open WebSharper
open WebSharper.UI.Next
open WebSharper.UI.Next.Html
 
[<JavaScript>]
module PostUI = 

    open UINextUtils

    [<AutoOpen>]
    module private ``private members`` =

        let on'edit post doc'edit doc = Doc'Map post.IsEditMode.View <| function
            | true -> doc'edit
            | _ -> doc

        let doc'date post = 
            Div[ Attr.Class "post-date-block" ] [   
                    txt "Created:"
                    txt post.CreateDate
                    txt "Changed:"
                    Doc.TextView post.EditDate.View]

        let doc'crud blog post =            
            on'edit post 
                (   Span0[
                        button0 "Apply" (fun () -> ClientBlogData.update'post blog post )
                        button0 "Cancel" (fun () -> post.IsEditMode.Value <- false ) ] )
                (   LoginUI.protect <| Span0[   
                        button0 "Delete"  (fun () -> ClientBlogData.delete'post blog post) 
                        button0 "Change" (fun () -> post.IsEditMode.Value <- true ) ] )

        let doc'header blog post = 
            Div[Attr.Class "panel-heading"][
                Div0[ Doc.TextView post.Title.View ]                 
                
                //txt "Num " 
                //Doc'Map post.Num.View <| fun n ->
                //    txt (string n)                        
                
            ]

        let doc'static'content blog (post : PostModel) = 
            Div0[
                P0[ txt post.Content.Value ]
                doc'date post 
                doc'crud blog post
                
            ]
//            Doc'Map post.Content.View <| fun content ->
//                let htmlElem = JQuery.JQuery.Of("<div class=\"panel-body\">" + content + "</div>").Get(0)
//                try
//                    Doc.Static (htmlElem :?> _) 
//                with _ -> txt content

    let doc blog post  =
        Div [Attr.Class "panel panel-primary"; Attr.Create "id" ( sprintf "post-%d-article" post.Id)][
            doc'header blog post
            on'edit post
                (Div0[  P0[ txt "Title";  Doc.Input [ Attr.Style "width" "100%" ]  post.EditedTitle ]
                        P0[ txt "Content";     doc'edit'content'input'area post.EditedContent]
                        
                ])
                (doc'static'content blog post)
            ]
        