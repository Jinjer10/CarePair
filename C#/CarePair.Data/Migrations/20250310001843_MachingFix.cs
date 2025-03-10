using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarePair.Data.Migrations
{
    /// <inheritdoc />
    public partial class MachingFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Patient",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BirthDate = table.Column<DateOnly>(type: "date", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraDetailse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AreaJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CityJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GenderJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HospitalJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WardJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReligiosityJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RequiredTimesJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LanguageJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LanguagePreferenceJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InterestsJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GenderPreferenceJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AgePreferenceJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReligiosityPreferenceJson = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patient", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Time",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Day = table.Column<int>(type: "int", nullable: false),
                    StartTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    EndTime = table.Column<TimeSpan>(type: "time", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Time", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Volunteer",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BirthDate = table.Column<DateOnly>(type: "date", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraDetailse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AreaJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CityJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GenderJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AvailableTimesJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReligiosityJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LanguageJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LanguagePreferenceJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InterestsJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GenderPreferenceJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AgePreferenceJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReligiosityPreferenceJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WardPreferenceJson = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Volunteer", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Patient");

            migrationBuilder.DropTable(
                name: "Time");

            migrationBuilder.DropTable(
                name: "Volunteer");
        }
    }
}
