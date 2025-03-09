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
            migrationBuilder.DropForeignKey(
                name: "FK_Time_Patient_PatientId",
                table: "Time");

            migrationBuilder.DropIndex(
                name: "IX_Time_PatientId",
                table: "Time");

            migrationBuilder.DropColumn(
                name: "PatientId",
                table: "Time");

            migrationBuilder.DropColumn(
                name: "Area",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "Hospitall",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "Religiosity",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "Ward",
                table: "Patient");

            migrationBuilder.RenameColumn(
                name: "ReligiosityPreference",
                table: "Patient",
                newName: "WardJson");

            migrationBuilder.RenameColumn(
                name: "LanguagePreference",
                table: "Patient",
                newName: "RequiredTimesJson");

            migrationBuilder.RenameColumn(
                name: "Language",
                table: "Patient",
                newName: "ReligiosityPreferenceJson");

            migrationBuilder.RenameColumn(
                name: "Interests",
                table: "Patient",
                newName: "ReligiosityJson");

            migrationBuilder.RenameColumn(
                name: "GenderPreference",
                table: "Patient",
                newName: "LanguagePreferenceJson");

            migrationBuilder.RenameColumn(
                name: "AgePreference",
                table: "Patient",
                newName: "LanguageJson");

            migrationBuilder.AddColumn<string>(
                name: "AgePreferenceJson",
                table: "Patient",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "AreaJson",
                table: "Patient",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CityJson",
                table: "Patient",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "GenderJson",
                table: "Patient",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "GenderPreferenceJson",
                table: "Patient",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HospitalJson",
                table: "Patient",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "InterestsJson",
                table: "Patient",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AgePreferenceJson",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "AreaJson",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "CityJson",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "GenderJson",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "GenderPreferenceJson",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "HospitalJson",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "InterestsJson",
                table: "Patient");

            migrationBuilder.RenameColumn(
                name: "WardJson",
                table: "Patient",
                newName: "ReligiosityPreference");

            migrationBuilder.RenameColumn(
                name: "RequiredTimesJson",
                table: "Patient",
                newName: "LanguagePreference");

            migrationBuilder.RenameColumn(
                name: "ReligiosityPreferenceJson",
                table: "Patient",
                newName: "Language");

            migrationBuilder.RenameColumn(
                name: "ReligiosityJson",
                table: "Patient",
                newName: "Interests");

            migrationBuilder.RenameColumn(
                name: "LanguagePreferenceJson",
                table: "Patient",
                newName: "GenderPreference");

            migrationBuilder.RenameColumn(
                name: "LanguageJson",
                table: "Patient",
                newName: "AgePreference");

            migrationBuilder.AddColumn<int>(
                name: "PatientId",
                table: "Time",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Area",
                table: "Patient",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "City",
                table: "Patient",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Gender",
                table: "Patient",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Hospitall",
                table: "Patient",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Religiosity",
                table: "Patient",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Ward",
                table: "Patient",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Time_PatientId",
                table: "Time",
                column: "PatientId");

            migrationBuilder.AddForeignKey(
                name: "FK_Time_Patient_PatientId",
                table: "Time",
                column: "PatientId",
                principalTable: "Patient",
                principalColumn: "Id");
        }
    }
}
