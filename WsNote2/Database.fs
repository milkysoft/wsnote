namespace WsNote

open FSharp.Data
open System
open System.Data.SqlClient

module Database = 
    
    module Sql = 
        [<Literal>]
        let connectionString = """Data Source=zuoqinhp;Initial Catalog=BigData;User Id=zuoqin;Password=Qwerty123;MultipleActiveResultSets=True;"""
        
        type GetBlog = SqlCommandProvider<"SELECT * FROM Post" , connectionString>

        type DeletePost = SqlCommandProvider<"DELETE FROM Post WHERE Id=@id" , connectionString>

        type SetPost = SqlCommandProvider<"""
            UPDATE Post
            SET EditDate = GETDATE(), Content = @content, Title = @title    
            OUTPUT INSERTED.*
            WHERE Id=@id""" , connectionString>

        type CreateNewPost = SqlCommandProvider<"""
            INSERT INTO Post(CreateDate, EditDate, Title, Content)
            OUTPUT INSERTED.*
            VALUES(GETDATE(), GETDATE(), @title, @content);""", connectionString>

        let conn = 
            let conn = new SqlConnection(connectionString)
            conn.Open()
            conn

    

    let getBlog() = 
        (new Sql.GetBlog()).AsyncExecute() 

    let addNewPost title content = 
        (new Sql.CreateNewPost()).AsyncExecute(title = title, content = content ) 

    let setPost id title content =
        (new Sql.SetPost()).AsyncExecute(id = id, title = title, content = content ) 

