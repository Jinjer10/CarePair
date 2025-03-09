using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarePair.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddJsonColumnsForAreaCityGender : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Area",
                table: "Volunteer");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Volunteer");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Volunteer");

            migrationBuilder.AddColumn<string>(
                name: "AreaJson",
                table: "Volunteer",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CityJson",
                table: "Volunteer",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "GenderJson",
                table: "Volunteer",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AreaJson",
                table: "Volunteer");

            migrationBuilder.DropColumn(
                name: "CityJson",
                table: "Volunteer");

            migrationBuilder.DropColumn(
                name: "GenderJson",
                table: "Volunteer");

            migrationBuilder.AddColumn<int>(
                name: "Area",
                table: "Volunteer",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "City",
                table: "Volunteer",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Gender",
                table: "Volunteer",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
