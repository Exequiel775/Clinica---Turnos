using Microsoft.EntityFrameworkCore.Migrations;

namespace Sistema.Sanatorio.Migrations
{
    public partial class Seguridad : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Controladores",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Controladores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Perfiles",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Perfiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ControladorPerfil",
                columns: table => new
                {
                    ControladoresId = table.Column<long>(type: "bigint", nullable: false),
                    PerfilesId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ControladorPerfil", x => new { x.ControladoresId, x.PerfilesId });
                    table.ForeignKey(
                        name: "FK_ControladorPerfil_Controladores_ControladoresId",
                        column: x => x.ControladoresId,
                        principalTable: "Controladores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ControladorPerfil_Perfiles_PerfilesId",
                        column: x => x.PerfilesId,
                        principalTable: "Perfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Perfil_Controladores",
                columns: table => new
                {
                    PerfilId = table.Column<long>(type: "bigint", nullable: false),
                    ControladorId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Perfil_Controladores", x => new { x.PerfilId, x.ControladorId });
                    table.ForeignKey(
                        name: "FK_Perfil_Controladores_Controladores_ControladorId",
                        column: x => x.ControladorId,
                        principalTable: "Controladores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Perfil_Controladores_Perfiles_PerfilId",
                        column: x => x.PerfilId,
                        principalTable: "Perfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PerfilUsuario",
                columns: table => new
                {
                    PerfilesId = table.Column<long>(type: "bigint", nullable: false),
                    UsuariosId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PerfilUsuario", x => new { x.PerfilesId, x.UsuariosId });
                    table.ForeignKey(
                        name: "FK_PerfilUsuario_Perfiles_PerfilesId",
                        column: x => x.PerfilesId,
                        principalTable: "Perfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PerfilUsuario_Usuarios_UsuariosId",
                        column: x => x.UsuariosId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Usuario_Perfiles",
                columns: table => new
                {
                    UsuarioId = table.Column<long>(type: "bigint", nullable: false),
                    PerfilId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario_Perfiles", x => new { x.UsuarioId, x.PerfilId });
                    table.ForeignKey(
                        name: "FK_Usuario_Perfiles_Perfiles_PerfilId",
                        column: x => x.PerfilId,
                        principalTable: "Perfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Usuario_Perfiles_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ControladorPerfil_PerfilesId",
                table: "ControladorPerfil",
                column: "PerfilesId");

            migrationBuilder.CreateIndex(
                name: "IX_Perfil_Controladores_ControladorId",
                table: "Perfil_Controladores",
                column: "ControladorId");

            migrationBuilder.CreateIndex(
                name: "IX_PerfilUsuario_UsuariosId",
                table: "PerfilUsuario",
                column: "UsuariosId");

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_Perfiles_PerfilId",
                table: "Usuario_Perfiles",
                column: "PerfilId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ControladorPerfil");

            migrationBuilder.DropTable(
                name: "Perfil_Controladores");

            migrationBuilder.DropTable(
                name: "PerfilUsuario");

            migrationBuilder.DropTable(
                name: "Usuario_Perfiles");

            migrationBuilder.DropTable(
                name: "Controladores");

            migrationBuilder.DropTable(
                name: "Perfiles");
        }
    }
}
