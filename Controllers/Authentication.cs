using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ContactManager.Controllers
{
    [Authorize]
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
        // acts like a login
        public async Task<IActionResult> Login([FromBody] UserDetails user)
        {
            var credentials = new { user.Username, user.Password };
            var result = await _signInManager.PasswordSignInAsync(user.Username, user.Password, true, lockoutOnFailure: false);
            // return the token for this user
            return Ok(result);
}

[HttpGet("logout")]
public async Task<IActionResult> Logout()
{
    await _signInManager.SignOutAsync();
    return Ok(new { message = "Logged out succesfully" });
}
    }

    public class UserDetails
{
    public string Username { get; set; }
    public string Password { get; set; }
}
}
