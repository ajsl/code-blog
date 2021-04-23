using System;

namespace code_blog.API.Models
{
    public class Post
    {
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