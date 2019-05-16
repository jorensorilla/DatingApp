using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    // Controller base class is for an MVC controller with view support (returns View and takes advantage of autobinding)
    public class FallBack : Controller
    {
        public IActionResult Index()
        {
            // redirect request to angular application ( to the router)
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), 
                "wwwroot", "index.html"), "text/HTML");
        }
        
    }
}