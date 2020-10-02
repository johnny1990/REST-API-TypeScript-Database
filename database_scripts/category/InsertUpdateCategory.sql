USE [NORTHWIND]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[InsertUpdateCategory]
 @CategoryName nvarchar(15),
 @Description ntext,
 @Picture image,
 @Id int = 0
as
BEGIN
 if (@Id = 0) 
  INSERT INTO [dbo].[Categories] ([CategoryName], [Description], [Picture]) 
  VALUES (@CategoryName,@Description, @Picture)
 else
  update [Categories] set [CategoryName] = @CategoryName, [Description] = @Description, [Picture]=@Picture
  where CategoryID = @Id
 end
