using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace stock_Order_Management_System.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderPlacementController : ControllerBase
    {
        private readonly MyDBContext _context;

        public OrderPlacementController(MyDBContext context)
        {
            _context = context;
        }

        // GET: api/OrderPlacement
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Model_Order_Placement>>> GetModel_Order_Placement()
        {
            return await _context.Model_Order_Placement.ToListAsync();
        }

        // GET: api/OrderPlacement/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Model_Order_Placement>> GetModel_Order_Placement(int id)
        {
            var model_Order_Placement = await _context.Model_Order_Placement.FindAsync(id);

            if (model_Order_Placement == null)
            {
                return NotFound();
            }

            return model_Order_Placement;
        }

        // PUT: api/OrderPlacement/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModel_Order_Placement(int id, Model_Order_Placement model_Order_Placement)
        {
            if (id != model_Order_Placement.Id)
            {
                return BadRequest();
            }

            _context.Entry(model_Order_Placement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Model_Order_PlacementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/OrderPlacement
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Model_Order_Placement>> PostModel_Order_Placement(Model_Order_Placement model_Order_Placement)
        {
            _context.Model_Order_Placement.Add(model_Order_Placement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetModel_Order_Placement", new { id = model_Order_Placement.Id }, model_Order_Placement);
        }

        // DELETE: api/OrderPlacement/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModel_Order_Placement(int id)
        {
            var model_Order_Placement = await _context.Model_Order_Placement.FindAsync(id);
            if (model_Order_Placement == null)
            {
                return NotFound();
            }

            _context.Model_Order_Placement.Remove(model_Order_Placement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Model_Order_PlacementExists(int id)
        {
            return _context.Model_Order_Placement.Any(e => e.Id == id);
        }
    }
}
