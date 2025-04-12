using System;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

public class MyDBContext : DbContext
{

    public MyDBContext(DbContextOptions<MyDBContext> options) : base(options)
    {
         
    }

    public DbSet<Model_Order_Placement> Model_Order_Placement { get; set; }
    //public DbSet<> Roles { get; set; }

}