namespace code_blog.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        
    }

    public class AuthToken
    {
        public string Token { get; set; }
    }
}