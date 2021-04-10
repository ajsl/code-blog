using System.Collections.Generic;
using code_blog.API.Models;
using Microsoft.EntityFrameworkCore;

namespace code_blog.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        // public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }

        // protected override void OnConfiguring(DbContextOptionsBuilder options)
        //     => options.UseSqlite(@"Data Source=/Users/james/Documents/projects/code-blog/code-blog.db");
    }

    // public class Blog
    // {
    //     public int BlogId { get; set; }
    //     public int BlogUrl { get; set; }
    //     public string Url { get; set; }
    //     public IReadOnlyList<Post> Posts { get; } = new List<Post>();
    // }

    // public class Post
    // {
    //     public int PostId { get; set; }
    //     public string Title { get; set; }
    //     public string Content { get; set; }
    //     public DateTime PublicationDate { get; set; }
    //     public int BlogId { get; set; }
    //     public Blog Blog { get; set; }
    // }
}