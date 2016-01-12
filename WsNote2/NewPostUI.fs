namespace WsNote

open WebSharper
open WebSharper.UI.Next
open WebSharper.UI.Next.Html

[<JavaScript>]
module NewPostUI = 
    
    open UINextUtils

    [<AutoOpen>]
    module private ``private members`` =

        let var'title = Var.Create ""
        let var'content = Var.Create ""
        // creating new story
        let var'is'creating = Var.Create false

        let reset() = 
            var'title.Value <- ""
            var'content.Value <- ""
            var'is'creating.Value <- false

    let button =  button0 "Create story" <| fun () -> var'is'creating.Value <- true
    let on = doc'on'off var'is'creating

    let doc blog =             
        Div0[  
            H10 [txt "New Story"]
            P0[ txt "Story title";  Doc.Input [ Attr.Style "width" "100%" ]  var'title ]
            P0[ txt "Story content";     doc'edit'content'input'area var'content] 
            P0[ button0 "Create" (fun () -> 
                    ClientBlogData.add'post blog var'title.Value var'content.Value                     
                    reset() )
                button0 "Cancel" reset ] ] 
            
    

