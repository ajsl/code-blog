using System.Collections.Generic;
using System.Threading.Tasks;
using code_blog.API.Models;

namespace code_blog.API.Data
{
    public interface IBlogRepository
    {
        Task<List<Post>> GetPostsAsync();
        Task<Post> GetPostAsync(int PostId);
        Task<Post> CreatePostAsync(Post post);

    }
}