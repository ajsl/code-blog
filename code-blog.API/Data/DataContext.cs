using code_blog.API.Models;
using Microsoft.EntityFrameworkCore;

namespace code_blog.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; }

    }

}