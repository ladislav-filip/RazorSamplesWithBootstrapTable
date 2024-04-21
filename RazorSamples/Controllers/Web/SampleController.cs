using Microsoft.AspNetCore.Mvc;

namespace RazorSamples.Controllers.Web;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class SampleController : ControllerBase
{
    public async Task<IActionResult> Get()
    {
        await Task.CompletedTask;

        return Ok(_items);
    }

    public record SampleItem(int Id, string Name, string Surname);

    private List<SampleItem> _items = new()
    {
        new SampleItem(1, "Jan", "Novák"),
        new SampleItem(2, "Petr", "Svoboda"),
        new SampleItem(3, "Jana", "Novotná"),
        new SampleItem(4, "Marie", "Dvořáková"),
        new SampleItem(5, "Pavel", "Černý"),
        new SampleItem(6, "Josef", "Procházka"),
        new SampleItem(7, "Martin", "Kučera"),
        new SampleItem(8, "Jaroslav", "Veselý"),
        new SampleItem(9, "Tomáš", "Horák"),
        new SampleItem(10, "Eva", "Němcová"),
        new SampleItem(11, "Anna", "Křížová"),
        new SampleItem(12, "Miroslav", "Malý"),
        new SampleItem(13, "Kateřina", "Havlíčková"),
        new SampleItem(14, "Michal", "Bartoš"),
        new SampleItem(15, "Lucie", "Sedláčková"),
        new SampleItem(16, "Martin", "Pospíšil"),
        new SampleItem(17, "Veronika", "Kovářová"),
        new SampleItem(18, "Jiří", "Urban"),
        new SampleItem(19, "Hana", "Marešová"),
        new SampleItem(20, "Lukáš", "Krejčí"),
        new SampleItem(21, "Petra", "Fišerová"),
        new SampleItem(22, "David", "Šimek"),
        new SampleItem(23, "Markéta", "Nováková"),
        new SampleItem(24, "Filip", "Hodný"),
        new SampleItem(25, "Michaela", "Jelínková"),
        new SampleItem(26, "Radek", "Veselý"),
        new SampleItem(27, "Barbora", "Svobodová"),
        new SampleItem(28, "Roman", "Král"),
        new SampleItem(29, "Lucie", "Benešová"),
        new SampleItem(30, "Ondřej", "Zeman")
    };
}
