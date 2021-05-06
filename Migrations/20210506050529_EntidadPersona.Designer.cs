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
    [Migration("20210506050529_EntidadPersona")]
    partial class EntidadPersona
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

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

            modelBuilder.Entity("Entidades.Localidad", b =>
                {
                    b.Navigation("Personas");
                });

            modelBuilder.Entity("Entidades.Provincia", b =>
                {
                    b.Navigation("Localidades");
                });
#pragma warning restore 612, 618
        }
    }
}
