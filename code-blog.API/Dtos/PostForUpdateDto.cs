using System;

namespace code_blog.API.Dtos
{
    public class PostForUpdateDto
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public string Tags { get; set; }
        public DateTime UpdatedDate = DateTime.Now;
    }
}