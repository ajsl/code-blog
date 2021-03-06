using System.Collections.Generic;
using System.Threading.Tasks;
using code_blog.API.Models;

namespace code_blog.API.Data
{
    public interface IBlogRepository
    {
        Task<List<Post>> GetPostsAsync();
        Task<Post> GetPostAsync(int PostId);
        void CreatePostAsync(Post post);
        void DeletePost(Post post);
        Task<bool> SaveAll();

    }
}