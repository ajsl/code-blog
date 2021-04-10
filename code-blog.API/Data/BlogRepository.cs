
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using code_blog.API.Models;
using Microsoft.EntityFrameworkCore;

namespace code_blog.API.Data
{
    public class BlogRepository : IBlogRepository
    {
        private readonly DataContext _context;

        public BlogRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Post> GetPostAsync(int id)
        {
           var post = await _context.Posts.FirstOrDefaultAsync(p => p.PostId == id);

           return post;
        }

        public async Task<List<Post>> GetPostsAsync()
        {
            var result = _context.Posts.OrderBy(x => x.PostId).ToListAsync();

            return await result;

        }

        public async Task<Post> CreatePostAsync(Post post)
        {
            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();

            return post;

        }
    }
}