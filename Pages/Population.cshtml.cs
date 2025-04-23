using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebPivot.Pages;

public class PopulationModel : PageModel
{
    private readonly ILogger<PopulationModel> _logger;

    public PopulationModel(ILogger<PopulationModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
    }
}

