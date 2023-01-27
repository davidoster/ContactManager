using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ContactManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Authentication : ControllerBase
    {
        private SignInManager<IdentityUser> _signInManager;
        public Authentication(SignInManager<IdentityUser> signInManager)
        {
            _signInManager = signInManager;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Authenticate([FromBody]UserDetails user)
        {
            var credentials = new { user.Username, user.Password };
            var result = await _signInManager.PasswordSignInAsync(user.Username, user.Password, true, lockoutOnFailure: false);
            return Ok(result);
        }
    }

    public class UserDetails
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
