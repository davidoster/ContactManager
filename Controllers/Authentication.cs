using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Authentication : ControllerBase
    {
        [HttpPost]
        [AllowAnonymous]
        public IActionResult Authenticate([FromBody]UserDetails user)
        {
            var credentials = new { user.Username, user.Password };
            return Ok(credentials);
        }
    }

    public class UserDetails
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
