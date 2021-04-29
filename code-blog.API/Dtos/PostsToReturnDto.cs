using System;
using System.Collections.Generic;
using code_blog.API.Models;

namespace code_blog.API.Dtos
{
    public class PostsToReturnDto
    {
        // public int CurrentPage { get; set; }
        // public int PageSize { get; set; }
        // public int TotalCount { get; set; }
        // public int TotalPages { get; set; }

        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public DateTime PublicationDate {get; set;}
        public DateTime UpdatedDate {get; set;}
        public int BlogId { get; set; }
        public string Tags { get; set; }
        public string photoUrl { get; set; }
    }
}