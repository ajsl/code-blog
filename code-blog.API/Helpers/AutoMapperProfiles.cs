using AutoMapper;
using code_blog.API.Dtos;
using code_blog.API.Models;

namespace code_blog.API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<PostForUpdateDto, Post>();
            CreateMap<LoginDto, User>();
            CreateMap<User, LoginDto>();
            CreateMap<PostForCreationDto, Post>();
        }
    }
}