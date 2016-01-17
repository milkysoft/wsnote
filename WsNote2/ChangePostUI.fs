namespace WsNote

open WebSharper
open WebSharper.UI.Next
open WebSharper.UI.Next.Html

[<JavaScript>]
module ChangePostUI = 
    
    open UINextUtils

    [<AutoOpen>]
    module private ``private members`` =

        let var'title = Var.Create ""
        let var'content = Var.Create ""
        // changing existing story
        let var'is'chanaging = Var.Create false

        let reset() = 
            var'title.Value <- ""
            var'content.Value <- ""
            var'is'chanaging.Value <- false

    
    let button =  button0 "Save" <| fun () -> var'is'chanaging.Value <- true
    let on = doc'on'off var'is'chanaging

    let doc blog =             
        Div0[  
            H10 [txt "Change Story"]
            P0[ txt "Story title";  Doc.Input [ Attr.Style "width" "100%" ]  var'title ]
            P0[ txt "Story content";     doc'edit'content'input'area var'content] 
            P0[ button0 "Save" (fun () -> 
                    //let post = PostModel
                    //ClientBlogData.update'post (blog var'title.Value var'content.Value                     
                    reset() )
                button0 "Cancel" reset ] ] 
            
    

