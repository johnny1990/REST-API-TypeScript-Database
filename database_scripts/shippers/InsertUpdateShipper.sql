USE [NORTHWIND]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[InsertUpdateShipper]
 @CompanyName nvarchar(15),
 @Phone nvarchar,
 @ShipperId int = 0
as
BEGIN
 if (@ShipperId= 0) 
  INSERT INTO [dbo].[Shippers] ([CompanyName], [Phone]) 
  VALUES (@CompanyName,@Phone)
 else
  update [Shippers] set [CompanyName] = @CompanyName, [Phone] = @Phone
  where ShipperID = @ShipperId
 end
