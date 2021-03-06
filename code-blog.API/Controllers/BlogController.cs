using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using System.Threading.Tasks;
using code_blog.API.Data;
using code_blog.API.Models;
using System;
using code_blog.API.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;

namespace code_blog.API.Controllers
{
    public class BlogController : BaseApiController
    {
        private readonly IBlogRepository _blogRepository;
        private readonly IMapper _mapper;
        public BlogController(IBlogRepository blogRepository, IMapper mapper)
        {
            _mapper = mapper;
            _blogRepository = blogRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Post>>> GetPosts()
        {
            var posts = await _blogRepository.GetPostsAsync();
            if (posts.Count > 0)
            {
                return Ok(posts);

            }

            return NoContent();
        }

        [HttpGet("{id}", Name = "Getpost")]
        public async Task<IActionResult> GetPost(int id)
        {
            var returnPost = await _blogRepository.GetPostAsync(id);

            return Ok(returnPost);
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> AddPost(Post post)
        {
            _blogRepository.CreatePostAsync(post);

            if (await _blogRepository.SaveAll())
            {
                return CreatedAtRoute("GetPost", new
                {
                    controller = "Blog",
                    id = post.PostId
                }, post);
            }

            throw new Exception("Creating the post failed to save");


        }
        
        [Authorize]
        [HttpPost("{id}")]
        public async Task<ActionResult> DeletePost(int id)
        {
            var postEntity = _blogRepository.GetPostAsync(id);
            _blogRepository.DeletePost(postEntity.Result);

            if (await _blogRepository.SaveAll())
            {
                return NoContent();
            }

            throw new Exception("Error deleting message");
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdatePost(int id, PostForUpdateDto postForUpdateDto)
        {
            var postFromRepo = await _blogRepository.GetPostAsync(id);
            if (postFromRepo != null)
            {
                _mapper.Map(postForUpdateDto, postFromRepo);
            }

            if (await _blogRepository.SaveAll())
            {
                return NoContent();
            }

            throw new Exception($"Failed to save on updating post {id}");

        }
    }
}