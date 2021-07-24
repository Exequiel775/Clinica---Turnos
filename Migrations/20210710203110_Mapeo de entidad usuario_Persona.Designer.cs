﻿// <auto-generated />
using System;
using Infraestructura;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Sistema.Sanatorio.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210710203110_Mapeo de entidad usuario_Persona")]
    partial class Mapeodeentidadusuario_Persona
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Entidades.Especialidad", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("Id");

                    b.ToTable("Especialidades");
                });

            modelBuilder.Entity("Entidades.Localidad", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("ProvinciaId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("ProvinciaId");

                    b.ToTable("Localidad");
                });

            modelBuilder.Entity("Entidades.Persona", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Apellido")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Celular")
                        .HasColumnType("int");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Dni")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("FechaNacimiento")
                        .HasColumnType("datetime2");

                    b.Property<long>("LocalidadId")
                        .HasColumnType("bigint");

                    b.Property<string>("Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Telefono")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("LocalidadId");

                    b.ToTable("Personas");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Persona");
                });

            modelBuilder.Entity("Entidades.Provincia", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Provincias");
                });

            modelBuilder.Entity("Entidades.Turno", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long>("EspecialidadId")
                        .HasColumnType("bigint");

                    b.Property<int>("EstadoTurno")
                        .HasColumnType("int");

                    b.Property<DateTime>("FechaAtencion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaEmision")
                        .HasColumnType("datetime2");

                    b.Property<long>("MedicoId")
                        .HasColumnType("bigint");

                    b.Property<int>("Numero")
                        .HasColumnType("int");

                    b.Property<long>("PacienteId")
                        .HasColumnType("bigint");

                    b.Property<long>("RecepcionistaId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("EspecialidadId");

                    b.HasIndex("MedicoId");

                    b.HasIndex("PacienteId");

                    b.HasIndex("RecepcionistaId");

                    b.ToTable("Turnos");
                });

            modelBuilder.Entity("Entidades.Usuario", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("EstaBloqueado")
                        .HasColumnType("bit");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("PersonaId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("PersonaId")
                        .IsUnique();

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("Entidades.Medico", b =>
                {
                    b.HasBaseType("Entidades.Persona");

                    b.Property<long>("EspecialidadId")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("FechaRegistro")
                        .HasColumnType("datetime2");

                    b.Property<string>("Imagen")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)");

                    b.Property<string>("Matricula")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasIndex("EspecialidadId");

                    b.HasDiscriminator().HasValue("Medico");
                });

            modelBuilder.Entity("Entidades.Paciente", b =>
                {
                    b.HasBaseType("Entidades.Persona");

                    b.HasDiscriminator().HasValue("Paciente");
                });

            modelBuilder.Entity("Entidades.Recepcionista", b =>
                {
                    b.HasBaseType("Entidades.Persona");

                    b.Property<int>("TurnoRecepcionista")
                        .HasColumnType("int");

                    b.HasDiscriminator().HasValue("Recepcionista");
                });

            modelBuilder.Entity("Entidades.Localidad", b =>
                {
                    b.HasOne("Entidades.Provincia", "Provincia")
                        .WithMany("Localidades")
                        .HasForeignKey("ProvinciaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Provincia");
                });

            modelBuilder.Entity("Entidades.Persona", b =>
                {
                    b.HasOne("Entidades.Localidad", "Localidad")
                        .WithMany("Personas")
                        .HasForeignKey("LocalidadId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Localidad");
                });

            modelBuilder.Entity("Entidades.Turno", b =>
                {
                    b.HasOne("Entidades.Especialidad", "Especialidad")
                        .WithMany("Turnos")
                        .HasForeignKey("EspecialidadId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entidades.Medico", "Medico")
                        .WithMany("Turnos")
                        .HasForeignKey("MedicoId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Entidades.Paciente", "Paciente")
                        .WithMany("Turnos")
                        .HasForeignKey("PacienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entidades.Recepcionista", "Recepcionista")
                        .WithMany("Turnos")
                        .HasForeignKey("RecepcionistaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Especialidad");

                    b.Navigation("Medico");

                    b.Navigation("Paciente");

                    b.Navigation("Recepcionista");
                });

            modelBuilder.Entity("Entidades.Usuario", b =>
                {
                    b.HasOne("Entidades.Persona", "Persona")
                        .WithOne("Usuario")
                        .HasForeignKey("Entidades.Usuario", "PersonaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Persona");
                });

            modelBuilder.Entity("Entidades.Medico", b =>
                {
                    b.HasOne("Entidades.Especialidad", "Especialidad")
                        .WithMany("Medicos")
                        .HasForeignKey("EspecialidadId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Especialidad");
                });

            modelBuilder.Entity("Entidades.Especialidad", b =>
                {
                    b.Navigation("Medicos");

                    b.Navigation("Turnos");
                });

            modelBuilder.Entity("Entidades.Localidad", b =>
                {
                    b.Navigation("Personas");
                });

            modelBuilder.Entity("Entidades.Persona", b =>
                {
                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("Entidades.Provincia", b =>
                {
                    b.Navigation("Localidades");
                });

            modelBuilder.Entity("Entidades.Medico", b =>
                {
                    b.Navigation("Turnos");
                });

            modelBuilder.Entity("Entidades.Paciente", b =>
                {
                    b.Navigation("Turnos");
                });

            modelBuilder.Entity("Entidades.Recepcionista", b =>
                {
                    b.Navigation("Turnos");
                });
#pragma warning restore 612, 618
        }
    }
}