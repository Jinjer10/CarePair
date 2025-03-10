using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarePair.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ActiveMatch",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VolunteerId = table.Column<int>(type: "int", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: false),
                    MatchStartDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActiveMatch", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ConfirmMatchRequest",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    MatchedUserId = table.Column<int>(type: "int", nullable: false),
                    IsVolunteer = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConfirmMatchRequest", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PendingMatch",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VolunteerId = table.Column<int>(type: "int", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: false),
                    MatchTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    VolunteerConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PatientConfirmed = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PendingMatch", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ActiveMatch");

            migrationBuilder.DropTable(
                name: "ConfirmMatchRequest");

            migrationBuilder.DropTable(
                name: "PendingMatch");
        }
    }
}
