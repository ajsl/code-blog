using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using code_blog.API.Models;
using Microsoft.EntityFrameworkCore;

namespace code_blog.API.Helpers
{
    public class PagedList<Post> : List<Post>
    {
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }
        public PagedList(List<Post> posts, int count, int pageNumber, int pageSize)
        {
            TotalCount = count;
            PageSize = pageSize;
            CurrentPage = pageNumber;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);
            this.AddRange(posts);
        }

        public static async Task<PagedList<Post>> CreateAsync(IQueryable<Post> source,
         int pageNumber, int pageSize)
         {
             var count = await source.CountAsync();
             var posts = await source.Skip((pageNumber - 1 ) * pageSize).Take(pageSize).ToListAsync();
             return new PagedList<Post>(posts, count, pageNumber, pageSize); 
         }
    }
}