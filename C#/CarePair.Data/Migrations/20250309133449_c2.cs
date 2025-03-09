using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarePair.Data.Migrations
{
    /// <inheritdoc />
    public partial class c2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Time_Volunteer_VolunteerId",
                table: "Time");

            migrationBuilder.DropIndex(
                name: "IX_Time_VolunteerId",
                table: "Time");

            migrationBuilder.DropColumn(
                name: "VolunteerId",
                table: "Time");

            migrationBuilder.RenameColumn(
                name: "WardPreference",
                table: "Volunteer",
                newName: "WardPreferenceJson");

            migrationBuilder.RenameColumn(
                name: "ReligiosityPreference",
                table: "Volunteer",
                newName: "ReligiosityPreferenceJson");

            migrationBuilder.RenameColumn(
                name: "LanguagePreference",
                table: "Volunteer",
                newName: "LanguagePreferenceJson");

            migrationBuilder.RenameColumn(
                name: "Language",
                table: "Volunteer",
                newName: "LanguageJson");

            migrationBuilder.RenameColumn(
                name: "Interests",
                table: "Volunteer",
                newName: "InterestsJson");

            migrationBuilder.RenameColumn(
                name: "GenderPreference",
                table: "Volunteer",
                newName: "GenderPreferenceJson");

            migrationBuilder.RenameColumn(
                name: "AgePreference",
                table: "Volunteer",
                newName: "AvailableTimesJson");

            migrationBuilder.AddColumn<string>(
                name: "AgePreferenceJson",
                table: "Volunteer",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AgePreferenceJson",
                table: "Volunteer");

            migrationBuilder.RenameColumn(
                name: "WardPreferenceJson",
                table: "Volunteer",
                newName: "WardPreference");

            migrationBuilder.RenameColumn(
                name: "ReligiosityPreferenceJson",
                table: "Volunteer",
                newName: "ReligiosityPreference");

            migrationBuilder.RenameColumn(
                name: "LanguagePreferenceJson",
                table: "Volunteer",
                newName: "LanguagePreference");

            migrationBuilder.RenameColumn(
                name: "LanguageJson",
                table: "Volunteer",
                newName: "Language");

            migrationBuilder.RenameColumn(
                name: "InterestsJson",
                table: "Volunteer",
                newName: "Interests");

            migrationBuilder.RenameColumn(
                name: "GenderPreferenceJson",
                table: "Volunteer",
                newName: "GenderPreference");

            migrationBuilder.RenameColumn(
                name: "AvailableTimesJson",
                table: "Volunteer",
                newName: "AgePreference");

            migrationBuilder.AddColumn<int>(
                name: "VolunteerId",
                table: "Time",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Time_VolunteerId",
                table: "Time",
                column: "VolunteerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Time_Volunteer_VolunteerId",
                table: "Time",
                column: "VolunteerId",
                principalTable: "Volunteer",
                principalColumn: "Id");
        }
    }
}
