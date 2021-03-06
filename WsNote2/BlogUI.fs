﻿// main UI module
// var' -  UI Next reactive variables
// v' - UI Next virtual views
// b' - UI Next virtual element, derived from model



namespace WsNote

//open WebSharper
//open WebSharper.UI.Next
//open WebSharper.UI.Next.Html


open WebSharper
open WebSharper.JavaScript
open WebSharper.JQuery
open WebSharper.UI.Next
open WebSharper.UI.Next.Html


[<JavaScript>]
module BlogUI = 

    open UINextUtils

    type NavPage = 
        {   PageNum : int
            PageLen : int
            TotlalLen : int }
    
    

    [<AutoOpen>]
    module private ``web application client side core`` =

        // entering page number
        let var'page'number = Var.Create "0"

        // entering stories per page count
        let var'posts'count = Var.Create "10"

        // Search context
        let var'context = Var.Create ""

        let var'is'settings'visible = Var.Create false


        let b'nav nav =
            let lastPageIndex = 
                (nav.TotlalLen / nav.PageLen) -
                (if nav.TotlalLen % nav.PageLen = 0 then 1 else 0)
            
            let n0 = max (nav.PageNum - 4) 0
            let n1 = min (n0 + 8) lastPageIndex
            let n0 = max (n1 - 8) 0

            let page'link n = 
                let is'current = n=nav.PageNum
                let s = 
                    if n=0 then sprintf "Page %d" (n+1) //"Items" 
                    elif n=lastPageIndex then sprintf "End %d" (n+1)  else 
                    sprintf "Page %d" (n+1)
                LI0[ Doc.Button s [ if is'current then yield Attr.Class "current-page-button"] <| fun () ->
                    let s = n.ToString()
                    if var'page'number.Value<> s then
                        var'page'number.Value <- n.ToString() ]
            
            [   for n in n0..n1 -> 
                    if n=n0 && n0<>0 then 0
                    elif n=n1 && n1<>lastPageIndex then lastPageIndex
                    else n ]
            |> List.map page'link
        
        let hide _ = var'is'settings'visible.Value <- false

        let doc'settings = 
            Div[Attr.Class "b-popup"] [ 
                Div [Attr.Class "b-popup-content"; Attr.Handler "blur" hide ][   
                    Table0[   
                        TR0[
                            TD0[txt "Stories count on one page"]
                            TD0[input0 var'posts'count] ]
                        TR0[
                            TD[Attr.Create "colspan" "2"; Attr.Style "text-align" "right" ][ 
                                Doc.Button "Close" [] hide ] ] ] ] ] 

        let v'blog = 
            View.Do{
                let! page'number =      
                    (var'str'to'int 0).View <*> var'page'number.View
                let! page'posts'count = 
                    (var'str'to'int 10).View <*> var'posts'count.View
                let! context = var'context.View
                return page'number, page'posts'count, context }

            |> View.MapAsync ( fun (page'number, posts'count, context) -> async{
                let! blog =  ClientBlogData.read'page page'number posts'count context 
                return blog, {PageNum = page'number; PageLen = posts'count; TotlalLen = blog.TotalCount.Value}
                }  )

        let doc'nav'left nav =
                Div [Attr.Class "navbar-collapse collapse"][
                    UL [Attr.Class "nav navbar-nav sm"][ 
                                 
                        yield LI0 [ LoginUI.is'logged'in NewPostUI.button Doc.Empty ]
                    ]
                ]


        let doc'nav'right nav =
            UL [Attr.Class "nav navbar-nav sm sm-collapsible"][ 
                yield LI0[ Doc.Button "Settings" [Attr.Class "mainsettingsbtn"] <| fun () -> var'is'settings'visible.Value <- true ]
                yield LI0[ LoginUI.button ]
            ]


    // web site entering point
    let main() =

        let attr'my1 =  Attr.Create "placeholder" "Search"
        let attr'my2 = Attr.Class "mainsearch"
        let attrs = Seq.append [| attr'my1|] [ attr'my2]
        
        //LoginUI.login()
        
        // stories page
        Div[Attr.Class "container"][
            LoginUI.zor |> Doc.EmbedView 
            Div [Attr.Class "navbar navbar-default navbar-fixed-top"][
                Div [Attr.Class "navbar-header"][
                    v'blog 
                    |> View.Map( fun (blog,nav) -> Nav0[ doc'nav'left nav ] )
                    |> Doc.EmbedView
                ]
                Div [Attr.Class "navbar-collapse collapse"][
                    Div [Attr.Class "navbar-collapse collapse"][
                        Div [Attr.Class "pull-right"][
                            Div [Attr.Class "nav"][
                                UL[Attr.Class "nav navbar-nav sm sm-collapsible"][
                                    LI0[
                                        Doc.Input attrs var'context                                   
                                    ]
                                ]


                                var'context.View |> View.Map (fun x -> 
                                    var'page'number.Value <- "0"
                                    Doc.Empty)
                                |> Doc.EmbedView

                                v'blog 
                                |> View.Map( fun (blog,nav) -> doc'nav'right nav )
                                |> Doc.EmbedView
                
                                Doc'Map var'is'settings'visible.View <| function 
                                    | true -> doc'settings 
                                    | _ -> Doc.Empty
                            ]
                        ]
                    ]
                ]
            ]
            |> NewPostUI.on Doc.Empty


            v'blog  
            |> View.Map ( fun (blog,_) ->
                let docBlog = 
                    ListModel.View blog.Posts 
                    |> Doc.ConvertBy (fun m -> m.Id) (PostUI.doc blog )                
                
//                NewPostUI.on 
//                    ( NewPostUI.doc blog)
//                    ( UL[Attr.Class "ul-top-blog"] [docBlog] )

                ChangePostUI.on 
                    ( ChangePostUI.doc blog)
                    ( UL[Attr.Class "ul-top-blog"] [docBlog] )

                
            ) 
            |> Doc.EmbedView  
        ]
             
        |> LoginUI.on'visible LoginUI.doc'logining 
        

   
          
        