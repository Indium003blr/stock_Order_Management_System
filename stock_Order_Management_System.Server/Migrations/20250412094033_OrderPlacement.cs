using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace stock_Order_Management_System.Server.Migrations
{
    /// <inheritdoc />
    public partial class OrderPlacement : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Model_Order_Placement",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Company_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Stock_Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Number_Of_Stock = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Buy_Sell_Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Model_Order_Placement", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Model_Order_Placement");
        }
    }
}
