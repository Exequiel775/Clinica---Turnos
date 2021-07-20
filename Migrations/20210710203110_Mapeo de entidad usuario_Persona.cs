using Microsoft.EntityFrameworkCore.Migrations;

namespace Sistema.Sanatorio.Migrations
{
    public partial class Mapeodeentidadusuario_Persona : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Usuarios_PersonaId",
                table: "Usuarios");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_PersonaId",
                table: "Usuarios",
                column: "PersonaId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Usuarios_PersonaId",
                table: "Usuarios");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_PersonaId",
                table: "Usuarios",
                column: "PersonaId");
        }
    }
}
