using System;
using System.Collections.Generic;

namespace code_blog.API.Models
{
    public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public DateTime PublicationDate = DateTime.Now;
        public DateTime UpdatedDate {get; set;}
        public int BlogId { get; set; }
        public string Tags { get; set; }
    }
}