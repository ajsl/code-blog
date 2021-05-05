using code_blog.API.Models;
using Microsoft.EntityFrameworkCore;

namespace code_blog.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; }

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //     => optionsBuilder
        //         .UseNpgsql("Host=localhost; Port=5432;User Id=appuser; Password=secret; Database=dev;");

    }

}