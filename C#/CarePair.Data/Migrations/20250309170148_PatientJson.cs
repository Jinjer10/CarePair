using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarePair.Data.Migrations
{
    /// <inheritdoc />
    public partial class PatientJson : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Religiosity",
                table: "Volunteer");

            migrationBuilder.AddColumn<string>(
                name: "ReligiosityJson",
                table: "Volunteer",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReligiosityJson",
                table: "Volunteer");

            migrationBuilder.AddColumn<int>(
                name: "Religiosity",
                table: "Volunteer",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
