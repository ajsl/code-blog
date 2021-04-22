using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using code_blog.API.Data;
using code_blog.API.Dtos;
using code_blog.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace code_blog.API.Controllers
{
    public class AuthController : BaseApiController
    {
        private readonly IAuthRepository _repository;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;
        public AuthController(IAuthRepository repository, IMapper mapper, IConfiguration configuration)
        {
            _configuration = configuration;
            _mapper = mapper;
            _repository = repository;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(LoginDto loginDto)
        {
            loginDto.UserName = loginDto.UserName.ToLower();

            if (await _repository.UserExists(loginDto.UserName))
            {
                return BadRequest("Username allready exists");
            }

            var userToCreate = _mapper.Map<User>(loginDto);

            var createdUser = await _repository.Register(userToCreate, loginDto.Password);

            var userToReturn = _mapper.Map<LoginDto>(createdUser);

            return Ok(userToReturn);

        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginDto user)
        {
            var userFromRepo = await _repository.Login(user.UserName.ToLower(), user.Password);

            if (userFromRepo == null) return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });


        }

        [HttpPost("checkuser")]
        public Task<bool> CheckUserToken(AuthToken authToken)
        {
            try
            {
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
                var tokenHandler = new JwtSecurityTokenHandler();
                var validationParameters = GetValidationParameters();

                SecurityToken validatedToken;

                IPrincipal principal = tokenHandler.ValidateToken(authToken.Token, validationParameters, out validatedToken);
                return Task.FromResult(true);
            }
            catch (System.Exception)
            {
                return Task.FromResult(false);
                throw;
            }

        }

        private TokenValidationParameters GetValidationParameters()
        {

            return new TokenValidationParameters()
            {
                ValidateLifetime = false, // Because there is no expiration in the generated token
                ValidateAudience = false, // Because there is no audiance in the generated token
                ValidateIssuer = false,   // Because there is no issuer in the generated token
                ValidIssuer = "Sample",
                ValidAudience = "Sample",
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value))
            };
        }

    }
}