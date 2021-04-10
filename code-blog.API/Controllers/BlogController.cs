using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using System.Threading.Tasks;
using code_blog.API.Data;
using code_blog.API.Models;

namespace code_blog.API.Controllers
{
    public class BlogController : BaseApiController
    {
        private readonly IBlogRepository _blogRepository;
        public BlogController(IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Post>>> GetPosts()
        {
            var posts = await _blogRepository.GetPostsAsync();
            if (posts.Count > 0)
            {
                return Ok();
 
            }

            return NoContent();
        }

        [HttpGet("{id}", Name = "Getpost")]
        public async Task<IActionResult> GetPost(int id)
        {
            var returnPost = await _blogRepository.GetPostAsync(id);

            return Ok(returnPost);
        }

        [HttpPost]
        public async Task<ActionResult> AddPost(Post post)
        {
               var createdPost = await _blogRepository.CreatePostAsync(post);

               return CreatedAtRoute("GetPost", new {controller = "Blog", 
               id = createdPost.PostId}, post);
            
        }
    }
}