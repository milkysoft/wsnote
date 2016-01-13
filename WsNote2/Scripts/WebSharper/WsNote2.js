(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,UI,Next,Attr,Seq,List,Html,Doc,View,WsNote,BlogUI,_web_application_client_side_core,UINextUtils,NewPostUI,PostUI,ListModel1,LoginUI,Operators,String,T,Concurrency,ClientBlogData,Var,_______________________________________________________________________,Control,MailboxProcessor,Remoting,AjaxRemotingProvider,Collections,ResizeArray,ResizeArrayProxy,ListModel,Number,ClientUtils,_private_members,window,PrintfHelpers,console,_private_members1,_private_members2,jQuery,View1;
 Runtime.Define(Global,{
  WsNote:{
   BlogUI:{
    main:function()
    {
     var _attr_my1,_attr_my2,attrs,x,x1,f;
     _attr_my1=Attr.Create("placeholder","Search");
     _attr_my2=Attr.Class("mainsearch");
     attrs=Seq.append([_attr_my1],List.ofArray([_attr_my2]));
     f=function(_arg1)
     {
      return _arg1?_web_application_client_side_core["doc'settings"]():Doc.get_Empty();
     };
     x1=Html.Div(List.ofArray([Attr.Class("navbar navbar-default navbar-fixed-top")]),List.ofArray([Html.Div(List.ofArray([Attr.Class("navbar-header")]),List.ofArray([Doc.EmbedView(View.Map(function(tupledArg)
     {
      return Html.Nav0(List.ofArray([_web_application_client_side_core["doc'nav'left"](tupledArg[1])]));
     },_web_application_client_side_core["v'blog"]()))])),Html.Div(List.ofArray([Attr.Class("navbar-collapse collapse")]),List.ofArray([Html.Div(List.ofArray([Attr.Class("navbar-collapse collapse")]),List.ofArray([Html.Div(List.ofArray([Attr.Class("pull-right")]),List.ofArray([Html.Div(List.ofArray([Attr.Class("nav")]),List.ofArray([Html.UL(List.ofArray([Attr.Class("nav navbar-nav sm sm-collapsible")]),List.ofArray([Html.LI0(List.ofArray([Doc.Input(attrs,_web_application_client_side_core["var'context"]())]))])),Doc.EmbedView(View.Map(function()
     {
      _web_application_client_side_core["var'page'number"]().set_Value("0");
      return Doc.get_Empty();
     },_web_application_client_side_core["var'context"]().get_View())),Doc.EmbedView(View.Map(function(tupledArg)
     {
      return _web_application_client_side_core["doc'nav'right"](tupledArg[1]);
     },_web_application_client_side_core["v'blog"]())),UINextUtils["Doc'Map"](_web_application_client_side_core["var'is'settings'visible"]().get_View(),f)]))]))]))]))]));
     x=Html.Div(List.ofArray([Attr.Class("container")]),List.ofArray([((NewPostUI.on())(Doc.get_Empty()))(x1),Doc.EmbedView(View.Map(function(tupledArg)
     {
      var blog,docBlog;
      blog=tupledArg[0];
      docBlog=Doc.ConvertBy(function(m)
      {
       return m.Id;
      },function(post)
      {
       return PostUI.doc(blog,post);
      },ListModel1.View(blog.Posts));
      return((NewPostUI.on())(NewPostUI.doc(blog)))(Html.UL(List.ofArray([Attr.Class("ul-top-blog")]),List.ofArray([docBlog])));
     },_web_application_client_side_core["v'blog"]()))]));
     return((LoginUI["on'visible"]())(LoginUI["doc'logining"]()))(x);
    },
    "web application client side core":{
     "b'nav":function(nav)
     {
      var lastPageIndex,n0,n1,n01,_page_link,list;
      lastPageIndex=(nav.TotlalLen/nav.PageLen>>0)-(nav.TotlalLen%nav.PageLen===0?1:0);
      n0=Operators.Max(nav.PageNum-4,0);
      n1=Operators.Min(n0+8,lastPageIndex);
      n01=Operators.Max(n1-8,0);
      _page_link=function(n)
      {
       var _is_current,s,arg10,arg20;
       _is_current=n===nav.PageNum;
       s=n===0?"Page "+Global.String(n+1):n===lastPageIndex?"End "+Global.String(n+1):"Page "+Global.String(n+1);
       arg10=Seq.toList(Seq.delay(function()
       {
        return _is_current?[Attr.Class("current-page-button")]:Seq.empty();
       }));
       arg20=function()
       {
        var s1;
        s1=String(n);
        return _web_application_client_side_core["var'page'number"]().get_Value()!==s1?_web_application_client_side_core["var'page'number"]().set_Value(String(n)):null;
       };
       return Html.LI0(List.ofArray([Doc.Button(s,arg10,arg20)]));
      };
      list=Seq.toList(Seq.delay(function()
      {
       return Seq.map(function(n)
       {
        return(n===n01?n01!==0:false)?0:(n===n1?n1!==lastPageIndex:false)?lastPageIndex:n;
       },Operators.range(n01,n1));
      }));
      return List.map(_page_link,list);
     },
     "doc'nav'left":function()
     {
      return Html.Div(List.ofArray([Attr.Class("navbar-collapse collapse")]),List.ofArray([Html.UL(List.ofArray([Attr.Class("nav navbar-nav sm")]),Seq.toList(Seq.delay(function()
      {
       return[Html.LI0(List.ofArray([((LoginUI["is'logged'in"]())(NewPostUI.button()))(Doc.get_Empty())]))];
      })))]));
     },
     "doc'nav'right":function()
     {
      return Html.UL(List.ofArray([Attr.Class("nav navbar-nav sm sm-collapsible")]),Seq.toList(Seq.delay(function()
      {
       var arg10,arg20;
       arg10=List.ofArray([Attr.Class("mainsettingsbtn")]);
       arg20=function()
       {
        return _web_application_client_side_core["var'is'settings'visible"]().set_Value(true);
       };
       return Seq.append([Html.LI0(List.ofArray([Doc.Button("Settings",arg10,arg20)]))],Seq.delay(function()
       {
        return[Html.LI0(List.ofArray([LoginUI.button()]))];
       }));
      })));
     },
     "doc'settings":Runtime.Field(function()
     {
      var arg10,arg101,arg20;
      arg10=function(_arg00_)
      {
       return _web_application_client_side_core.hide(_arg00_);
      };
      arg101=Runtime.New(T,{
       $:0
      });
      arg20=function(_arg00_)
      {
       return _web_application_client_side_core.hide(_arg00_);
      };
      return Html.Div(List.ofArray([Attr.Class("b-popup")]),List.ofArray([Html.Div(List.ofArray([Attr.Class("b-popup-content"),Attr.Handler("blur",arg10)]),List.ofArray([Html.Table0(List.ofArray([Html.TR0(List.ofArray([Html.TD0(List.ofArray([UINextUtils.txt("Stories count on one page")])),Html.TD0(List.ofArray([(UINextUtils.input0())(_web_application_client_side_core["var'posts'count"]())]))])),Html.TR0(List.ofArray([Html.TD(List.ofArray([Attr.Create("colspan","2"),Attr.Style("text-align","right")]),List.ofArray([Doc.Button("Close",arg101,arg20)]))]))]))]))]));
     }),
     hide:function()
     {
      return _web_application_client_side_core["var'is'settings'visible"]().set_Value(false);
     },
     "v'blog":Runtime.Field(function()
     {
      var _builder_,x,arg00;
      _builder_=View.get_Do();
      x=_builder_.Bind(UINextUtils.op_LessMultiplyGreater(UINextUtils["var'str'to'int"](0).get_View(),_web_application_client_side_core["var'page'number"]().get_View()),function(_arg1)
      {
       return _builder_.Bind(UINextUtils.op_LessMultiplyGreater(UINextUtils["var'str'to'int"](10).get_View(),_web_application_client_side_core["var'posts'count"]().get_View()),function(_arg2)
       {
        return _builder_.Bind(_web_application_client_side_core["var'context"]().get_View(),function(_arg3)
        {
         return _builder_.Return([_arg1,_arg2,_arg3]);
        });
       });
      });
      arg00=function(tupledArg)
      {
       var _page_number,_posts_count,context;
       _page_number=tupledArg[0];
       _posts_count=tupledArg[1];
       context=tupledArg[2];
       return Concurrency.Delay(function()
       {
        return Concurrency.Bind(ClientBlogData["read'page"](_page_number,_posts_count,context),function(_arg4)
        {
         return Concurrency.Return([_arg4,{
          PageNum:_page_number,
          PageLen:_posts_count,
          TotlalLen:_arg4.TotalCount.get_Value()
         }]);
        });
       });
      };
      return View.MapAsync(arg00,x);
     }),
     "var'context":Runtime.Field(function()
     {
      return Var.Create("");
     }),
     "var'is'settings'visible":Runtime.Field(function()
     {
      return Var.Create(false);
     }),
     "var'page'number":Runtime.Field(function()
     {
      return Var.Create("0");
     }),
     "var'posts'count":Runtime.Field(function()
     {
      return Var.Create("10");
     })
    }
   },
   ClientBlogData:{
    "add'post":function(blog,title,content)
    {
     var tupledArg,arg0,arg1,arg2,arg00,_this;
     tupledArg=[blog,title,content];
     arg0=tupledArg[0];
     arg1=tupledArg[1];
     arg2=tupledArg[2];
     arg00={
      $:3,
      $0:arg0,
      $1:arg1,
      $2:arg2
     };
     _this=_______________________________________________________________________.crud();
     _this.mailbox.AddLast(arg00);
     return _this.resume();
    },
    "delete'post":function(blog,post)
    {
     var tupledArg,arg0,arg1,arg00,_this;
     tupledArg=[blog,post.Id];
     arg0=tupledArg[0];
     arg1=tupledArg[1];
     arg00={
      $:2,
      $0:arg0,
      $1:arg1
     };
     _this=_______________________________________________________________________.crud();
     _this.mailbox.AddLast(arg00);
     return _this.resume();
    },
    "read'page":function(_page_number,_posts_count,context)
    {
     return _______________________________________________________________________.crud().PostAndAsyncReply(function(reply)
     {
      return{
       $:0,
       $0:_page_number,
       $1:_posts_count,
       $2:context,
       $3:reply
      };
     },{
      $:0
     });
    },
    "update'post":function(post)
    {
     var arg00,_this;
     arg00={
      $:1,
      $0:post
     };
     _this=_______________________________________________________________________.crud();
     _this.mailbox.AddLast(arg00);
     return _this.resume();
    },
    "\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438 \u043d\u0430 \u0430\u0441\u043d\u043e\u0432\u0435 \u0430\u0433\u0435\u043d\u0442\u043e\u0432 \u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439":{
     "create'post":function(x)
     {
      return{
       Id:x.Id,
       Title:Var.Create(x.Title),
       Content:Var.Create(x.Content),
       CreateDate:x.CreateDate,
       EditDate:Var.Create(x.EditDate),
       Num:Var.Create(x.Num),
       EditedTitle:Var.Create(x.Title),
       EditedContent:Var.Create(x.Content),
       IsEditMode:Var.Create(false)
      };
     },
     crud:Runtime.Field(function()
     {
      return MailboxProcessor.Start(function(agent)
      {
       var loop;
       loop=function()
       {
        return Concurrency.Delay(function()
        {
         var x;
         x=agent.Receive({
          $:0
         });
         return Concurrency.Bind(x,function(_arg1)
         {
          var _,post,id,blog,title,content,blog1,x1,reply,_page_post_count,_page_number,context,x2;
          if(_arg1.$==1)
           {
            post=_arg1.$0;
            post.IsEditMode.set_Value(false);
            _=Concurrency.Bind(AjaxRemotingProvider.Async("WsNote2:2",[post.Id,post.EditedTitle.get_Value(),post.EditedContent.get_Value()]),function(_arg3)
            {
             post.Content.set_Value(_arg3.Content);
             post.Title.set_Value(_arg3.Title);
             post.EditDate.set_Value(_arg3.EditDate);
             return Concurrency.Return(null);
            });
           }
          else
           {
            if(_arg1.$==2)
             {
              id=_arg1.$1;
              blog=_arg1.$0;
              AjaxRemotingProvider.Send("WsNote2:1",[id]);
              blog.Posts.RemoveByKey(id);
              blog.TotalCount.set_Value(blog.TotalCount.get_Value()-1);
              _=Concurrency.Return(null);
             }
            else
             {
              if(_arg1.$==3)
               {
                title=_arg1.$1;
                content=_arg1.$2;
                blog1=_arg1.$0;
                x1=AjaxRemotingProvider.Async("WsNote2:0",[title,content]);
                _=Concurrency.Bind(x1,function(_arg4)
                {
                 var xs,arg00;
                 xs=ResizeArrayProxy.New2();
                 arg00=_______________________________________________________________________["create'post"](_arg4);
                 xs.Add(arg00);
                 blog1.Posts.Iter(function(arg001)
                 {
                  return xs.Add(arg001);
                 });
                 blog1.Posts.Clear();
                 blog1.Posts.Set(xs);
                 return Concurrency.Return(null);
                });
               }
              else
               {
                reply=_arg1.$3;
                _page_post_count=_arg1.$1;
                _page_number=_arg1.$0;
                context=_arg1.$2;
                x2=AjaxRemotingProvider.Async("WsNote2:3",[_page_number,_page_post_count,context]);
                _=Concurrency.Bind(x2,function(_arg2)
                {
                 var _total_count,posts,blog2,arg00,arg10;
                 _total_count=_arg2[0];
                 posts=_arg2[1];
                 arg00=function(item)
                 {
                  return item.Id;
                 };
                 arg10=List.map(function(x3)
                 {
                  return _______________________________________________________________________["create'post"](x3);
                 },posts);
                 blog2={
                  Posts:ListModel.Create(arg00,arg10),
                  TotalCount:Var.Create(_total_count)
                 };
                 reply(blog2);
                 return Concurrency.Return(null);
                });
               }
             }
           }
          return Concurrency.Combine(_,Concurrency.Delay(function()
          {
           return loop(null);
          }));
         });
        });
       };
       return loop(null);
      },{
       $:0
      });
     }),
     "update'post":function(m,x)
     {
      m.Title.set_Value(x.Title);
      m.Content.set_Value(x.Content);
      m.EditDate.set_Value(x.EditDate);
      return m.Num.set_Value(x.Num);
     }
    }
   },
   ClientUtils:{
    isNumber:function($n)
    {
     var $0=this,$this=this;
     return!Global.isNaN(Global.parseFloat($n))&&Global.isFinite($n);
    },
    "strToInt'or'zero":function($x)
    {
     var $0=this,$this=this;
     return Global.Math.abs(~(~$x));
    },
    "|Str'Int|_|":function(s)
    {
     var _,arg0;
     if(String(~(~Number(s)))===s)
      {
       arg0=ClientUtils["strToInt'or'zero"](s);
       _={
        $:1,
        $0:arg0
       };
      }
     else
      {
       _={
        $:0
       };
      }
     return _;
    }
   },
   LoginUI:{
    button:Runtime.Field(function()
    {
     return((LoginUI["is'logged'in"]())(_private_members["button'logout"]()))(_private_members["button'login"]());
    }),
    "doc'logining":Runtime.Field(function()
    {
     var arg00,arg10,view,f,view1,f1;
     arg00=Runtime.New(T,{
      $:0
     });
     arg10=_private_members["var'pass"]();
     view=_private_members["var'is'loginign'process"]().get_View();
     f=function(_arg1)
     {
      return _arg1?UINextUtils.txt("Logining to website..."):(UINextUtils.button0("Login"))(function()
      {
       return _private_members.login();
      });
     };
     view1=_private_members["var'error"]().get_View();
     f1=function(_arg2)
     {
      var _,error;
      if(_arg2.$==1)
       {
        error=_arg2.$0;
        _=Html.Div(List.ofArray([Attr.Style("color","red")]),List.ofArray([Html.H20(List.ofArray([UINextUtils.txt(error)]))]));
       }
      else
       {
        _=Doc.get_Empty();
       }
      return _;
     };
     return Html.Div0(List.ofArray([Html.H10(List.ofArray([UINextUtils.txt("Sign in")])),Html.Table0(List.ofArray([Html.TR0(List.ofArray([Html.TD0(List.ofArray([UINextUtils.txt("User name")])),Html.TD0(List.ofArray([(UINextUtils.input0())(_private_members["var'user"]())]))])),Html.TR0(List.ofArray([Html.TD0(List.ofArray([UINextUtils.txt("Password")])),Html.TD0(List.ofArray([Doc.PasswordBox(arg00,arg10)]))]))])),Html.P0(List.ofArray([UINextUtils["Doc'Map"](view,f),(UINextUtils.button0("Cancel"))(function()
     {
      var x,arg001,x1,arg002;
      _private_members["var'is'visible"]().set_Value(false);
      _private_members["var'error"]().set_Value({
       $:0
      });
      x=_private_members.op_SpliceUntyped(_private_members["key'user"]());
      arg001=_private_members["var'user"]();
      Var.Set(arg001,x);
      x1=_private_members.op_SpliceUntyped(_private_members["key'pass"]());
      arg002=_private_members["var'pass"]();
      return Var.Set(arg002,x1);
     })])),UINextUtils["Doc'Map"](view1,f1)]));
    }),
    "is'logged'in":Runtime.Field(function()
    {
     return function(_doc_yes)
     {
      return function(_doc_no)
      {
       return UINextUtils["doc'on'off"](_private_members["var'is'logged'in"](),_doc_yes,_doc_no);
      };
     };
    }),
    "on'visible":Runtime.Field(function()
    {
     return function(_doc_yes)
     {
      return function(_doc_no)
      {
       return UINextUtils["doc'on'off"](_private_members["var'is'visible"](),_doc_yes,_doc_no);
      };
     };
    }),
    "private members":{
     "button'login":Runtime.Field(function()
     {
      var arg10,arg20;
      arg10=List.ofArray([Attr.Class("btnlogin")]);
      arg20=function()
      {
       return _private_members["go'to'logining"]();
      };
      return Doc.Button("",arg10,arg20);
     }),
     "button'logout":Runtime.Field(function()
     {
      var arg10,arg20;
      arg10=List.ofArray([Attr.Class("btnlogout")]);
      arg20=function()
      {
       var arg00;
       arg00=Concurrency.Delay(function()
       {
        return Concurrency.Bind(AjaxRemotingProvider.Async("WsNote2:7",[]),function()
        {
         _private_members["var'is'logged'in"]().set_Value(false);
         return Concurrency.Return(null);
        });
       });
       return Concurrency.Start(arg00,{
        $:0
       });
      };
      return Doc.Button("",arg10,arg20);
     }),
     "go'to'logining":function()
     {
      return _private_members["var'is'visible"]().set_Value(true);
     },
     key:Runtime.Field(function()
     {
      return"4B929568-625C-4CD0-BED4-8EACC78D21E6-blog-";
     }),
     "key'pass":Runtime.Field(function()
     {
      return _private_members.key()+"pass";
     }),
     "key'user":Runtime.Field(function()
     {
      return _private_members.key()+"user";
     }),
     localStorage:function()
     {
      return window.localStorage;
     },
     login:function()
     {
      var arg00;
      arg00=Concurrency.Delay(function()
      {
       var x;
       _private_members["var'is'loginign'process"]().set_Value(true);
       x=AjaxRemotingProvider.Async("WsNote2:6",[_private_members["var'user"]().get_Value(),_private_members["var'pass"]().get_Value()]);
       return Concurrency.Bind(x,function(_arg1)
       {
        var _;
        _private_members["var'is'loginign'process"]().set_Value(false);
        if(_arg1)
         {
          _private_members["var'is'visible"]().set_Value(false);
          _private_members.op_LessEqualsEquals(_private_members["key'user"](),_private_members["var'user"]().get_Value());
          _private_members.op_LessEqualsEquals(_private_members["key'pass"](),_private_members["var'pass"]().get_Value());
          _private_members["var'is'logged'in"]().set_Value(true);
          _private_members["var'error"]().set_Value({
           $:0
          });
          _=Concurrency.Return(null);
         }
        else
         {
          _private_members["var'error"]().set_Value({
           $:1,
           $0:"Username or password incorrect"
          });
          _=Concurrency.Return(null);
         }
        return _;
       });
      });
      return Concurrency.Start(arg00,{
       $:0
      });
     },
     op_LessEqualsEquals:function(k,v)
     {
      var _,x,clo1,arg10,clo11;
      try
      {
       _=_private_members.localStorage().setItem(k,v);
      }
      catch(x)
      {
       clo1=function(_1)
       {
        var s;
        s="localStorage : "+PrintfHelpers.prettyPrint(_1);
        return console?console.log(s):undefined;
       };
       arg10=_private_members.localStorage();
       clo1(arg10);
       clo11=function(_1)
       {
        var s;
        s="localStorage.SetItem : "+PrintfHelpers.prettyPrint(_1);
        return console?console.log(s):undefined;
       };
       _=clo11(x);
      }
      return _;
     },
     op_SpliceUntyped:function(x)
     {
      var _,x1,clo1,arg10,clo11;
      try
      {
       _=_private_members.localStorage().getItem(x);
      }
      catch(x1)
      {
       clo1=function(_1)
       {
        var s;
        s="localStorage : "+PrintfHelpers.prettyPrint(_1);
        return console?console.log(s):undefined;
       };
       arg10=_private_members.localStorage();
       clo1(arg10);
       clo11=function(_1)
       {
        var s;
        s="localStorage.GetItem : "+PrintfHelpers.prettyPrint(_1);
        return console?console.log(s):undefined;
       };
       clo11(x1);
       _="";
      }
      return _;
     },
     "var'error":Runtime.Field(function()
     {
      return Var.Create({
       $:0
      });
     }),
     "var'is'logged'in":Runtime.Field(function()
     {
      return Var.Create(false);
     }),
     "var'is'loginign'process":Runtime.Field(function()
     {
      return Var.Create(false);
     }),
     "var'is'visible":Runtime.Field(function()
     {
      return Var.Create(false);
     }),
     "var'pass":Runtime.Field(function()
     {
      var arg00;
      arg00=_private_members.op_SpliceUntyped(_private_members["key'pass"]());
      return Var.Create(arg00);
     }),
     "var'user":Runtime.Field(function()
     {
      var arg00;
      arg00=_private_members.op_SpliceUntyped(_private_members["key'user"]());
      return Var.Create(arg00);
     })
    },
    protect:function(doc)
    {
     return((LoginUI["is'logged'in"]())(doc))(Doc.get_Empty());
    },
    "set'logged'in":Runtime.Field(function()
    {
     var arg00;
     arg00=_private_members["var'is'logged'in"]();
     return function(arg10)
     {
      return Var.Set(arg00,arg10);
     };
    })
   },
   NewPostUI:{
    button:Runtime.Field(function()
    {
     return(UINextUtils.button0("Create story"))(function()
     {
      return _private_members1["var'is'creating"]().set_Value(true);
     });
    }),
    doc:function(blog)
    {
     var arg00,arg10;
     arg00=List.ofArray([Attr.Style("width","100%")]);
     arg10=_private_members1["var'title"]();
     return Html.Div0(List.ofArray([Html.H10(List.ofArray([UINextUtils.txt("New Story")])),Html.P0(List.ofArray([UINextUtils.txt("Story title"),Doc.Input(arg00,arg10)])),Html.P0(List.ofArray([UINextUtils.txt("Story content"),UINextUtils["doc'edit'content'input'area"](_private_members1["var'content"]())])),Html.P0(List.ofArray([(UINextUtils.button0("Create"))(function()
     {
      ClientBlogData["add'post"](blog,_private_members1["var'title"]().get_Value(),_private_members1["var'content"]().get_Value());
      return _private_members1.reset();
     }),(UINextUtils.button0("Cancel"))(function()
     {
      return _private_members1.reset();
     })]))]));
    },
    on:Runtime.Field(function()
    {
     return function(_doc_yes)
     {
      return function(_doc_no)
      {
       return UINextUtils["doc'on'off"](_private_members1["var'is'creating"](),_doc_yes,_doc_no);
      };
     };
    }),
    "private members":{
     reset:function()
     {
      _private_members1["var'title"]().set_Value("");
      _private_members1["var'content"]().set_Value("");
      return _private_members1["var'is'creating"]().set_Value(false);
     },
     "var'content":Runtime.Field(function()
     {
      return Var.Create("");
     }),
     "var'is'creating":Runtime.Field(function()
     {
      return Var.Create(false);
     }),
     "var'title":Runtime.Field(function()
     {
      return Var.Create("");
     })
    }
   },
   PostUI:{
    doc:function(blog,post)
    {
     var arg10,arg00,arg101;
     arg10="post-"+Global.String(post.Id)+"-article";
     arg00=List.ofArray([Attr.Style("width","100%")]);
     arg101=post.EditedTitle;
     return Html.Div(List.ofArray([Attr.Class("panel panel-primary"),Attr.Create("id",arg10)]),List.ofArray([_private_members2["doc'header"](blog,post),_private_members2["on'edit"](post,Html.Div0(List.ofArray([Html.P0(List.ofArray([UINextUtils.txt("Title"),Doc.Input(arg00,arg101)])),Html.P0(List.ofArray([UINextUtils.txt("Content"),UINextUtils["doc'edit'content'input'area"](post.EditedContent)]))])),_private_members2["doc'static'content"](post))]));
    },
    "private members":{
     "doc'crud":function(blog,post)
     {
      var doc;
      doc=Html.Span0(List.ofArray([(UINextUtils.button0("Delete"))(function()
      {
       return ClientBlogData["delete'post"](blog,post);
      }),(UINextUtils.button0("Change"))(function()
      {
       return post.IsEditMode.set_Value(true);
      })]));
      return _private_members2["on'edit"](post,Html.Span0(List.ofArray([(UINextUtils.button0("Apply"))(function()
      {
       return ClientBlogData["update'post"](post);
      }),(UINextUtils.button0("Cancel"))(function()
      {
       return post.IsEditMode.set_Value(false);
      })])),LoginUI.protect(doc));
     },
     "doc'date":function(post)
     {
      return Html.Div(List.ofArray([Attr.Class("post-date-block")]),List.ofArray([UINextUtils.txt("Created:"),UINextUtils.txt(post.CreateDate),UINextUtils.txt("Changed:"),Doc.TextView(post.EditDate.get_View())]));
     },
     "doc'header":function(blog,post)
     {
      return Html.Div(List.ofArray([Attr.Class("panel-heading")]),List.ofArray([Doc.TextView(post.Title.get_View())]));
     },
     "doc'static'content":function(post)
     {
      var view,f;
      view=post.Content.get_View();
      f=function(content)
      {
       var htmlElem,_,matchValue;
       htmlElem=jQuery("<div class=\"panel-body\">"+content+"</div>").get(0);
       try
       {
        _=Doc.Static(htmlElem);
       }
       catch(matchValue)
       {
        _=UINextUtils.txt(content);
       }
       return _;
      };
      return UINextUtils["Doc'Map"](view,f);
     },
     "on'edit":function(post,_doc_edit,doc)
     {
      var view,f;
      view=post.IsEditMode.get_View();
      f=function(_arg1)
      {
       return _arg1?_doc_edit:doc;
      };
      return UINextUtils["Doc'Map"](view,f);
     }
    }
   },
   UINextUtils:{
    "Doc'Map":function(view,f)
    {
     var arg00;
     arg00=View.Map(f,view);
     return Doc.EmbedView(arg00);
    },
    addViewListener:function(view,f,doc)
    {
     var arg00,arg001,arg10;
     arg00=function(x)
     {
      f(x);
      return Doc.get_Empty();
     };
     arg001=View.Map(arg00,view);
     arg10=Doc.EmbedView(arg001);
     return Doc.Append(doc,arg10);
    },
    button0:function(txt)
    {
     var arg10;
     arg10=Runtime.New(T,{
      $:0
     });
     return function(arg20)
     {
      return Doc.Button(txt,arg10,arg20);
     };
    },
    "doc'edit'content'input'area":function(_var_content)
    {
     var arg00;
     arg00=List.ofArray([Attr.Class("edit-post-input-area")]);
     return Doc.InputArea(arg00,_var_content);
    },
    "doc'on'off":function(_var,_doc_yes,_doc_no)
    {
     var view,f;
     view=View.FromVar(_var);
     f=function(_arg1)
     {
      return _arg1?_doc_yes:_doc_no;
     };
     return UINextUtils["Doc'Map"](view,f);
    },
    input0:Runtime.Field(function()
    {
     var arg00;
     arg00=Runtime.New(T,{
      $:0
     });
     return function(arg10)
     {
      return Doc.Input(arg00,arg10);
     };
    }),
    op_LessMultiplyGreater:function(f,x)
    {
     return View1.Apply(f,x);
    },
    txt:function(arg00)
    {
     return Doc.TextNode(arg00);
    },
    "var'str'to'int":function(def)
    {
     var arg00;
     arg00=function(_arg1)
     {
      var activePatternResult,_,n;
      activePatternResult=ClientUtils["|Str'Int|_|"](_arg1);
      if(activePatternResult.$==1)
       {
        n=activePatternResult.$0;
        _=n;
       }
      else
       {
        _=def;
       }
      return _;
     };
     return Var.Create(arg00);
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  UI=Runtime.Safe(Global.WebSharper.UI);
  Next=Runtime.Safe(UI.Next);
  Attr=Runtime.Safe(Next.Attr);
  Seq=Runtime.Safe(Global.WebSharper.Seq);
  List=Runtime.Safe(Global.WebSharper.List);
  Html=Runtime.Safe(Next.Html);
  Doc=Runtime.Safe(Next.Doc);
  View=Runtime.Safe(Next.View);
  WsNote=Runtime.Safe(Global.WsNote);
  BlogUI=Runtime.Safe(WsNote.BlogUI);
  _web_application_client_side_core=Runtime.Safe(BlogUI["web application client side core"]);
  UINextUtils=Runtime.Safe(WsNote.UINextUtils);
  NewPostUI=Runtime.Safe(WsNote.NewPostUI);
  PostUI=Runtime.Safe(WsNote.PostUI);
  ListModel1=Runtime.Safe(Next.ListModel1);
  LoginUI=Runtime.Safe(WsNote.LoginUI);
  Operators=Runtime.Safe(Global.WebSharper.Operators);
  String=Runtime.Safe(Global.String);
  T=Runtime.Safe(List.T);
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  ClientBlogData=Runtime.Safe(WsNote.ClientBlogData);
  Var=Runtime.Safe(Next.Var);
  _______________________________________________________________________=Runtime.Safe(ClientBlogData["\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438 \u043d\u0430 \u0430\u0441\u043d\u043e\u0432\u0435 \u0430\u0433\u0435\u043d\u0442\u043e\u0432 \u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"]);
  Control=Runtime.Safe(Global.WebSharper.Control);
  MailboxProcessor=Runtime.Safe(Control.MailboxProcessor);
  Remoting=Runtime.Safe(Global.WebSharper.Remoting);
  AjaxRemotingProvider=Runtime.Safe(Remoting.AjaxRemotingProvider);
  Collections=Runtime.Safe(Global.WebSharper.Collections);
  ResizeArray=Runtime.Safe(Collections.ResizeArray);
  ResizeArrayProxy=Runtime.Safe(ResizeArray.ResizeArrayProxy);
  ListModel=Runtime.Safe(Next.ListModel);
  Number=Runtime.Safe(Global.Number);
  ClientUtils=Runtime.Safe(WsNote.ClientUtils);
  _private_members=Runtime.Safe(LoginUI["private members"]);
  window=Runtime.Safe(Global.window);
  PrintfHelpers=Runtime.Safe(Global.WebSharper.PrintfHelpers);
  console=Runtime.Safe(Global.console);
  _private_members1=Runtime.Safe(NewPostUI["private members"]);
  _private_members2=Runtime.Safe(PostUI["private members"]);
  jQuery=Runtime.Safe(Global.jQuery);
  return View1=Runtime.Safe(Next.View1);
 });
 Runtime.OnLoad(function()
 {
  UINextUtils.input0();
  _private_members1["var'title"]();
  _private_members1["var'is'creating"]();
  _private_members1["var'content"]();
  NewPostUI.on();
  NewPostUI.button();
  LoginUI["set'logged'in"]();
  _private_members["var'user"]();
  _private_members["var'pass"]();
  _private_members["var'is'visible"]();
  _private_members["var'is'loginign'process"]();
  _private_members["var'is'logged'in"]();
  _private_members["var'error"]();
  _private_members["key'user"]();
  _private_members["key'pass"]();
  _private_members.key();
  _private_members["button'logout"]();
  _private_members["button'login"]();
  LoginUI["on'visible"]();
  LoginUI["is'logged'in"]();
  LoginUI["doc'logining"]();
  LoginUI.button();
  _______________________________________________________________________.crud();
  _web_application_client_side_core["var'posts'count"]();
  _web_application_client_side_core["var'page'number"]();
  _web_application_client_side_core["var'is'settings'visible"]();
  _web_application_client_side_core["var'context"]();
  _web_application_client_side_core["v'blog"]();
  _web_application_client_side_core["doc'settings"]();
  return;
 });
}());
